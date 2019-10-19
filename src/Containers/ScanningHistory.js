import React, { useState, useEffect } from "react";
import axios from "axios";
import Navbar from "../components/Global/Navbar";
import Loader from "../components/Global/Loader/index";
import BreadCrumb from "../components/Global/BreadCrumb/index";
import ComputerInfo from "../components/ScanningHistory/ComputerInfo/index";
import NewTable from "../components/Global/NewTable/";

const ScanningHistory = props => {
  const [computerInfo, setComputerInfo] = useState({});
  const [data, setData] = useState([]);
  const token = localStorage.getItem("token");

  useEffect(() => {
    document.body.style.backgroundColor = "#FAFAFA";
    window.scrollTo(0, 0);
    axios({
      method: "get",
      url: `http://140.119.19.21:8000/api/ScanningRecord?computerID=${props.match.params.id}`,
      headers: {
        Authorization: `Token ${token}`
      }
    }).then(res => {
      setComputerInfo(...res.data[0]);
      setData(res.data[1]);
    });
  }, []);

  const containerStyle = {
    marginTop: "100px"
  };

  let historyData = [];
  data.forEach(item => {
    historyData.push([
      item.scan_id,
      item.score,
      item.start_time,
      item.end_time,
      item.normal_option.toString(),
      item.advance_option.toString(),
      item.customized_option.toString()
    ]);
  });
  return data.length ? (
    <div style={containerStyle}>
      <Navbar />
      <BreadCrumb currentLayer1={true} />
      <ComputerInfo
        computerInfo={computerInfo}
        computerScore={computerInfo.latest_scan_score}
        data={data}
      />
      <div style={{ margin: "10px 5px 15px 10px", zIndex: "-10" }}>
        <NewTable
          title=""
          data={historyData}
          columns={[
            "Scan ID",
            "Score",
            "Start Time",
            "End Time",
            "Normal Option",
            "Advanced Option",
            "Customized Option"
          ]}
          nextUrl="/scanningDetail/"
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

export default ScanningHistory;
