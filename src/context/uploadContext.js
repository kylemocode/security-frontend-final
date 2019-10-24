import React, { createContext, useReducer, useEffect } from "react";
import { UploadReducer } from "./uploadReducer";
export const UploadContext = createContext();

const UploadContextProvider = props => {
  const [identifier, dispatch] = useReducer(UploadReducer, {
    id: "",
    sha1: ""
  });

  return (
    <UploadContext.Provider value={{ identifier, dispatch }}>
      {props.children}
    </UploadContext.Provider>
  );
};

export default UploadContextProvider;
