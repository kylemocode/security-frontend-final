import React, { useState, Fragment } from "react";
import {
  InputContainer,
  InputLogo,
  StyledInput,
  InputOuterContainer,
  InputLabel,
  UploadButton,
  FilenameLabel
} from "./style";
import axios from "axios";
import { history } from "../../../routers/AppRouter";
import SmallLoader from "../../Global/SmallLoader/index";

const UploadInput = () => {
  const [uploadFile, setUploadFile] = useState({});
  const [isUpload, setIsUpload] = useState(false);
  const [uploadError, setUploadError] = useState(false);
  const [uploading, setUploading] = useState(false);

  const handleSubmit = e => {
    if (!isUpload) {
      alert("尚未選擇檔案");
    } else if (uploadFile.name.split(".").pop() != "exe") {
      alert("請上傳 exe 執行檔");
    } else {
      e.preventDefault();
      const data = new FormData();
      data.append("file", uploadFile);
      setUploading(true);
      axios
        .post("http://140.119.19.21:8000/api/FileUpload", data, {
          headers: {
            "Content-Type": "multipart/form-data",
            Authorization: `Token 2b184f072c98bf945ec1efe764d864d9c64348c2`
          }
        })
        .then(res => {
          setUploading(false);
          let path = {
            pathname: "/fileUploadRedirect",
            query: res
          };
          history.push(path);
        })
        .catch(() => setUploadError(true));
    }
  };

  const onChangeHandler = e => {
    setIsUpload(true);
    setUploadFile(e.target.files[0]);
  };

  const flexStyle = {
    display: "flex",
    justifyContent: "flex-end",
    alignItems: "center",
    flexDirection: "column"
  };
  return uploading ? (
    <div style={flexStyle}>
      <div style={{ marginBottom: "20px" }}>
        <SmallLoader color="white" size="80" thickness="15" duration="2" />
      </div>
      <p style={{ color: "white", marginTop: "5px", fontSize: "13px" }}>
        檔案掃描中...
      </p>
    </div>
  ) : (
    <InputContainer>
      <Fragment>
        <InputLogo src="https://cdn1.iconfinder.com/data/icons/hawcons/32/699751-icon-105-document-file-exe-512.png" />
        <InputOuterContainer>
          <form
            onSubmit={handleSubmit}
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center"
            }}
          >
            <InputLabel>
              <StyledInput type="file" name="file" onChange={onChangeHandler} />
              選擇檔案
            </InputLabel>
            {isUpload ? <FilenameLabel>{uploadFile.name}</FilenameLabel> : ""}
            <UploadButton>上傳</UploadButton>
          </form>
        </InputOuterContainer>
      </Fragment>
    </InputContainer>
  );
};

export default UploadInput;
