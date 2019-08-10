import styled,{ createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
    body {
        width: 100vw;
        height: 100vh;
        background: linear-gradient(rgb(47,150,163),rgb(48,62,143));
        background-repeat: no-repeat;
        background-attachment: fixed;
        margin: 0;
        padding: 0;
        margin-bottom: 0;
    }
`
// 1c2238

export const Container = styled.div`
    width: 100vw;
    height: 100vh;
    display: flex;
    position: fixed;
    top: 0;
    margin: 0;
    padding: 0;
`
// flex-direction: column;
// justify-content: center;
// align-items: center;
export const FormContainer = styled.div`
    flex: 1;
    background-color: rgba(0,0,0,0.5);
    border-radius: 0px 120px 0px 0px;
`

export const InfoContainer = styled.div`
    flex: 2;
    flex-direction: column;
    display: flex;
    justify-content: center;
    align-items: center;
`

export const Title = styled.h2`
    font-size: 50px;
    color: white;
    font-family: 'play';
    opacity: 1;
    transition: 0.3s;
    margin-left: 20px;
`

export const Content = styled.p`
    font-size: 16px;
    color: rgba(255,255,255,0.9);
    font-family: '微軟正黑體';
    opacity: 1;
    transition: 0.3s;
    
`
export const LoginButton = styled.button`
    width: 90px;
    height: 40px
    background-color: #f54a16;
    color: white;
    font-family: '微軟正黑體';
    border: none;
    border-radius: 5px;
    padding: 5px 10px;
    margin-top: 20px;
    transition: 0.3s;

    :hover {
        background-color: #bf3026;
    }
`

