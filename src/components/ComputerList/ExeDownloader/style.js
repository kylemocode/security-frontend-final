import styled from "styled-components";

export const ExeContainer = styled.div`
  width: 90%;
  padding: 15px 20px;
  box-sizing: border-box;
  background: linear-gradient(-45deg, rgb(47, 150, 163), rgb(48, 62, 143));
  border-radius: 4px;
  box-shadow: 0 4px 8px 0 rgba(12, 0, 51, 0.1);
  display: flex;
  margin-top: 10px;
  position: relative;
  color: white;
  font-family: "微軟正黑體";
`;

export const ExeImage = styled.img`
  width: 100%;
  margin-top: -80px;
  transform: scale(0.7);
`;
export const DownloadBtn = styled.button`
  border-radius: 5px;
  border: solid 1px white;
  color: white;
  transition: 0.3s;
  background-color: transparent;
  font-weight: 600;
  padding: 5px 10px;
  box-sizing: border-box;

  :hover {
    background-color: white;
    color: rgb(47, 150, 163);
  }
`;

export const DownloadHref = styled.a`
  color: white;
  text-decoration: none;
  :hover {
    color: transpqrent;
    text-decoration: none;
  }
`;
