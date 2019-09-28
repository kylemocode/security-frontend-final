import styled from 'styled-components';
import PlaygroundBtn from './index';

export const StyledButton = styled(PlaygroundBtn)`
	margin-top: 20px;
	border-radius: 5px;
	background-color: transparent;
	color: white;
	border: solid 1px white;
	padding: 5px 15px;
	transition: 0.3s;
	font-size: 15px;
	:hover {
		background-color: rgba(0,0,0,0.2);
		border: solid 1px transparent;
		transform: scale(1.05);
	}
`