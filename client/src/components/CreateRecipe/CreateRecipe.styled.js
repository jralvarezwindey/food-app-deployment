import styled from 'styled-components';
import image from '../../media/create-recipe.jpg'
import { colors } from '../GlobalStyle.styled';

export const CreateRecipe = styled.form`
  margin: 65px 65px 30px;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
`

export const SetDiets = styled.div`
  width: 300px;
  display: flex;
  flex-direction: column;
`

export const DropdownButton = styled.div`
  height: 55px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  font-size: 28px;
  font-weight: 600;
  box-shadow: 0px 4px 8px 0px rgba(55,55,55,0.8);
  background-color: ${colors.BLACK};
  color: ${colors.WHITE};
  transition: 200ms;

  &:hover {
    opacity: 0.6;
  }
`

export const DropdownContent = styled.div`
  height: 0;
  cursor: default;
  box-shadow: 0px 8px 16px 0px rgba(55,55,55,0.8);
  transition: height 200ms;
	overflow-y: scroll;

	::-webkit-scrollbar {
		width: 9px;
	}

	::-webkit-scrollbar-thumb {
		border-radius: 10px;
		background-color: ${colors.WHITE}; 
	}
`

export const DropdownContentDiet = styled.p`
  padding: 12px 16px;
  font-size: 20px;
  color: ${props => props.active ? colors.RED : colors.WHITE};

  &:hover {
    background-color: ${colors.WHITE};
    color: ${props => props.active ? colors.RED : colors.BLACK};
  }
`

export const Dropdown = styled.div`
  width: 245px;

  &:hover {
    ${DropdownButton} {
      box-shadow: 0px 0px 0px 0px;
    }

    ${DropdownContent} {
      height: 240px;
    }
  }
`

export const SelectedDiets = styled.div`
  margin-top: 40px;
  width: 300px;
  display: flex;
  justify-content: flex-start;
  align-content: flex-start;
  flex-wrap: wrap;
  box-shadow: 0px 8px 16px 0px rgba(55,55,55,0.8);
`

export const SelectedDiet = styled.span`
  cursor: pointer;
  margin: 8px;
  padding: 4px 14px;
  height: 32px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 80px;
  background-color: ${colors.BLACK};
  color: ${colors.WHITE};
  font-size: 18px;
  transition: 100ms;

  &:hover {
    opacity: 0.8
  }
`

export const Inputs = styled.div`
  padding: 40px;
  display: grid;
  grid-template-rows: 45px 45px 45px 185px 105px;
  grid-template-columns: 240px 720px 40px;
  grid-row-gap: 30px;
  grid-column-gap: 10px;
  box-shadow: 0px 8px 16px 0px rgba(55,55,55,0.8);
  background-image: url(${image});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: -100px 0px;
`

export const ErrorSymbol = styled.p`
  flex-shrink: 0;
  height: 32px;
  width: 32px;
  cursor: default;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 20px;
  background-color: black;
  color: red;
  font-size: 16px;
  font-weight: 600;
`

export const ErrorMessage = styled.p`
  flex-shrink: 0;
  visibility: hidden;
  height: 0px;
  width: 0px;
  font-size: 14px;
  font-weight: 600;
  color: red;
`

export const ErrorContainer = styled.div`
  visibility: ${ props => props.active ? 'visible' : 'hidden' };
  height: fit-content;
  width: fit-content;
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;

  &:hover {
    ${ErrorMessage} {
      visibility: visible;
      margin-left: 10px;
      width: 200px;
    }
  }
`

export const Label = styled.label`
  padding: 15px;
  height: 45px;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  font-size: 18px;
  font-weight: 600;
  letter-spacing: 0.1em; 
  box-shadow: inset 0px 0px 100px 100px rgba(0,0,0,0.7);
  color: ${colors.WHITE}
`

export const Input = styled.input`
  padding: 15px;
  border: 1px solid rgba(255,255,255,0.6); 
  border-radius: 3px;
  box-shadow: inset 0px 0px 100px 100px rgba(0,0,0,0.7);
  background-color: transparent;
  color: ${colors.WHITE};
  font-size: 16px;
  font-weight: 600;
`

export const TextArea = styled.textarea`
  resize: none;
  padding: 15px;
  height: ${props => props.height};
  border: 1px solid rgba(255,255,255,0.6); 
  border-radius: 3px;
  box-shadow: inset 0px 0px 100px 100px rgba(0,0,0,0.7);
  background-color: transparent;
  color: ${colors.WHITE};
  font-size: 16px;
  font-weight: 600;

	::-webkit-scrollbar {
		width: 9px;
	}

	::-webkit-scrollbar-thumb {
		background-color: ${colors.WHITE}; 
		border-radius: 10px;
	}
`

export const AddInstructionContainer = styled.div`
  display: flex;
  align-items: center;
`

export const AddInstructionButton = styled.button`
  visibility: ${props => props.inactive ? 'hidden' : 'visible'};
  align-self: center;
  padding: 2.8px 1.2px 0px 0;
  height: 32px;
  width: 32px;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  border-radius: 20px;
  border: none;
  background-color: ${colors.RED};
  color: ${colors.WHITE};
  font-size: 20px;
  font-weight: 600;
  transition: background-color 250ms;

  &:hover {
    background-color: ${colors.YELLOW};
  }
`

export const Instructions = styled.div`
  visibility: ${props => props.inactive ? 'hidden' : 'visible'};
  padding: 0px 15px;
  height: 240px;
  grid-column: 2 /3;
  box-shadow: inset 0px 0px 100px 100px rgba(0,0,0,0.7);
  color: ${colors.WHITE};
	overflow-y: scroll;
  font-size: 16px;
  font-weight: 600;

	::-webkit-scrollbar {
		width: 9px;
	}

	::-webkit-scrollbar-thumb {
		border-radius: 10px;
		background-color: ${colors.WHITE}; 
	}
`

export const RemoveInstructionButton = styled.button`
  margin: 10px;
  padding: 0px 1.8px 1.2px 0;
  height: 20px;
  width: 20px;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  background-color: ${colors.RED};
  border: none;
  border-radius: 20px;
  color: ${colors.WHITE};
  transition: 250ms;
  font-size: 20px;
  font-weight: 600;

  &:hover {
    background-color: ${colors.YELLOW};
  }
`

export const SubmitButton = styled.button`
  visibility: ${props => props.inactive ? 'hidden' : 'visible'};
  align-self: center;
  cursor: 'pointer';
  height: 440px;
  width: 82px;
  display: flex;
  justify-content: center;
  align-items: center;
  opacity: ${props => props.inactive ? '0' : '1'};
  background-color: ${colors.RED};
  color: ${colors.BLACK};
  transition: background-color 250ms, visibility 200ms, opacity 200ms linear;

  &:hover {
    background-color: ${colors.YELLOW};
  }
`

export const SubmitButtonText = styled.p`
  writing-mode: vertical-lr;
  text-orientation: upright;
  font-size: 32px;
  letter-spacing: 0.4em; 
`
