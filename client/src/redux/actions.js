import axios from 'axios';
 
export const GET_DIETS = 'GET_DIETS';
export const GET_RECIPES = 'GET_RECIPES';
export const FILTER_RECIPES = 'FILTER_RECIPES';
export const SORT_RECIPES = 'SORT_RECIPES';
export const SET_PAGE = 'SET_PAGE';
export const SET_STATUS = 'SET_STATUS';

export function getDiets(diets) {
  return {
    type: GET_DIETS,
    payload: diets,
  };
}

export function getRecipes(query, { defaultRecipes }) {
  return async function(dispatch) {
    try {
      const response = await axios.get(`/recipes?title=${query}&defaultRecipes=${defaultRecipes}`);
      const recipes = response.data;
      dispatch({
        type: GET_RECIPES,
        payload: recipes 
      });
    } catch(error) {
      console.error(error);
    }
  }
};

export function filterRecipes(filter) {
  return {
    type: FILTER_RECIPES,
    payload: filter
  }
}

export function sortRecipes(sortCriteria) {
  return {
    type: SORT_RECIPES,
    payload: sortCriteria,
  }
};

export function setPage(pageNumber) {
  return {
    type: SET_PAGE,
    payload: pageNumber,
  }
}

export function setStatus(status) {
  return {
    type: SET_STATUS,
    payload: status
  }
}
