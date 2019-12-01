import React, { useState } from "react";
import {
  Container,
  LeftCard,
  RightCard,
  LeftCardTitle,
  LeftCardBody,
  ScoreIcon,
  TrafficLightContainer,
  TrafficLight,
  RevealMoreBtn
} from "./style";
import ComputerScore from "./ComputerScore";
import ScatterChart from "./ScatterChart";
import PropTypes from "prop-types";

const ComputerInfo = props => {
  const [revealInfo, setRevealInfo] = useState(false);

  const colorPicker = val => {
    if (val < 4) {
      return "#55ed6c";
    } else if (val < 7) {
      return "#f0a33e";
    } else if (val < 10) {
      return "#de351f";
    }
  };

  const handleToggle = () => {
    setRevealInfo(!revealInfo);
  };

  const textStyle = {
    wordBreak: "break-all",
    whiteSpace: "pre-wrap"
  };
  const spanstyle = {
    fontWeight: "900"
  };

  let scatterDataList = [];
  props.data.forEach(history => {
    scatterDataList.push({
      x: history.score,
      y:
        (new Date(history.end_time).getTime() -
          new Date(history.start_time).getTime()) /
        1000
    });
  });

  return (
    <Container>
      <LeftCard>
        <LeftCardTitle>
          <div style={{ transform: "scale(0.8)", margin: "0" }}>
            <ComputerScore
              data={[
                {
                  name: props.computerInfo.latest_scan_score,
                  value: parseFloat(props.computerInfo.latest_scan_score)
                },
                {
                  name: "Group B",
                  value: 10 - props.computerInfo.latest_scan_score
                }
              ]}
            />
          </div>
          <div
            style={{
              width: "100%",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              marginTop: "-50px"
            }}
          >
            <div
              style={{
                display: "flex",
                alignItems: "flex-start",
                marginTop: "15px"
              }}
            >
              <i
                class="fas fa-laptop"
                style={{ marginTop: "4px", marginRight: "10px" }}
              ></i>
              <p>{props.computerInfo.deviceName}</p>
            </div>
            <div style={{ display: "flex" }}>
              <p style={{ marginTop: "-15px" }}>最近一次掃描分數: </p>
              <ScoreIcon
                style={{ marginTop: "-15px" }}
                bgc={colorPicker(props.computerInfo.latest_scan_score)}
              >
                {props.computerInfo.latest_scan_score}
              </ScoreIcon>
            </div>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center"
              }}
            >
              <p style={{ marginTop: "-15px" }}>
                最近一次安全狀態: {props.computerInfo.last_scan_status}
              </p>
              <TrafficLightContainer>
                <TrafficLight
                  bgc="#31f745"
                  light={props.computerInfo.latest_scan_score < 4 && true}
                />
                <TrafficLight
                  bgc="#f7b539"
                  light={
                    props.computerInfo.latest_scan_score < 7 &&
                    props.computerInfo.latest_scan_score > 3 &&
                    true
                  }
                />
                <TrafficLight
                  bgc="#f53022"
                  light={
                    props.computerInfo.latest_scan_score < 10 &&
                    props.computerInfo.latest_scan_score > 6 &&
                    true
                  }
                />
              </TrafficLightContainer>
            </div>
          </div>
        </LeftCardTitle>
        <LeftCardBody>
          <div
            style={{
              wordBreak: "break-all",
              whiteSpace: "pre-wrap",
              marginTop: "5px",
              paddingRight: "10px"
            }}
          >
            <p style={textStyle}>
              <span style={spanstyle}>裝置uuid: </span>
              {props.computerInfo.deviceUuid}
            </p>
            <p style={textStyle}>
              <span style={spanstyle}>作業系統: </span>
              {props.computerInfo.os}
            </p>
            <p style={textStyle}>
              <span style={spanstyle}>處理器: </span>
              {props.computerInfo.processor}
            </p>
            <p style={textStyle}>
              <span style={spanstyle}>中央處理器(CPU): </span>
              {props.computerInfo.cpu}
            </p>
            <p style={textStyle}>
              <span style={spanstyle}>記憶體空間: </span>
              {props.computerInfo.memoryCapacity}
            </p>
            {revealInfo ? (
              <div>
                <p style={textStyle}>
                  <span style={spanstyle}>IP 位址: </span>
                  {props.computerInfo.ip.map(ip => {
                    return <p key={ip}>{ip}</p>;
                  })}
                </p>
                <p style={textStyle}>
                  <span style={spanstyle}>乙太網路卡位址(Mac Address): </span>
                  {props.computerInfo.mac.map(addr => {
                    return <p key={addr}>{addr}</p>;
                  })}
                </p>
                <p style={textStyle}>
                  <span style={spanstyle}>機碼(Registry): </span>
                  {props.computerInfo.registry.map(regis => {
                    return <p key={regis}>{regis}</p>;
                  })}
                </p>
              </div>
            ) : (
              ""
            )}
            <RevealMoreBtn
              style={{ marginTop: "5px" }}
              onClick={() => handleToggle()}
            >
              {revealInfo ? "收回" : "查看更多"}
            </RevealMoreBtn>
          </div>
        </LeftCardBody>
      </LeftCard>
      <RightCard>
        <div
          style={{
            transform: "scale(0.88)",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            fontWeight: "600"
          }}
        >
          <ScatterChart data={scatterDataList} />
        </div>
      </RightCard>
    </Container>
  );
};
ComputerInfo.propTypes = {
  computerInfo: PropTypes.object,
  data: PropTypes.array
};

export default ComputerInfo;
