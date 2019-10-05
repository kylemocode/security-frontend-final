import React,{ useEffect } from 'react'
import Banner from '../components/FileUpload/Banner/index';
import { PlaygroundGlobalStyle } from '../components/FileUpload/style';
import UploadInput  from '../components/FileUpload/UploadInput/index';
import { PageContainer } from '../components/FileUpload/style';
import { PageInfo } from '../components/FileUpload/style';
import axios from 'axios';


const FileUpload = () => {
	useEffect(() => {
		document.body.style.backgroundColor = "#303e8f";
		
	},[])
	return (
		<PageContainer>
			<PlaygroundGlobalStyle />
			<Banner />
			<PageInfo>
				上傳單一 exe 執行檔，讓 Security Rabbit 資安兔子為您進行技術掃描
			</PageInfo>
			<PageInfo mt={'-40px'}>
				並呈現完整的掃描報告，即時找出潛在威脅。
			</PageInfo>
			<UploadInput />
		</PageContainer>
	)
}

export default FileUpload;
