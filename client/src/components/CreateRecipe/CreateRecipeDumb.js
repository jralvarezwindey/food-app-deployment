import React from 'react';
import { useSelector } from 'react-redux';
import * as S from './CreateRecipe.styled'

export default function CreateRecipeDumb({ details, errors, handleSubmit, handleChange, handleAddInstruction, handleRemoveInstruction, handleSelectedDiets }) {
  const { diets } = useSelector(state => state)

  return (
    <S.CreateRecipe onSubmit={ handleSubmit }> 
      <S.SetDiets> 
        <S.Dropdown>
          <S.DropdownButton>Add diets</S.DropdownButton>
          <S.DropdownContent>
            { diets.map((diet, index) => {
              return <S.DropdownContentDiet active={ details.diets.includes(diet) } key={ index } onClick={() => handleSelectedDiets(diet, index) }>{ diet }</S.DropdownContentDiet>
            }) }
          </S.DropdownContent>
        </S.Dropdown>

        <S.SelectedDiets> 
          { details.diets.map((diet, index) => {
            return <S.SelectedDiet key={ index } onClick={ () => handleSelectedDiets(diet, index)}>{ diet }</S.SelectedDiet>
          }) }
        </S.SelectedDiets>
      </S.SetDiets>

      <S.Inputs > 
        <S.Label htmlFor='title'>TITLE: </S.Label>
        <S.Input maxLength='100' autoComplete='off' name='title' value={ details.title } onChange={ handleChange }/> 
        <S.ErrorContainer active={ errors.title }><S.ErrorSymbol>!</S.ErrorSymbol><S.ErrorMessage>Title for the recipe is required.</S.ErrorMessage></S.ErrorContainer>

        <S.Label htmlFor='score'>SCORE: </S.Label>
        <S.Input name='score' autoComplete='off' value={ details.score } onChange={ handleChange }/> 
        <S.ErrorContainer active={ errors.score }><S.ErrorSymbol>!</S.ErrorSymbol><S.ErrorMessage>Score must be a number between 0 and 5.</S.ErrorMessage></S.ErrorContainer>

        <S.Label htmlFor='healthScore'>HEALTH SCORE: </S.Label>
        <S.Input name='healthScore' autoComplete='off' value={ details.healthScore } onChange={ handleChange }/> 
        <S.ErrorContainer active={ errors.healthScore }><S.ErrorSymbol>!</S.ErrorSymbol><S.ErrorMessage>Health score must be a number between 0 and 100.</S.ErrorMessage></S.ErrorContainer>

        <S.Label htmlFor='summary'>SUMMARY: </S.Label>
        <S.TextArea height='205px' name='summary' autoComplete='off' value={ details.summary } onChange={ handleChange }></S.TextArea> 
        <S.ErrorContainer active={ errors.summary }><S.ErrorSymbol>!</S.ErrorSymbol><S.ErrorMessage>Summary for the recipe is required.</S.ErrorMessage></S.ErrorContainer>

        <S.Label htmlFor='instruction'>ADD INSTRUCTION: </S.Label>
        <S.TextArea height='120px' name="instruction" autoComplete='off' value={ details.instruction } onChange={ handleChange }></S.TextArea>
        <S.AddInstructionButton inactive={ /^\s*$/.test(details.instruction) } type='button' onClick={ handleAddInstruction }>+</S.AddInstructionButton>
        
        <S.Instructions inactive={ details.instructions.length > 0 ? false : true }> 
          { details.instructions.map((instruction, index) => {
              return (
                <p key={ index }> 
                  { instruction } <S.RemoveInstructionButton type='button' onClick={ () => handleRemoveInstruction(index) }>-</S.RemoveInstructionButton>
                </p>
              )
            }) }
        </S.Instructions>
      </S.Inputs>

      <S.SubmitButton disabled={ errors.disableSubmit } inactive={ errors.disableSubmit }>
        <S.SubmitButtonText>SUBMIT</S.SubmitButtonText>
      </S.SubmitButton>
    </S.CreateRecipe>
  )
};

