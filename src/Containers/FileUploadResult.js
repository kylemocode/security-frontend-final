import React, { useState, useEffect } from "react";
import Navbar from "../components/Global/Navbar";
import Loader from "../components/Global/Loader/index";
import FileTitle from "../components/FileDetail/FileTitle";
import { StyledData } from "../components/FileDetail/FileData/style";
import { StyledContent } from "../components/FileDetail/FileContent/style";
import axios from "axios";

const FileDetail = props => {
  const [computerInfo, setComputerInfo] = useState({});
  const [scanFileInfo, setScanFileInfo] = useState({});
  const uploadIdentifier_id = localStorage.getItem("uploadIdentifier_id");
  const uploadIdentifier_sha1 = localStorage.getItem("uploadIdentifier_sha1");
  useEffect(() => {
    document.body.style.backgroundColor = "#FAFAFA";
    window.scrollTo(0, 0);
    axios({
      method: "get",
      url: `http://140.119.19.21:8000/api/FileInfo?fileID=1`,
      headers: {
        Authorization: `Token 2b184f072c98bf945ec1efe764d864d9c64348c2`
      }
    }).then(res => {
      setComputerInfo(res.data[0]);
      setScanFileInfo(res.data[2]);
    });
  }, []);

  const containerStyle = {
    marginTop: "100px"
  };
  
  return scanFileInfo.length ? (
    <div style={containerStyle}>
      <Navbar noLogOut={true} />

      <FileTitle
        score={scanFileInfo[0].score}
        hash={scanFileInfo[0].file_hash_sha1}
        filePath={scanFileInfo[0].file_path}
        fileSize={scanFileInfo[0].file_size}
        createTime={scanFileInfo[0].create_time}
        data={scanFileInfo[0]}
      />
      <StyledContent />
      <StyledData data={scanFileInfo} />
    </div>
  ) : (
    <div style={containerStyle}>
      <Navbar />
      <Loader />
    </div>
  );
};

export default FileDetail;
