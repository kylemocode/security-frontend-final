import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Table from '../components/Table/index';
import Loader from '../components/Loader/index';
import Navbar from '../components/Navbar';
import PieChart from '../components/PieChart/index.js';
import CompanyCard from '../components/CompanyCard/index';
import { history } from '../routers/AppRouter';



const Computerlist  = (props) =>  {
    const [companyInfo, setCompanyInfo] = useState({});
    const [data, setData] = useState([]);
    const [safeNum, setSafeNum] = useState(0);
    const [warningNum, setWarningNum] = useState(0);
    const [dangerousNum, setDangerousNum] = useState(0);
    const token = localStorage.getItem('token');
    useEffect(() => {
        document.body.style.backgroundColor = "#FAFAFA";
        axios({
            method: 'get',
            url: 'http://127.0.0.1:8000/api/Computer',
            headers: {
                'Authorization': `Token ${token}`
        }
          })
            .then(res => {
                res.data[1].forEach((computer) => {
                    switch(computer.last_scan_status) {
                        case 'Safe':
                            setSafeNum(safeNum+1);
                            break;
                        case 'Warning':
                            setWarningNum(warningNum+1);
                            break;
                        case 'Dangerous':
                            setDangerousNum(dangerousNum+1);
                            break;
                    }
                })
                setData(res.data[1]);
                setCompanyInfo(res.data[0][0]);
            })
            // .catch(err => history.push('/'))
    },[])
        const containerStyle = {
            marginTop: '100px'
        }
        
        return (
            data.length ? (
                <div style={containerStyle}>
                    <Navbar />
                    <div style={{width: '50vw',display:'flex',justifyContent:'center',alignItems:'center'}}>
                        <CompanyCard 
                            computerNum={data.length}
                            statusNum={{safeNum,warningNum,dangerousNum}}
                            />
                    </div>
                    <div className="container-fluid">
                        <Table
                            data={data} 
                            tableMain={"Device ID"} 
                            tableTitle={["Latest Score","Device Name","User Name","IP Adress","Processor Name","OS"]} 
                            apiKey={["id","latest_scan_score","deviceName","userName","ipAddr","processor","os"]}/>
                    </div>
                    
                </div>
            ) : <div style={containerStyle}>
                    <Navbar />
                    <Loader />
                    
                </div>
        )
    
}

export default Computerlist;
