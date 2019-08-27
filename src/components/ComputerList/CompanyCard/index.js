import React,{Fragment} from 'react';
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
                        <h5 style={{fontWeight:'800',fontSize:'23px',color:'rgba(0,0,0,0.8)',marginBottom:'10px'}}>VeryBuy 非常勸敗</h5>
                        <p style={{marginBottom: '0',fontWeight:'600',opacity:'0.8'}}>方案: 一般會員</p>
                        <p style={{fontWeight:'600',opacity:'0.8'}}>電腦數量:   {props.computerNum}</p>
                    </CompanyText>
                    <CompanyLogo src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSDAzQfxgfDNJEDB3GsTzF_moZPGWFrHsgNFcTNdCHEgnrKMz9O0A"/>
                </CompanyInfo>
            </CardContainer>
    )
}

CompanyCard.propTypes = {
    statusNum: PropTypes.object,
    computerNum: PropTypes.number
}

export default CompanyCard;

