import React from 'react'
import { ExeContainer, ExeImage, DownloadBtn } from './style';

const ExeDownloader = () => {
    return (
        <ExeContainer>
            <ExeImage src="https://s3-ap-northeast-1.amazonaws.com/www.memepr.com/smartQA/Security+Rabbit+logo+design_white_logo_text.png "/>
            <p style={{marginTop:'-60px',fontFamily:'微軟正黑體',fontWeight:'550',fontSize:'15px'}}>下載 Security Rabbit 的應用程式來掃描電腦中的可執行檔，用戶可以自行選擇掃描方式與範圍，立即取得大至整間企業小至一個執行檔的安全狀態與詳細資訊。</p>
            <DownloadBtn>Download</DownloadBtn>
        </ExeContainer>
    )
}

export default ExeDownloader;
