import { createGlobalStyle } from 'styled-components';
import createRecipeImage from '../media/create-recipe.jpg'
import recipeDetailImage from '../media/recipe-detail.jpg'
import landingImage from '../media/landing.jpg'

export const GlobalStyle = createGlobalStyle`
* {
  box-sizing: border-box;
  overflow-wrap: break-word;
  margin: 0px;
  padding: 0px;
  font-family: 'Montserrat', sans-serif;
	list-style-type: none;
	text-decoration: none;
} 

body {
  height: 100%;
  background-color: black;

  &:after{
    position:absolute; width:0; height:0; overflow:hidden; z-index:-1; // Hide images.
    content: ${`url(${landingImage}) url(${createRecipeImage}) url(${recipeDetailImage})`}; // Load images.
  }
}

button {
  border: none;
  cursor: pointer;
}

input, textarea {
  border: none
}

::placeholder {
  color: #000;
  opacity: 0.6; 
}
`

export const colors = {
  BLACK: '#111',
  WHITE: '#FAF0E0',
  RED: '#FD1F4A',
  YELLOW: '#FBBD0D',
}
