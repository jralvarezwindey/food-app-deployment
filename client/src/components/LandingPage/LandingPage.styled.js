import styled from 'styled-components';
import image from '../../media/landing.jpg'
import { colors } from '../GlobalStyle.styled';

export const LandingPage = styled.div`
  height: 100vh;
	display: flex;
	flex-direction: column;
	justify-content: flex-end;
	background-image: url(${image});
	background-repeat: no-repeat;
	background-size: cover;
	background-position: 0px -80px;
`

export const Button = styled.button`
	margin: 90px;
	width: 340px;
  height: 85px;
	font-size: 24px;
	letter-spacing: 0.4em;
	box-shadow: 0px 0px 40px 40px rgba(0,0,0,1);
	background-color: ${colors.RED};
	color: ${colors.WHITE};
	transition: background-color 950ms;

	&:hover {
		background-color: ${colors.YELLOW};
		background-clip: text;
		-webkit-background-clip: text;
		-webkit-text-fill-color: transparent;
	}
`
