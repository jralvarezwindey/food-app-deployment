import styled from 'styled-components';
import image from '../../media/recipe-detail.jpg'
import { colors } from '../GlobalStyle.styled';

export const Container = styled.div`
	margin: 100px;
  box-shadow: 0px 0px 8px 2px rgba(155,155,155,0.8);
	background-image: url(${image});
	background-repeat: no-repeat;
	background-size: 1100px 1650px;
	background-attachment: static;
	background-position: right center;
`

export const RecipeDetail = styled.div`
	width: 820px;
	display: flex;
	flex-direction: column;
  box-shadow: inset -10px 0px 8px 0px rgba(0,0,0,0.6), 10px 0px 8px 0px rgba(0,0,0,0.4);
	background-color: ${colors.WHITE};
	color: ${colors.BLACK};
`

export const Image = styled.img`
	margin: 12px 32px 12px 12px;
	height: 600px;
	border: ${props => props.border ? '1px solid black' : 'none'};
	background-size: cover;
`

export const Info = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: flex-start;
`

export const Title = styled.h1`
	margin: 32px 46px 3px;
	text-align: left;
	font-size: 32px;
	font-weight: normal;
	letter-spacing: 0.1em;
	text-transform: uppercase;
`

export const Scores = styled.div`
	display: flex;
`

export const Score = styled.p`
	margin: 15px 25px;
	font-size: 26px;

	&:after {
		padding: 5px;
		content: '★★★★★';
		font-size: 26px;
		background: ${(props) => `linear-gradient(90deg, ${colors.YELLOW} ${props.percentage}%, ${colors.BLACK} ${props.percentage}%)`};
		background-clip: text;
		-webkit-background-clip: text;
		-webkit-text-fill-color: transparent;
	}
`

export const HealthScore = styled.i`
	margin: 15px 20px;
	padding: 2px;
	opacity: 0.6;
	color: ${colors.BLACK};
	font-size: 22px;
`

export const Diets = styled.ul`
	margin: 10px 15px;
	display: flex;
	flex-wrap: wrap;
`

export const Diet = styled.li`
	flex-shrink: 0;
	margin: 5px 5px;
	padding: 4px 12px;
	border-radius: 20px;
	background-color: ${colors.BLACK};
	color: ${colors.WHITE};
	font-size: 18px;
`

export const SubTitle = styled.h1`
	margin: 10px 20px;
	font-size: 26px;
`

export const Text = styled.div`
	margin: 15px;
	padding: 10px 10px 10px 34px;
	max-height: 250px;
	background-color: #EAE5D6;
	font-size: 18px;
	overflow-y: scroll;

	::-webkit-scrollbar {
		width: 9px;
	}

	::-webkit-scrollbar-thumb {
		background-color: ${colors.BLACK}; 
		border-radius: 10px;
	}
`
