import React, { Fragment } from "react";
import FileUploadRedirect from "./FileUploadRedirect";
import UploadContextProvider from "../context/uploadContext";

const FileUploadRedirectContext = props => {
  return (
    <Fragment>
      <UploadContextProvider>
        <FileUploadRedirect data={props.location.query.data} />
      </UploadContextProvider>
    </Fragment>
  );
};

export default FileUploadRedirectContext;
