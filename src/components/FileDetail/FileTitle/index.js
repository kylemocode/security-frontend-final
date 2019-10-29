import React from "react";
import {
  FileTitleContainer,
  FileTitleScore,
  FileTitleInfo,
  Info1,
  Info2,
  TitleSpan,
  InfoContainer,
  StickerContainer
} from "./style";
import ComputerScore from "../../ScanningHistory/ComputerInfo/ComputerScore";
import Sticker from "./Sticker";

const FileTitle = props => {
  const containerStyle = {
    width: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center"
  };

  return (
    <div style={containerStyle}>
      <FileTitleContainer>
        <FileTitleScore>
          <div style={{ transform: "scale(0.8)", marginTop: "15px" }}>
            <ComputerScore
              data={[
                {
                  name: props.score,
                  value: props.score
                },
                {
                  name: "Group B",
                  value: 10 - props.score
                }
              ]}
            />
          </div>
        </FileTitleScore>
        <FileTitleInfo>
          <InfoContainer>
            <Info1>
              <p>
                <TitleSpan>File path: </TitleSpan>
                {props.filePath}
              </p>
              <p>
                <TitleSpan>File hash: </TitleSpan>
                {props.hash}
              </p>
            </Info1>
            <Info2>
              <p>
                <TitleSpan>File size: </TitleSpan>
                {props.fileSize} Bytes
              </p>
              <p>
                <TitleSpan>Create time: </TitleSpan>
                {props.createTime}
              </p>
            </Info2>
          </InfoContainer>
          <StickerContainer>
            <Sticker
              signed={props.data.signature_verification}
              score={props.score}
              entropy={props.data.entropy}
              packed={
                Array.isArray(props.data.peutils_packed)
                  ? props.data.peutils_packed
                  : props.data.packed
              }
            />
          </StickerContainer>
        </FileTitleInfo>
      </FileTitleContainer>
    </div>
  );
};

FileTitle.defaultProps = {
  score: 0,
  filePath: "",
  hash: "",
  fileSize: 0,
  createTime: ""
};

export default FileTitle;
