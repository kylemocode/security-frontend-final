import React from 'react'
import { Container, LeftCard, RightCard, LeftCardTitle, LeftCardBody } from '../../ScanningHistory/ComputerInfo/style';
import ComputerScore from '../../ScanningHistory/ComputerInfo/ComputerScore';
import { TrafficLightContainer, TrafficLight, ScoreIcon } from '../../ScanningHistory/ComputerInfo/style';
import { DetailTitle, DetailContainer, InfoLabel } from './style';
import AmountChart from './AmountChart/index';

const ScanningInfo = (props) => {

    const statusResolver = (status) => {
        if(status.normalOption && !status.advancedOption && !status.customizedOption) {
            return "一般";
        }
        if(!status.normalOption && !status.advancedOption && status.customizedOption) {
            return "客製化";
        }
        if(!status.normalOption && status.advancedOption && !status.customizedOption) {
            return "進階";
        }
    }

    const colorPicker = (val) => {
        if(val<4) {
            return "#55ed6c"
          }else if(val<7){
            return "#f0a33e"
          }else if(val<10){
            return "#de351f"
          }
    }

    const statusPicker = (val) => {
        if(val<4) {
            return "安全"
          }else if(val<7){
            return "警告"
          }else if(val<10){
            return "危險"
          }
    }
    return (
        <Container>
            <LeftCard>
                <LeftCardTitle>
                <div style={{transform:'scale(0.8)',margin:'0'}}>
                    <ComputerScore
                        data={[{
                            name: props.score,
                            value: props.score
                        },{
                            name: "Group B",
                            value: 10-props.score
                        }]}/>
                </div>
                <div style={{width:'100%',display:'flex',flexDirection:'column',alignItems:'center',marginTop:'-50px'}}>
                        <div style={{display:'flex',alignItems:'flex-start',marginTop:'15px'}}>
                        <i class="fas fa-broom" style={{marginTop:'4px',marginRight:'5px'}}></i>
                            <p>Scan ID: <span style={{marginLeft:'10px'}}>{props.scanId}</span></p>
                        </div>
                        <div style={{display:'flex'}}>
                            <p style={{marginTop:'-15px'}}>掃描分數:   </p>
                            <ScoreIcon style={{marginTop:'-15px'}} bgc={colorPicker(props.score)}>{props.score}</ScoreIcon>
                        </div>
                        <div style={{display:'flex',flexDirection:'column',alignItems:'center',justifyContent:'center'}}>
                            <p style={{marginTop:'-15px'}}>安全狀態:   {statusPicker(props.score)}</p>
                            <TrafficLightContainer>
                                <TrafficLight bgc="#31f745" light={props.score < 4 && true}/>
                                <TrafficLight bgc="#f7b539" light={props.score < 7 && props.score > 3 && true}/>
                                <TrafficLight bgc="#f53022" light={props.score < 10 && props.core > 6 && true}/>
                            </TrafficLightContainer>
                        </div>
                </div>
                </LeftCardTitle>
                <LeftCardBody>
                        <div style={{display:'flex',justifyContent:'center',alignItems:'center',marginTop:'25px'}}>
                            <DetailTitle>單次掃描資訊</DetailTitle>
                        </div>
                        <div style={{display:'flex',justifyContent:'center',alignItems:'center',marginTop:'25px'}}>
                            <DetailContainer>
                                <InfoLabel>開始時間: {props.startTime}</InfoLabel>
                                <InfoLabel>結束時間: {props.endTime}</InfoLabel>
                                <InfoLabel>掃描時間: {props.endTime}</InfoLabel>
                                <InfoLabel>掃描模式: {statusResolver(props)}</InfoLabel>
                            </DetailContainer>
                        </div>
                </LeftCardBody>
            </LeftCard>

            <RightCard>
                <div style={{transform:'scale(0.82)',marginTop:'15px'}}>
                    <AmountChart />
                </div>
            </RightCard>
        </Container>
    )
}

export default ScanningInfo;
