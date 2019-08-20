import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Table from '../components/Global/Table/index';
import Loader from '../components/Global/Loader/index';
import Navbar from '../components/Global/Navbar';
import PieChart from '../components/ComputerList/PieChart/index.js';
import CompanyCard from '../components/ComputerList/CompanyCard/index';
import CompanyTotalScore from '../components/ComputerList/CompanyTotalScore/index';
import { history } from '../routers/AppRouter';


const Computerlist  = (props) =>  {
    const [companyInfo, setCompanyInfo] = useState({});
    const [data, setData] = useState([]);
    const [safeNum, setSafeNum] = useState(0);
    const [warningNum, setWarningNum] = useState(0);
    const [dangerousNum, setDangerousNum] = useState(0);
    const [totalScore, setTotalScore] = useState(0);
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
                let score = 0;
                res.data[1].forEach((computer) => {
                    score += computer.latest_scan_score;
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
                setTotalScore(Math.round(score/res.data[1].length/10*100));
            })
            // .catch(err => history.push('/'))
    },[])
        const containerStyle = {
            marginTop: '100px'
        }
        const flexCenterStyle = {
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'flex-start'
        }
        console.log(totalScore)
        return (
            data.length ? (
                <div style={containerStyle}>
                    <Navbar />
                    <div style={flexCenterStyle}>
                        <div style={{width: '45vw',display:'flex',justifyContent:'center',alignItems:'center'}}>
                            <CompanyCard 
                                computerNum={data.length}
                                />
                        </div>
                        <div style={{width: '55vw',display:'flex',justifyContent:'center',alignItems:'center'}}>
                            <CompanyTotalScore 
                                totalScore={totalScore}
                                statusNum={{safeNum,warningNum,dangerousNum}}
                                />
                        </div>
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