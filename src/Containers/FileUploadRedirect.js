import React, { useEffect, useContext, useState } from "react";
import {
  PageContainer,
  LogoImg,
  Message,
  StyledLink,
  CounterContainer
} from "../components/FileUploadRedirect/style";
import { UploadContext } from "../context/uploadContext";
import { setHashId } from "../context/uploadAction";
import { history } from "../routers/AppRouter";

const FileUploadRedirect = props => {
  const { dispatch } = useContext(UploadContext);
  const [second, setSecond] = useState(30);
  useEffect(() => {
    document.body.style.backgroundColor = "white";
    dispatch(setHashId(props.data));
    const counter = setInterval(() => {
      if (second < 0) {
        history.push("/fileUploadResult");
        return;
      }
      setSecond(second => second - 1);
    }, 1000);
    return () => clearInterval(counter);
  }, []);

  return (
    <PageContainer>
      <LogoImg src="https://i.imgur.com/7GXNN7f.png" />
      <Message>
        檔案已上傳並進行掃描中，預估花費30秒即可完成掃描，請點選以下連結前往結果頁查看結果，或等待計時器倒數完畢後自動將您導至分析結果頁。
      </Message>
      <p style={{ fontSize: "15px" }}>＊注意： 離開此頁將無法再次導回</p>
      <StyledLink href="/fileUploadResult">分析結果連結</StyledLink>
      <CounterContainer>{second}</CounterContainer>
    </PageContainer>
  );
};

export default FileUploadRedirect;
