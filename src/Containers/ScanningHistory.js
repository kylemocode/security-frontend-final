import React from 'react'

const ScanningHistory = (props) => {
    return (
        <div>
            <p>scanning history</p>
            <p>{props.match.params.id}</p>
        </div>
    )
}


export default ScanningHistory;