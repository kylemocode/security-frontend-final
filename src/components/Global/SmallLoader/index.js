import React from "react";

const Loading = React.memo(
  ({ color = "black", size = 50, thickness = 10, duration = 0.5 }) => {
    const styles = {
      animation: `${duration}s linear infinite gotofritz-spin`,
      backfaceVisibility: `hidden`,
      borderColor: color,
      borderRadius: "50%",
      borderStyle: "solid",
      borderWidth: `${thickness}px`,
      borderLeftColor: "transparent",
      display: "inline-block",
      height: `${size}px`,
      width: `${size}px`
    };
    const STYLE_ID = "gotofritz_easy";
    if (!document.getElementById(STYLE_ID)) {
      const styleEl = document.createElement("style");
      styleEl.id = STYLE_ID;
      styleEl.textContent =
        "@keyframes gotofritz-spin { to { transform: rotate(360deg); } }";
      document.getElementsByTagName("head")[0].appendChild(styleEl);
    }
    return <div className="loading" style={styles} />;
  }
);

export default Loading;
