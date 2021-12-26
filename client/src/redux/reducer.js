import { GET_DIETS, GET_RECIPES, FILTER_RECIPES, SORT_RECIPES, SET_PAGE, SET_STATUS } from './actions.js';

const initialState = {
  diets: [],

  recipes: {
    fetched: [],
    displayed: [],
  },

  recipesDisplayParameters: {
    status: 'initial',
    page: 0,
    filters: [],
  },
};

export default function reducer(state = initialState, { type, payload }) {
  switch(type) {
    case GET_DIETS:
      return {
        ...state,
        diets: payload,
      }

    case GET_RECIPES: 
      return {
        ...state,
        recipes: {
          fetched: payload,
          displayed: payload
        },
        recipesDisplayParameters: {
          status: payload.length > 0 ? 'displaying' : 'not found',
          page: 0, 
          filters: [],
        },
      };

    case FILTER_RECIPES:
      const [newFilters, filteredRecipes] = filterRecipes([...state.recipes.fetched], [...state.recipesDisplayParameters.filters], payload);
      return {
        ...state,
        recipes: {
          ...state.recipes,
          displayed: filteredRecipes 
        },
        recipesDisplayParameters: {
          ...state.recipesDisplayParameters,
          filters: newFilters,
          page: 0
        }
      }

    case SORT_RECIPES:
      return {
        ...state,
        recipes: {
          ...state.recipes,
          displayed: sortRecipes([...state.recipes.displayed], payload),
        },
        recipesDisplayParameters: {
          ...state.recipesDisplayParameters,
          page: 0,
        }
      }

    case SET_PAGE: 
      return {
        ...state,
        recipesDisplayParameters: {
          ...state.recipesDisplayParameters,
          page: payload 
        }
      }

    case SET_STATUS:
      return {
        ...state,
        recipesDisplayParameters: {
          ...state.recipesDisplayParameters,
          status: payload
        }
      }

    default:
      return {
        ...state,
      };
  }
};

function filterRecipes(recipes, filters, filter) {
  filters.includes(filter) 
    ? filters.splice(filters.indexOf(filter), 1) 
    : filters.push(filter)
  return [filters, recipes.filter(recipe => {
    return filters.every(filter => recipe.diets.includes(filter))
  })]
}

function sortRecipes(recipes, sortCriteria) {
  switch(sortCriteria) {
    case 'az': return recipes.sort((x, y) => x.title.localeCompare(y.title));
    case 'za': return recipes.sort((x, y) => y.title.localeCompare(x.title));
    case 'score': return recipes.sort((x, y) => y.score - x.score);
    default: return recipes;
  }
};

