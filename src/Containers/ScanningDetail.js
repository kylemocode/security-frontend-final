import React,{ useEffect, useState } from 'react'
import Navbar from '../components/Global/Navbar';
import Loader from '../components/Global/Loader/index';
import BreadCrumb from '../components/Global/BreadCrumb/index';
import axios from 'axios';

const ScanningDetail = (props) => {
    const [scanningInfo, setScanningInfo] = useState({});
    const [scanningFiles, setScanningFiles] = useState([]);
    const token = localStorage.getItem("token");
    useEffect(() => {
        document.body.style.backgroundColor = "#FAFAFA";
        axios({
            method: 'get',
            url: `http://127.0.0.1:8000/api/ScanningDetails?scanID=${props.match.params.id}`,
            headers: {
                'Authorization': `Token ${token}`
        }
          })
          .then((res) => {
              setScanningInfo(...res.data[1]);
              setScanningFiles(res.data[2]);
          })
    },[])

    const containerStyle = {
        marginTop: '100px'
    }
    console.log(scanningInfo);
    console.log(scanningFiles);
    return (
        scanningFiles.length? (
            <div style={containerStyle}>
                <Navbar />
                <BreadCrumb 
                    currentLayer2={true}/>
            </div>
        ) : (
            <div style={containerStyle}>
                <Navbar />
                <Loader />
            </div>
        )
    )
}

export default ScanningDetail;
