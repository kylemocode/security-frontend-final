import styled from 'styled-components';

export const TotalScoreContainer = styled.div`
    width: 100%;
    padding: 25px;
    box-sizing: border-box;
    background: #FFF;
    border-radius: 4px;
    box-shadow: 0 4px 8px 0 rgba(12,0,51,0.1);
    display: flex;
    transition: 0.5s;
    

    :hover {
        transform: scale(1.02);
    }
`

export const StatusLabel = styled.div`
    width: 32%
    height: 60px;
    box-sizing: border-box;
    background: #FFF;
    border-radius: 4px;
    box-shadow: 0 4px 8px 0 rgba(12,0,51,0.1);
`