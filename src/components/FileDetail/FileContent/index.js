import React from "react";

const FileContent = React.memo(({ className }) => {
  return (
    <div className={className}>
      <p className="content_text">DETAILS</p>
    </div>
  );
});

export default FileContent;
