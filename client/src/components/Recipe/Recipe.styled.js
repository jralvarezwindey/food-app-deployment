import styled from 'styled-components';
import { colors } from '../GlobalStyle.styled';

export const Recipe = styled.div`
	position: relative;
	margin: 15px;
	width: 435px;
	height: 540px;
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	background-color: ${colors.WHITE};
`

export const Image = styled.img`
	min-height: 300px;
	background-size: cover;
`

export const Info = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: space-between;
`

export const Title = styled.h1`
	margin: 25px 27px 0px;
	color: ${colors.BLACK};
	text-align: left;
	font-size: 26px;
	font-weight: normal;
	letter-spacing: 0.1em;
	text-transform: uppercase;
	white-space: nowrap;
  overflow-x: scroll;

	::-webkit-scrollbar {
		display: none;  /* Hide scrollbar in Chrome, Safari and Opera. */
		scrollbar-width: none;  /* Hide in Firefox. */
		-ms-overflow-style: none;  /* Hide in IE and Edge. */
	}
`

export const Score = styled.div`
	margin: 5px 10px 5px;
	font-size: 18px;

	&:before {
		position: relative;
		top: 3px;
		content: '★★★★★';
		font-size: 32px;
		background: ${(props) => `linear-gradient(90deg, #FBBD0D ${props.percentage}%, #2D2C2E ${props.percentage}%)`};
		background-clip: text;
		-webkit-background-clip: text;
		-webkit-text-fill-color: transparent;
	}
`

export const Diets = styled.ul`
	margin: 10px 5px 20px;
	width: auto;
	display: flex;
	flex-wrap: no-wrap;
  overflow-x: scroll;

	::-webkit-scrollbar {
		display: none;  /* Hide scrollbar in Chrome, Safari and Opera. */
		scrollbar-width: none;  /* Hide in Firefox. */
		-ms-overflow-style: none;  /* Hide in IE and Edge. */
	}
`

export const Diet = styled.li`
	flex-shrink: 0;
	margin: 0px 5px;
	padding: 2px 9px;
	width: auto;
	display: flex;
	justify-content: center;
	align-items: center;
	font-size: 16px;
	border-radius: 20px;
	background-color: ${colors.BLACK};
	color: ${colors.WHITE};
`

export const DetailButton = styled.button`
	height: 60px;
	width: 100%;
	display: flex;
	justify-content: center;
	align-items: center;
	background-color: ${colors.RED};
	color: ${colors.WHITE};
	font-size: 24px;
	letter-spacing: 0.1em;
	transition: 250ms;

	&:hover {
		background: ${colors.YELLOW};
	}
`
