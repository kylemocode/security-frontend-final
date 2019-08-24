import React,{ useState,useEffect } from 'react'
import axios from 'axios';
import Navbar from '../components/Global/Navbar';
import Loader from '../components/Global/Loader/index';
import Table from '../components/Global/Table/index';
import BreadCrumb from '../components/Global/BreadCrumb/index';
import ComputerInfo from '../components/ScanningHistory/ComputerInfo/index';

const ScanningHistory = (props) => {
    const [computerInfo,setComputerInfo] = useState({});
    const [data, setData] = useState([]);
    const token = localStorage.getItem("token");

    useEffect(() => {
        document.body.style.backgroundColor = "#FAFAFA";
        axios({
            method: 'get',
            url: `http://127.0.0.1:8000/api/ScanningRecord?computerID=${props.match.params.id}`,
            headers: {
                'Authorization': `Token ${token}`
        }
          })
          .then((res) => {
              setComputerInfo(...res.data[0]);
              setData(res.data[1])
          })
    },[])

    const containerStyle = {
        marginTop: '100px'
    }
    console.log('computer',computerInfo)
    // console.log('data',data)
    return (
        data.length? (
        <div style={containerStyle}>
            <Navbar />
            <BreadCrumb 
                currentLayer1={true}/>
            <ComputerInfo
                computerInfo={computerInfo} 
                computerScore={computerInfo.latest_scan_score}/>
        </div>
        ) : <div style={containerStyle}>
                <Navbar />
                <Loader />
            </div>
    )
}


export default ScanningHistory;