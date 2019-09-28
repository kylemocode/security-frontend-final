import styled, { createGlobalStyle } from 'styled-components';

export const PlaygroundGlobalStyle = createGlobalStyle`
	body {
		width: 100vw;
		height: 100vh;
		background: rgb(48,62,143);
		background-repeat: no-repeat;
		background-attachment: fixed;
		margin: 0;
		padding: 0;
		margin-bottom: 0;
	}
`

export const PageContainer = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	align-items: center;
	height: 100vh;
	padding-top: 80px;
	padding-bottom: 100px;
`

export const PageInfo = styled.p`
	font-size: 16px;
	color: rgba(255,255,255,0.7);
	margin-top: ${props => props.mt ? props.mt : "0"};
`