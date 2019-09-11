import React,{ useState, useEffect } from 'react';
import axios from 'axios';

const FileDetail = (props) => {

    const token = localStorage.getItem("token");

    useEffect(() => {
        document.body.style.backgroundColor = "#FAFAFA";
        axios({
            method: 'get',
            url: ``,
            headers: {
                'Authorization': `Token ${token}`
        }
          })
    },[]);

    return (
        <div>
            filedetail-{props.match.params.id}
        </div>
    )
}

export default FileDetail;
