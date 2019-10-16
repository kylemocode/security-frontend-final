import React from "react";
import { history } from "../../../routers/AppRouter";

const PlaygroundBtn = React.memo(props => {
  const handleClick = () => {
    history.push("/fileUpload");
  };

  return (
    <button className={props.className} onClick={handleClick}>
      單一檔案分析
    </button>
  );
});

export default PlaygroundBtn;
