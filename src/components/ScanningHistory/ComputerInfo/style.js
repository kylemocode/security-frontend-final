import styled,{ createGlobalStyle } from 'styled-components';

export const Container = styled.div`
    width: 100vw;
    display: flex;
    padding: 30px 40px;
    font-family:'微軟正黑體';
    white-space: pre;
`

export const LeftCard = styled.div`
    flex: 4;
    padding: 20px 20px 20px 20px;
    box-sizing: border-box;
    background: #FFF;
    border-radius: 4px;
    box-shadow: 0 4px 8px 0 rgba(12,0,51,0.1);
    display: flex;
    transition: 0.5s;
    min-height: 355px;
    max-height: 355px;
`

export const RightCard = styled.div`
    flex: 3;
    padding: 20px 20px 20px 20px;
    box-sizing: border-box;
    background: #FFF;
    border-radius: 4px;
    box-shadow: 0 4px 8px 0 rgba(12,0,51,0.1);
    min-height: 355px;
    max-height: 355px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-left: 10px;
`

export const LeftCardTitle = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-contents: center;
`

export const LeftCardBody = styled.div`
    flex: 1;
    border-radius: 0px 4px 4px 0px;
    word-break: break-all;
    overflow-y: scroll;
    min-height: 330px;
    max-height: 330px;
    
`

export const ScoreIcon = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 25px;
    height: 25px;
    border-radius: 8px;
    border: none;
    color: white;
    background: ${props => props.bgc && props.bgc};
`
export const TrafficLightContainer = styled.div`
    width: 80px;
    height: 30px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: rgba(0,0,0,0.8);
    border-radius: 10px;
    margin-bottom: 8px;
    margin-top: -10px;
`
export const TrafficLight = styled.div`
    width: 20px;
    height: 20px;
    border: none;
    background-color: ${props => props.bgc && props.bgc}
    border-radius: 50%;
    margin: 0px 3px;
    opacity: ${props => props.light ? 1.5 : 0.2};

`
export const RevealMoreBtn = styled.button`
    color: white;
    height: 40px;
    border: none;
    border-radius: 5px;
    background-color: #228ee0;
    font-weight: 600;
    min-width: 70px;
    margin-bottom: 5px;
`