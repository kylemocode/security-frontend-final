import React from 'react'
import { TotalScoreContainer, StatusLabel } from './style';
import { StatusIcon } from '../CompanyCard/style';
import ScoreImage from './ScoreImage';
import  PieChart  from '../PieChart/index';

const CompanyTotalScore = (props) => {

    const flexCenter = {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    }
    return (
        <div style={{width: '100%',marginRight:'5px'}}>
            <TotalScoreContainer>
                <div style={{transform: 'scale(1.1)'}}>
                    <ScoreImage 
                    data={[{
                        name: props.totalScore.toString(),
                        value: props.totalScore
                    },{
                        name: "Group B",
                        value: 100-props.totalScore
                    }]}
                    />
                </div>
                <div style={{display:'flex',flexDirection:'column',alignItems:'center'}}>
                    <div style={{position:'relative',bottom:'18px',transform: 'scale(1.1)',marginRight:'30px'}}>
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
                            }]}
                            />
                    </div>
                    <p style={{fontSize: '16px',fontFamily:'微軟正黑體',fontWeight:'750',marginTop:'-7.5px'}}>電腦狀態比例</p>
                </div>
            </TotalScoreContainer>
            
            <div style={{display:'flex',justifyContent:'space-between',alignItems:'center',marginTop: '30px'}}>
                <StatusLabel>
                    <div style={{width:'100%',height:'100%',display:'flex',flexDirection:'column',alignItems:'center',justifyContent:'center',fontFamily:'微軟正黑體',fontWeight:'700',color:'rgba(0,0,0,0.8)',fontSize:'14px',marginTop:'3px',padding:'18px 0px'}}>
                        <div style={flexCenter}>
                            <StatusIcon bgc="#55ed6c"/>
                            <p style={{margin:'0',marginLeft:'7px',fontSize:'16px'}}>安全狀態 <span>(0-3)</span></p>
                        </div>
                        <p style={{margin:'0px'}}>電腦安全性高</p>
                        <p>安全狀態電腦數量: {props.statusNum.safeNum}</p>
                    </div>
                </StatusLabel>
                <StatusLabel>
                    <div style={{width:'100%',height:'100%',display:'flex',flexDirection:'column',alignItems:'center',justifyContent:'center',fontFamily:'微軟正黑體',fontWeight:'700',color:'rgba(0,0,0,0.8)',fontSize:'14px',marginTop:'3px',padding:'18px 0px'}}>
                        <div style={flexCenter}>
                            <StatusIcon bgc="#f0a33e"/>
                            <p style={{margin:'0',marginLeft:'7px',fontSize:'16px'}}>警告狀態 <span>(4-6)</span></p>
                        </div>
                        <p style={{margin:'0px'}}>電腦可能存在潛在威脅</p>
                        <p>警告狀態電腦數量: {props.statusNum.warningNum}</p>
                     </div>
                </StatusLabel>
                <StatusLabel>
                    <div style={{width:'100%',height:'100%',display:'flex',flexDirection:'column',alignItems:'center',justifyContent:'center',fontFamily:'微軟正黑體',fontWeight:'700',color:'rgba(0,0,0,0.8)',fontSize:'14px',marginTop:'3px',padding:'18px 0px'}}>
                        <div style={flexCenter}>
                            <StatusIcon bgc="#de351f"/>
                            <p style={{margin:'0',marginLeft:'7px',fontSize:'16px'}}>危險狀態 <span>(7-9)</span></p>
                        </div>
                    <p style={{margin:'0px'}}>電腦存在危險</p>
                    <p>危險狀態電腦數量: {props.statusNum.dangerousNum}</p>
                    </div>
                </StatusLabel>
            </div>
        </div>
    )
}

export default CompanyTotalScore;