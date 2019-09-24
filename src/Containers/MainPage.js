import React,{Fragment} from 'react';
import { Container, GlobalStyle, Title, Content, InfoContainer,FormContainer } from '../components/MainPage/style';
import { NavbarImage } from '../components/Global/Navbar/style';
import ParticlesComponent from '../components/MainPage/Particles/index';
import FormikLogin from '../components/MainPage/LoginForm/index';


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
                    <div style={{display: 'flex',alignItems: 'flex-end',justifyContent: 'center',marginBottom: "25px"}}>
                        <NavbarImage 
                            src="https://s3-ap-northeast-1.amazonaws.com/www.memepr.com/smartQA/Security+Rabbit+logo+design_dark_logo.png" 
                            imgWidth={"100px"} 
                            imgHeight={"100px"} 
                            imgmb={"-10px"} />
                        <Title style={{marginLeft: '-5px'}}>Security Rabbit</Title>
                    </div>
                    <Content style={{fontWeight: 'bold',fontSize: '19px'}}>最佳的企業資訊安全小幫手</Content>
                    <Content>掃描您的 windows 電腦，並運用深度學習技術分析 PE 可執行檔的安全性</Content>
                    <Content>以及呈現相關詳細資訊，清楚掌握電腦的安全狀況，將潛在威脅拒之門外</Content>
                </InfoContainer>
                
            </Container>
        </Fragment>
    )
}



export default MainPage;
