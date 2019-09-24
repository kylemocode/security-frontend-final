import styled from 'styled-components';
import FileContent from './index';

export const StyledContent = styled(FileContent)`
    color: rgba(0,0,0,0.6);
    margin: 25px;
    font-weight: 500;
    width: 100px;
    text-align: center;

    .content_text {
        border-bottom: solid 3px #1661c4
        padding-bottom: 5px;
    }

    .content_title {
        color: black;
        font-weight: 600;
        font-size: 16px;
    }
`