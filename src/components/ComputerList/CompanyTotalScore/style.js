import styled from 'styled-components';

export const TotalScoreContainer = styled.div`
    width: 95%;
    padding: 20px;
    box-sizing: border-box;
    min-height: 200px;
    background: #FFF;
    border-radius: 4px;
    box-shadow: 0 4px 8px 0 rgba(12,0,51,0.1);
    display: flex;
    transition: 0.5s;
    flex-direction: column;

    :hover {
        transform: scale(1.02);
    }
`