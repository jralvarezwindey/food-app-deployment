import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import CreateRecipeDumb from './CreateRecipeDumb';
import defaultRecipe from '../../media/recipe.svg'

function validation(details) {
  const error = { disableSubmit: false, title: false, summary: false, score: false, healthScore: false };
  const scoreRegex = /^0*([0-5](\.[0-9]*)?$)/;
  const healthScoreRegex = /^0*(([0-9][0-9]?)|(100))(\.[0-9]*)?$/;
  if (/^\s*$/.test(details.title)) { error.title = true; error.disableSubmit = true };
  if (/^\s*$/.test(details.summary)) { error.summary = true; error.disableSubmit = true };
  if (!scoreRegex.test(details.score) && details.score !== '') { error.score = true; error.disableSubmit = true };
  if (!healthScoreRegex.test(details.healthScore) && details.healthScore !== '') { error.healthScore = true; error.disableSubmit = true };
  return error;
}

export default function CreateRecipeSmart() {
  const [errors, setErrors] = useState({title: false, summary: false, score: false, healthScore: false, disableSubmit: true});
  const [details, setDetails] = useState({ title: '', summary: '', score: '', healthScore: '', instruction: '', instructions: [], diets: []});
  const navigate = useNavigate();

  async function handleSubmit(e) {
    e.preventDefault();

    const {title, summary, score, healthScore, instructions, diets} = details;

    try {
      const result = await axios({
        method: 'post',
        url: '/recipes/create',
        headers: {}, 
        data: {title, summary, score, healthScore, instructions, diets, image: defaultRecipe},
      });
      navigate(`/recipe/detail/${result.data.id}`);
    } catch(error) {
      console.log(error);
    }
  }

  function handleChange(event) {
    setDetails({
      ...details,
      [event.target.name]: event.target.value,
    });
    setErrors(validation({
      ...details,
      [event.target.name]: event.target.value,
    }));
  } 

  function handleAddInstruction(event) {
    setDetails({
      ...details,
      instruction: '',
      instructions: [...details.instructions, details.instruction]
    });
  }

  function handleRemoveInstruction(removedIndex) {
    setDetails({
      ...details,
      instructions: details.instructions.filter((instruction, index) =>  index !== removedIndex),
    })
  }

  function handleSelectedDiets(diet) {
    const index = details.diets.indexOf(diet);
    setDetails({
      ...details,
      diets: index !== -1 ? details.diets.filter(selectedDiet => selectedDiet !== diet) : [...details.diets, diet]
    })
  }

  return  <CreateRecipeDumb 
      details={ details }
      errors={ errors }
      handleSubmit={ handleSubmit }
      handleChange={ handleChange }
      handleAddInstruction={ handleAddInstruction }
      handleRemoveInstruction={ handleRemoveInstruction }
      handleSelectedDiets={ handleSelectedDiets }
    />
};
