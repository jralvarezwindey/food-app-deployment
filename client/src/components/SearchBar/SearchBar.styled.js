import styled from 'styled-components';
import { colors } from '../GlobalStyle.styled';

export const SearchBar = styled.form`
  all: unset;
  width: 633px;
  height: 60px;
  display: flex;
  align-items: center;
`

export const Query = styled.input`
  all: unset;
  padding: 0px 30px;
  height: 100%;
  width: 100%;
  background-color: ${colors.WHITE};
  color: ${colors.BLACK};
  font-size: 16px;
  font-weight: 600;
`

export const Button = styled.button`
  all: unset;
  margin-left: 12px;
  width: 60px;
  height: 60px;
  display: flex;
  align-items: center;
  background-color: ${colors.BLACK};
  cursor: pointer;
`

export const MagnifyingGlass = styled.svg`
  width: 38px;
  height: 38px;
  color: ${colors.WHITE};
  fill: currentColor;
	transition: 100ms;

  ${Button}:hover & {
    opacity: 0.8;
  }
`
