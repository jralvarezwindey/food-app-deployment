/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import axios from 'axios';
import Loading from '../Loading/Loading.js';
import * as S from './RecipeDetail.styled.js';

export default function RecipeDetail() {
  const defaultRecipesNumber = 100;
  const { id } = useParams();
  const [loading, setLoading] = useState(true);
  const [details, setDetails] = useState({
    title: '',
    image: '',
    diets: [],
    summary: '',
    score: '',
    healthScore: '',
    instructions: [],
  });

  useEffect(() => {

    (async function() {
      try {
        const response = await axios.get(`/recipes/detail/${id}`); 
        setDetails({
          ...details,
          ...response.data, 
        });
        setLoading(false);
      } catch(error) {
        console.log(error);
      }
    })();
  }, [])

  return (
    <> { loading ? <Loading/> : <S.Container>
      <S.RecipeDetail>
        { /* Border property is defined in order to avoid showing a border around */
        /* the recipe's image when the recipe is an user created one (user created images */
        /* are svg images with no background). */ }
        <S.Image src={ details.image } border={ !(details.id  >= defaultRecipesNumber) } alt='recipe'/>

        <S.Info > 
          <S.Title>{ details.title }</S.Title>

          <S.Scores> 
          <S.Score percentage={ details.score * 20 }>Score: </S.Score>
          <S.HealthScore>Health score: { details.healthScore }%</S.HealthScore>
          </S.Scores>

          <S.Diets>
              { details.diets.map((diet, index) => {
                return (
                  <S.Diet key={ index }>{ diet }</S.Diet>
                )
              }) }
          </S.Diets>
          
          <S.SubTitle>Summary:</S.SubTitle>
          <S.Text>{ details.summary }</S.Text>

          <S.SubTitle>Instructions:</S.SubTitle>
          <S.Text> 
            <ol> 
              { details.instructions.map((instruction, index) => {
                return (
                  <li key={ index } style={ {listStyleType: 'decimal'} }> { instruction } </li>
                )
              }) }
            </ol>
          </S.Text>
        </S.Info>
      </S.RecipeDetail>
    </S.Container> } </>
  )
}
