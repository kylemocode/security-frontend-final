import React from "react";

const FileData = props => {
  console.log(props.data[0].imports);
  return (
    <div className={props.className}>
      <div>
        <p className="content__title">File details</p>
        <p className="content__body">
          <span className="content__subtitle">Name: </span>
          {props.data[0].file_path
            ? props.data[0].file_path.split("/").slice(-1)[0]
            : props.data[0].filename}
        </p>
        <p className="content__body">
          <span className="content__subtitle">File version: </span>
          {props.data[0].file_version}
        </p>
        <p className="content__body">
          <span className="content__subtitle">Prod version: </span>
          {props.data[0].prod_version}
        </p>
        <p className="content__body">
          <span className="content__subtitle">Entropy: </span>
          {props.data[0].entropy}
        </p>
      </div>
      <div>
        <p className="content__title">Basic Properties</p>
        <p className="content__body">
          <span className="content__subtitle">File size: </span>
          {Math.round(props.data[0].file_size / 100000)} MB (
          {props.data[0].file_size} Bytes)
        </p>
        <p className="content__body">
          <span className="content__subtitle">SHA1: </span>
          {props.data[0].file_hash_sha1}
        </p>
        {props.data[0].file_magic ? (
          <p className="content__body">
            <span className="content__subtitle">Magic: </span>
            {props.data[0].file_magic}
          </p>
        ) : null}

        {props.data[0].file_state ? (
          <p className="content__body">
            <span className="content__subtitle">State: </span>
            {props.data[0].file_state}
          </p>
        ) : null}
      </div>
      <div className="content__margin">
        <p className="content__title">History</p>
        <p className="content__body">
          <span className="content__subtitle">Created time: </span>
          {props.data[0].create_time}
        </p>
        <p className="content__body">
          <span className="content__subtitle">Modified time: </span>
          {props.data[0].modified_time}
        </p>
        <p className="content__body">
          <span className="content__subtitle">Accessed time: </span>
          {props.data[0].accessed_time}
        </p>
      </div>
      <div className="content__margin">
        <p className="content__title">PE Header</p>
        <p className="content__body">
          <span className="content__subtitle">Machine: </span>
          {props.data[0].pe_machine}
        </p>
        <p className="content__body">
          <span className="content__subtitle">Section Number: </span>
          {props.data[0].pe_sectionNum}
        </p>
        <p className="content__body">
          <span className="content__subtitle">Datetime Stamp: </span>
          {props.data[0].pe_timeDateStamp}
        </p>
        <p className="content__body">
          <span className="content__subtitle">Characteristics: </span>
          {props.data[0].pe_characteristics}
        </p>
        <p className="content__body">
          <span className="content__subtitle">Entry Point: </span>
          {props.data[0].pe_entryPoint}
        </p>
      </div>
      {props.data[0].imports ? (
        <div className="content__margin">
          <p className="content__title">Imports</p>
          {props.data[0].imports.map(item => {
            return <p className="content__body">{item}</p>;
          })}
        </div>
      ) : null}
      {props.data[0].exports ? (
        <div className="content__margin">
          <p className="content__title">Exports</p>
          {props.data[0].exports.map(item => {
            return <p className="content__body">{item}</p>;
          })}
        </div>
      ) : null}
      {props.data[0].sections ? (
        <div className="content__margin">
          <p className="content__title">Sections</p>
          {props.data[0].sections.map(section => {
            return (
              <p className="content__body" style={{ fontSize: "13px" }}>
                {section}
              </p>
            );
          })}
        </div>
      ) : null}
      <div className="content__margin">
        <p className="content__title">Signer</p>
        <p className="content__body width_controller">{props.data[0].signer}</p>
      </div>
      <div className="content__margin">
        <p className="content__title">Counter Signer</p>
        <p className="content__body width_controller">
          {props.data[0].counter_signer}
        </p>
      </div>
      <div className="content__margin">
        <p className="content__title">Signed Date</p>
        <p className="content__body">{props.data[0].signing_date}</p>
      </div>
      <div className="content__margin">
        <p className="content__title">Packed</p>
        <p className="content__body">{props.data[0].packed}</p>
      </div>
    </div>
  );
};

export default FileData;
