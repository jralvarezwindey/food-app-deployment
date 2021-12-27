import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { getRecipes, setStatus } from '../../redux/actions.js';
import * as S from './SearchBar.styled.js'

export default function SearchBar() {
  const [query, setQuery] = useState('')
  const dispatch = useDispatch();
  const navigate = useNavigate();

  function handleChange(event) {
    setQuery(event.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (query === '') return;
    dispatch(setStatus('loading'));
    dispatch(getRecipes(query, { defaultRecipes: false }));
    setQuery('')
    navigate('/');
  }

  return (
    <S.SearchBar onSubmit={ handleSubmit }> 
      <S.Query 
        type='text' 
        name='query' 
        autoComplete='off'
        placeholder='Search recipe...'
        onChange={ handleChange }
        value={ query }
      />

      <S.Button>
        <S.MagnifyingGlass viewBox="0 0 1024 1024">
          <path d={ lensPath }></path>
        </S.MagnifyingGlass>
      </S.Button>
    </S.SearchBar>
  )
};

const lensPath =`
  M848.471 928l-263.059-263.059c-48.941 36.706-110.118
  55.059-177.412 55.059-171.294 0-312-140.706-312-312s140.706-312
  312-312c171.294 0 312 140.706 312 312 0 67.294-24.471
  128.471-55.059 177.412l263.059 263.059-79.529
  79.529zM189.623 408.078c0 121.364 97.091 218.455 218.455
  218.455s218.455-97.091
  218.455-218.455c0-121.364-103.159-218.455-218.455-218.455-121.364
  0-218.455 97.091-218.455 218.455z
`
