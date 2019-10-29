import React from "react";
import { ExeContainer, DownloadBtn, DownloadHref } from "./style";

const ExeDownloader = () => {
  return (
    <ExeContainer style={{ paddingBottom: "50px" }}>
      <div style={{ flex: "2.8" }}>
        <h3
          style={{
            fontWeight: "600",
            fontSize: "22px",
            marginTop: "12px",
            marginBottom: "15px"
          }}
        >
          立即下載 Security Rabbit !
        </h3>
        <p
          style={{
            fontWeight: "300",
            fontSize: "14px",
            color: "rgba(255,255,255,0.7)",
            marginBottom: "30px"
          }}
        >
          下載 Security Rabbit
          應用程式來掃描電腦中的可執行檔，自行選擇掃描方式與範圍，立即取得大至整間企業小至一個執行檔的安全狀態與詳細資訊。
        </p>
        <DownloadBtn style={{ marginBottom: "35px" }}>
          <DownloadHref href="http://localhost:8000/download_scanfile" download>
            立即下載
          </DownloadHref>
        </DownloadBtn>
      </div>
      <div style={{ flex: "2" }}>
        <img
          src="https://s3-ap-northeast-1.amazonaws.com/www.memepr.com/smartQA/Group+56.png"
          style={{
            height: "230px",
            position: "absolute",
            bottom: "0px",
            right: "15px"
          }}
        />
      </div>
    </ExeContainer>
  );
};

export default ExeDownloader;
