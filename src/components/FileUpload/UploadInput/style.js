import styled from 'styled-components';

export const InputContainer = styled.div`
	width: 50vw;
	height: 200px;
	background-color: rgba(255,255,255,0.8);
	border-radius: 5px; 
	display: flex;
	justify-content: space-around;
	align-items: center;
`

export const InputLogo = styled.img`
	width: 100px;
	height: 100px;
`
export const InputOuterContainer = styled.div`
	width: 250px;
	border: solid 1px rgba(48,62,143,0.2);
	padding: 30px 50px;
	min-height: 50px;
	display: flex;
	justify-content: center;
	align-items: center;
	background-color: white;
	border-radius: 5px;
`

export const StyledInput = styled.input`
	
	display: none;
`

export const InputLabel = styled.label`
	color: white;
	height: 30px;
	border-radius: 4px;
	background-color: rgb(48,62,143);
	padding: 5px 15px;
	font-size: 13px;
	cursor: pointer;
`

export const UploadButton = styled.button`
	border: solid 1px rgb(48,62,143);
	background-color: transparent;
	color: rgb(48,62,143);
	font-size: 10px;
	width: 40px;
`

export const FilenameLabel = styled.p`
	color: rgba(0,0,0,0.7);
	font-size: 11px;
`