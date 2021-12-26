import React from 'react';
import { Link } from 'react-router-dom';
import * as S from './Recipe.styled.js';

export default function Recipe(props) {
   return (
      <S.Recipe>
         <S.Image src={ props.image } alt='recipe' />

         <S.Info> 
            <S.Title>{ props.title }</S.Title>

            <S.Score percentage={ props.score * 20 }> ({ props.score })</S.Score>

            <S.Diets>
               { props.diets.map((diet, index) => {
                  return (
                     <S.Diet key={ index }>{ diet }</S.Diet>
                  )
               }) }
            </S.Diets>
         </S.Info>

            
         <Link to={ `/recipe/detail/${ props.id }` }>
            <S.DetailButton>
               DETAIL
            </S.DetailButton>
         </Link>
      </S.Recipe>
   )
};
