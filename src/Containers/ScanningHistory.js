import React from 'react'
import axios from 'axios';
import Navbar from '../components/Global/Navbar';
import Loader from '../components/Global/Loader/index';
import Table from '../components/Global/Table/index';


const ScanningHistory = (props) => {

    const containerStyle = {
        marginTop: '100px'
    }
    return (
        <div style={containerStyle}>
            <Navbar />
            <p>scanning history</p>
            <p>{props.match.params.id}</p>
        </div>
    )
}


export default ScanningHistory;