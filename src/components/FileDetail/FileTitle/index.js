import React from 'react'
import { FileTitleContainer, FileTitleScore, FileTitleInfo, Info1, Info2, Info3, Info4, InfoContainer, StickerContainer } from './style';
import ComputerScore from '../../ScanningHistory/ComputerInfo/ComputerScore';
import Sticker from './Sticker';

const FileTitle = (props) => {
    const containerStyle = {
        width: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    }

    return (
        <div style={containerStyle}>
            <FileTitleContainer>
                <FileTitleScore>
                    <div style={{transform: 'scale(0.8)', marginTop:'15px'}}>
                        <ComputerScore 
                            data={[{
                                name: props.score,
                                value: props.score
                            },{
                                name: "Group B",
                                value: 10-props.score
                            }]}/>
                    </div>
                </FileTitleScore>
                <FileTitleInfo>
                    <InfoContainer>
                        <Info1>
                            <p>{props.filePath}</p>
                            <p>{props.hash}</p>
                        </Info1>
                        <Info2>
                            {props.fileSize}
                            {props.createTime}    
                        </Info2>
                    </InfoContainer>
                    <StickerContainer>
                        <Sticker />
                    </StickerContainer>
                </FileTitleInfo>
            </FileTitleContainer>
        </div>
    )
}

export default FileTitle;
