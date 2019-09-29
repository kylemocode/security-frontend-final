import React, {useState} from 'react'
import { InputContainer, InputLogo, StyledInput, InputOuterContainer, InputLabel, UploadButton, FilenameLabel } from './style';

const UploadInput = () => {

	const [uploadFile, setUploadFile] = useState({})
	const [isUpload, setIsUpload] = useState(false);

	const handleSubmit = (e) => {
		if(!isUpload) {
			alert('尚未選擇檔案');
		}
		e.preventDefault();
		const data = new FormData();
		data.append('file', uploadFile)

		// 呼叫 api
	};

	const onChangeHandler = (e) => {
		setIsUpload(true);
		setUploadFile(e.target.files[0]);
		console.log(e.target.files[0]);
	};

	return (
		<InputContainer>
			<InputLogo src="https://cdn1.iconfinder.com/data/icons/hawcons/32/699751-icon-105-document-file-exe-512.png"/>
			<InputOuterContainer>
				<form onSubmit={handleSubmit} style={{display:'flex',flexDirection:'column',alignItems: 'center'}}>
					<InputLabel>
						<StyledInput type="file" name="file" onChange={onChangeHandler}/>
						選擇檔案
					</InputLabel>
					{ isUpload ? <FilenameLabel>{uploadFile.name}</FilenameLabel> : ""}
					<UploadButton>上傳</UploadButton>
				</form>
			</InputOuterContainer>
		</InputContainer>
	)
}

export default UploadInput;
