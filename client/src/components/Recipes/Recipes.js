import React  from 'react';
import { useSelector } from 'react-redux';
import Recipe from '../Recipe/Recipe.js';
import * as S from './Recipes.styled.js';

export default function Recipes() {
  const { displayed }  = useSelector((state) => state.recipes);
  const page = useSelector((state) => state.recipesDisplayParameters.page);
  const cardsPerPage = 9;

  return (
      <S.Recipes> 
        { 
          displayed?.slice(page*cardsPerPage, (page + 1)*cardsPerPage).map(recipe => {
            return ( 
              <Recipe 
                key= { recipe.id }
                id={ recipe.id }
                title={ recipe.title }
                image={ recipe.image }
                diets={ recipe.diets }
                score={ recipe.score }
              /> 
            )
          })
        }
      </S.Recipes> 
  )
};
