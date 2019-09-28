import React from 'react'
import { InputContainer, InputLogo, StyledInput, InputOuterContainer } from './style';

const UploadInput = () => {
	return (
		<InputContainer>
			<InputLogo src="https://cdn1.iconfinder.com/data/icons/hawcons/32/699751-icon-105-document-file-exe-512.png"/>
			<InputOuterContainer>
				<StyledInput type="file" name="upload"/>
			</InputOuterContainer>
		</InputContainer>
	)
}

export default UploadInput;
