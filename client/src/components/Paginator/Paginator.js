import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setPage } from '../../redux/actions.js';
import * as S from './Paginator.styled.js';
import { colors } from '../GlobalStyle.styled.js';

export default function Paginator() {
  const [pages, setPages] = useState([]);
  const { displayed } = useSelector(state => state.recipes);
  const currentPage = useSelector(state => state.recipesDisplayParameters.page);
  const dispatch = useDispatch();

  useEffect(() => {
    setPages(paginatorButtonsGenerator([...displayed]))
  }, [displayed]);

  function paginatorButtonsGenerator(recipes) {
    const pages = [];
    let i = 0;
    while (recipes.length > 0) {
      recipes = recipes.slice(9);
      pages.push(i++)
    }
    return pages;
  }
  
  function handleClick(newCurrentPage) {
    dispatch(setPage(newCurrentPage));
  };

  return (
    <S.Paginator> 
      { pages.length > 1 && pages.map((page, index) => {
        const selectedButtonStyle = index === currentPage 
          ? { backgroundColor: colors.RED }
          : undefined;
        return (
          <S.Button 
            key={ index }
            style={ selectedButtonStyle }
            onClick={ () => handleClick(index) }>
            { index + 1}
          </S.Button>
        );
      }) }
    </S.Paginator>
  )
};



