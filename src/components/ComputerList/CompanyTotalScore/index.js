import React from 'react'
import { TotalScoreContainer, StatusLabel } from './style';
import { StatusIcon } from '../CompanyCard/style';
import ScoreImage from './ScoreImage';

const CompanyTotalScore = (props) => {

    const flexCenter = {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    }
    return (
        <div style={{width: '100%',marginRight:'5px'}}>
            <TotalScoreContainer>
                <ScoreImage 
                    data={[{
                        name: props.totalScore.toString(),
                        value: props.totalScore
                    },{
                        name: "Group B",
                        value: 100-props.totalScore
                    }]}/>
            </TotalScoreContainer>
            <p style={{fontFamily:'微軟正黑體',margin:'12px',fontWeight:'700',color:'rgba(0,0,0,0.8)'}}>電腦分數層級說明</p>
            <div style={{display:'flex',justifyContent:'space-between',alignItems:'center'}}>
                <StatusLabel>
                    <div style={{width:'100%',height:'100%',display:'flex',flexDirection:'column',alignItems:'center',justifyContent:'center',fontFamily:'微軟正黑體',fontWeight:'700',color:'rgba(0,0,0,0.8)',fontSize:'14px'}}>
                        <div style={flexCenter}>
                            <StatusIcon bgc="#55ed6c"/>
                            <p style={{margin:'0',marginLeft:'7px'}}>安全狀態 <span>(0-3)</span></p>
                        </div>
                        <p style={{margin:'0px'}}>電腦安全性高</p>
                    </div>
                </StatusLabel>
                <StatusLabel>
                    <div style={{width:'100%',height:'100%',display:'flex',flexDirection:'column',alignItems:'center',justifyContent:'center',fontFamily:'微軟正黑體',fontWeight:'700',color:'rgba(0,0,0,0.8)',fontSize:'14px'}}>
                        <div style={flexCenter}>
                            <StatusIcon bgc="#f0a33e"/>
                            <p style={{margin:'0',marginLeft:'7px'}}>警告狀態 <span>(4-6)</span></p>
                        </div>
                        <p style={{margin:'0px'}}>電腦可能存在潛在威脅</p>
                     </div>
                </StatusLabel>
                <StatusLabel>
                    <div style={{width:'100%',height:'100%',display:'flex',flexDirection:'column',alignItems:'center',justifyContent:'center',fontFamily:'微軟正黑體',fontWeight:'700',color:'rgba(0,0,0,0.8)',fontSize:'14px'}}>
                        <div style={flexCenter}>
                            <StatusIcon bgc="#de351f"/>
                            <p style={{margin:'0',marginLeft:'7px'}}>危險狀態 <span>(7-9)</span></p>
                        </div>
                    <p style={{margin:'0px'}}>電腦存在危險</p>
                    </div>
                </StatusLabel>
            </div>
        </div>
    )
}

export default CompanyTotalScore;