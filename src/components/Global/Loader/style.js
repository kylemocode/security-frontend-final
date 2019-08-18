import styled,{ keyframes } from 'styled-components';

export const rotate = keyframes`
    from {
        transform : rotate(0deg);
    }
    to{
        transform : rotate(360deg);
    }
`

export const Container = styled.div`
    width:100%;
    height : 100vh;
    text-align: center;
`

export const Svg = styled.svg`
    position : relative;
    top:33%;
    animation :${rotate} 1.5s infinite linear;
`

export const Circle = styled.circle`
    fill : none;
    stroke : #203a63;
    stroke-width : 3;
`
export const SmallCircle = styled.circle`
    fill : #203a63;
    stroke-width : 4;
`

