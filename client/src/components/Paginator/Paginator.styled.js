import styled from 'styled-components';
import { colors } from '../GlobalStyle.styled';

export const Paginator = styled.div`
  background-color: transparent;
`

export const Button = styled.button`
  height: 56px;
  width: 56px;
  font-size: 20px;
  font-weight: 600;
  background-color: transparent;
  color: ${colors.WHITE};
  transition: background-color 300ms;

  &:hover {
    background-color: #222;
  }
`
