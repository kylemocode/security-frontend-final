import React, { Fragment, useEffect } from "react";
import FileUploadRedirect from "./FileUploadRedirect";
import UploadContextProvider from "../context/uploadContext";
import { history } from "../routers/AppRouter";

const FileUploadRedirectContext = props => {
  useEffect(() => {
    if (!props.location.query.data) {
      history.push("/");
    }
  }, []);
  return (
    <Fragment>
      <UploadContextProvider>
        <FileUploadRedirect data={props.location.query.data} />
      </UploadContextProvider>
    </Fragment>
  );
};

export default FileUploadRedirectContext;
