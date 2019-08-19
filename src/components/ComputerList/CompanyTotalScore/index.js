import React from 'react'
import { TotalScoreContainer, StatusLabel } from './style';
import ScoreImage from './ScoreImage';
const CompanyTotalScore = (props) => {
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
                
                </StatusLabel>
                <StatusLabel>
                
                </StatusLabel>
                <StatusLabel>
                
                </StatusLabel>
            </div>
        </div>
    )
}

export default CompanyTotalScore;