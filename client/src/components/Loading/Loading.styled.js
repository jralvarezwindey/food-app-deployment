import styled, {keyframes} from 'styled-components';
import { colors } from '../GlobalStyle.styled';
const time = '2.0';
const size = '80px';

export const Loading = styled.div`
  height: 90.4vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: black;
`

const expansion = keyframes`
  0%, 50% { transform: scale(0.0) } 
`

export const Dot = styled.div`
  width: ${size}; height: ${size};
  display: inline-block;
  border-radius: 50%;
  background-color: ${colors.WHITE};
  animation: ${expansion} ${props => `${time}s ${props.i/10*time - 1}s infinite`};

  &:after {
    margin: 10px 0px 0px 10px;
    width: 40px; height: 40px;
    display: inline-block;
    content: '';
    border-radius: 50%;
    background-color: ${colors.YELLOW};
    animation: ${expansion} ${props => `${time}s ${(props.i+1)/10*time - 1}s infinite`};
  }
`
