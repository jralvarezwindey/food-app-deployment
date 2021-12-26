import React from 'react';
import { useSelector } from 'react-redux';
import DisplayParameters from '../DisplayParameters/DisplayParameters';
import Recipes from '../Recipes/Recipes.js';
import Paginator from '../Paginator/Paginator.js';
import Loading from '../Loading/Loading.js';
import NotFound from '../NotFound/NotFound.js'
import * as S from './Main.styled.js'

export default function Main() {
  const { status } = useSelector(state => state.recipesDisplayParameters);

  switch(status) {
    case 'loading':
      return <Loading/>;
    case 'not found':
      return <NotFound/>;
    case 'displaying':
      return ( 
        <S.Main> 
          <S.Top>
            <S.Left> 
              <DisplayParameters/> 
            </S.Left>

            <S.Right> 
              <Recipes/>
            </S.Right>
          </S.Top>

          <S.Bottom > 
            <Paginator/>
          </S.Bottom>
        </S.Main>
      );
    default:
      return <></>;
  }
}
