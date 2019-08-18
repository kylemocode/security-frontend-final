import React from 'react';
import { CardContainer, CompanyInfo, CompanyText, CompanyLogo, TotalScoreContainer, TotalScoreImg, TotalScoreInfo, StatusIcon } from './style';
import PieChart from '../PieChart/index';
import PropTypes from 'prop-types';

const CompanyCard = (props) => {

    const flexCenterStyle = {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        margin: '6px 0px'
    }

    const statusCountStyle = {
        marginBottom:'0',
        marginLeft:'15px',
    }

    return (
        <CardContainer>
            <CompanyInfo>
                <CompanyText>
                    <h5 style={{fontWeight:'800',fontSize:'23px'}}>Microsoft Taiwan 台灣微軟</h5>
                    <p style={{marginBottom: '0',fontWeight:'600',opacity:'0.8'}}>方案: 一般會員</p>
                    <p style={{fontWeight:'600',opacity:'0.8'}}>電腦數量:   {props.computerNum}</p>
                </CompanyText>
                <CompanyLogo src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQpggf3Naz7CZXaQIQ0jPKTNsfa9V6b-6uZxWJOoioMN--_WgV1qQ"/>
            </CompanyInfo>
            <TotalScoreContainer>
                <TotalScoreImg>
                    <PieChart 
                        data={[{
                            name: "Group A",
                            value: props.statusNum.safeNum
                        },{
                            name: "Group B",
                            value: props.statusNum.warningNum
                        },{
                            name: "Group C",
                            value: props.statusNum.dangerousNum
                        }]}/>
                </TotalScoreImg>
                <TotalScoreInfo>
                    <div style={flexCenterStyle}>
                        <StatusIcon bgc="#55ed6c"/>
                        <p style={statusCountStyle}>安全狀態電腦數量:  {props.statusNum.safeNum}</p>
                    </div>
                    <div style={flexCenterStyle}>
                        <StatusIcon bgc="#f0a33e"/>
                        <p style={statusCountStyle}>警告狀態電腦數量:  {props.statusNum.warningNum}</p>
                    </div>
                    <div style={flexCenterStyle}>
                        <StatusIcon bgc="#de351f"/>
                        <p style={statusCountStyle}>危險狀態電腦數量:  {props.statusNum.dangerousNum}</p>
                    </div>
                </TotalScoreInfo>
            </TotalScoreContainer>
        </CardContainer>
    )
}

CompanyCard.propTypes = {
    statusNum: PropTypes.object,
    computerNum: PropTypes.number
}

export default CompanyCard;

