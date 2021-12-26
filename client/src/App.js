import React, { useEffect } from 'react';
import { Route, Routes, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import axios from 'axios';
import NavBar from './components/NavBar/NavBar.js';
import LandingPage from './components/LandingPage/LandingPage.js';
import Main from './components/Main/Main.js';
import RecipeDetail from './components/RecipeDetail/RecipeDetail.js';
import CreateRecipeSmart from './components/CreateRecipe/CreateRecipeSmart.js';
import { getDiets, getRecipes, setStatus } from './redux/actions.js';
import { GlobalStyle } from './components/GlobalStyle.styled.js';

export default function App() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    navigate('/landing');

    (async function() {
      dispatch(setStatus('loading'));

      try {
        const response = await axios.get(`/diets`);
        const diets = response.data;
        dispatch(getDiets(diets));
      } catch(error) {
        console.error(error);
      }

      dispatch(getRecipes(null, { defaultRecipes: true }));
    })()
  }, [])

  return (
    <> 
      <GlobalStyle/>
      <NavBar/>
      <Routes>
        <Route path='/landing' element={ <LandingPage/> }/>
        <Route path='/' element={ <Main/> }/>
        <Route path='/recipe/detail/:id' element={ <RecipeDetail/> }/>
        <Route path='/recipe/create' element={ <CreateRecipeSmart/> }/>
      </Routes>   
    </>
    
  );
};
