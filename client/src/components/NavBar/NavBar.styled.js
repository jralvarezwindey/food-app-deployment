import styled from 'styled-components';
import { colors } from '../GlobalStyle.styled';

export const NavBar = styled.nav`
  height: 90px;
  display: flex;
  justify-content: space-around;
  align-items: center;
	background-color: ${colors.BLACK};
`;

export const Wrapper = styled.div`
  width: 300px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`

export const LogoContainer = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
  color: ${colors.WHITE};
  font-size: 30px;
`

export const Image = styled.img`
  margin: 10px 20px 0px 0px;
  height: 100px;
  filter: invert(0.8);
`

export const Button = styled.p`
  cursor: pointer;
  color: ${colors.WHITE};
  font-size: 22px;
  font-weight: 600;
  transition: 100ms;

  &:hover {
    opacity: 0.8;
  }
`
