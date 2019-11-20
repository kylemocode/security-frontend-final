import React, { useState, useEffect } from "react";
import axios from "axios";
import Loader from "../components/Global/Loader/index";
import Navbar from "../components/Global/Navbar";
import CompanyCard from "../components/ComputerList/CompanyCard/index";
import CompanyTotalScore from "../components/ComputerList/CompanyTotalScore/index";
import NewTable from "../components/Global/NewTable/";
import ExeDownloader from "../components/ComputerList/ExeDownloader/index";

const Computerlist = props => {
  const [companyInfo, setCompanyInfo] = useState({});
  const [data, setData] = useState([]);
  const [safeNum, setSafeNum] = useState(0);
  const [warningNum, setWarningNum] = useState(0);
  const [dangerousNum, setDangerousNum] = useState(0);
  const [totalScore, setTotalScore] = useState(0);
  const token = localStorage.getItem("token");

  useEffect(() => {
    document.body.style.backgroundColor = "#FAFAFA";
    window.scrollTo(0, 0);
    axios({
      method: "get",
      url: "http://140.119.19.21:8000/api/Computer",
      headers: {
        Authorization: `Token ${token}`
      }
    }).then(res => {
      let score = 0;
      res.data[1].forEach(computer => {
        score += computer.latest_scan_score;
        switch (computer.last_scan_status) {
          case "Safe":
            setSafeNum(safeNum + 1);
            break;
          case "Warning":
            setWarningNum(warningNum + 1);
            break;
          case "Dangerous":
            setDangerousNum(dangerousNum + 1);
            break;
        }
      });
      setData(res.data[1]);
      setCompanyInfo(res.data[0][0]);
      setTotalScore(Math.round((score / res.data[1].length / 10) * 100));
    });
  }, []);
  const containerStyle = {
    marginTop: "100px"
  };
  const flexCenterStyle = {
    display: "flex",
    justifyContent: "center",
    alignItems: "flex-start"
  };
  let historyData = [];
  data.forEach(item => {
    historyData.push([
      item.id,
      item.latest_scan_score,
      item.deviceName,
      item.userName,
      item.ipAddr,
      item.processor,
      item.os
    ]);
  });
  return data.length ? (
    <div style={containerStyle}>
      <Navbar />
      <div style={flexCenterStyle}>
        <div
          style={{
            width: "45vw",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column"
          }}
        >
          <CompanyCard
            computerNum={data.length}
            companyName={companyInfo.companyName}
          />
          <ExeDownloader />
        </div>
        <div
          style={{
            width: "55vw",
            display: "flex",
            justifyContent: "center",
            alignItems: "center"
          }}
        >
          <CompanyTotalScore
            totalScore={totalScore}
            statusNum={{ safeNum, warningNum, dangerousNum }}
          />
        </div>
      </div>
      <div style={{ margin: "10px 5px 15px 5px", zIndex: "-10" }}>
        <NewTable
          title=""
          data={historyData}
          columns={[
            "Device ID",
            "Latest Score",
            "Device Name",
            "User Name",
            "IP Address",
            "Processor",
            "OS"
          ]}
          nextUrl="/scanningHistory/"
        />
      </div>
    </div>
  ) : (
    <div style={containerStyle}>
      <Navbar />
      <Loader />
    </div>
  );
};

export default Computerlist;
