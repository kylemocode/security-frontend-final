import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Table from '../components/Table/index';
import Loader from '../components/Loader/index';
import Navbar from '../components/Navbar';

const Computerlist  = () =>  {
    
    const [data, setData] = useState([]);

    useEffect(() => {
        axios.get('http://127.0.0.1:8000/api/computerList',{
            crossdomain: true
        })
            .then(res => setData(res.data))
    },[])
        const containerStyle = {
            marginTop: '100px'
        }
        return (
            data.length ? (
                <div style={containerStyle}>
                    <Navbar />
                    <Table 
                        data={data} 
                        tableMain={"Computer Name"} 
                        tableTitle={["Computer IP","Mac Address","OS","Processor Name","Memory Capacity"]} 
                        apiKey={["computerName","computerIp","macAddr","os","processorName","memoryCapacity"]}
                        baseURL="scanningHistory"/>
                    
                </div>
            ) : <div style={containerStyle}>
                    <Navbar />
                    <Loader />
                </div>
        )
    
}

export default Computerlist;
