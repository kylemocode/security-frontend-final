import React,{Fragment} from 'react';
import { Container, GlobalStyle, Title, Content, LoginButton,InfoContainer,FormContainer } from '../components/MainPage/style';
import { NavbarImage } from '../components/Navbar/style';
import Navbar from '../components/Navbar';
import ParticlesComponent from '../components/Particles';
import FormikLogin from '../components/LoginForm';


const MainPage = () => {
    return (
        <Fragment>
            <ParticlesComponent />
            <GlobalStyle />
            <Container className="container-fluid">
                <FormContainer>
                    <FormikLogin />
                </FormContainer>
                <InfoContainer>
                    <div style={{display: 'flex',alignItems: 'flex-end',justifyContent: 'center',marginBottom: "20px"}}>
                        <NavbarImage src="https://i.imgur.com/cnEq0M9.png" imgWidth={"100px"} imgHeight={"100px"} imgmb={"10px"}/>
                        <Title>Security Rabbit</Title>
                    </div>
                    <Content style={{fontWeight: 'bold'}}>最佳的企業資訊安全小幫手</Content>
                    <Content>掃描您的 windows 電腦，並運用深度學習技術分析 PE 可執行檔的安全性</Content>
                    <Content>以及呈現相關詳細資訊，清楚掌握電腦的安全狀況，將潛在威脅拒之門外</Content>
                </InfoContainer>
                
            </Container>
        </Fragment>
    )
}


export default MainPage;
