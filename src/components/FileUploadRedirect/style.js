import styled from "styled-components";

export const PageContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  flex-direction: column;
`;

export const LogoImg = styled.img`
  width: 60vw;
  margin-top: -150px;
`;

export const Message = styled.p`
  width: 40vw;
  color: rgba(0, 0, 0, 0.7);
  font-size: 14px;
  margin-top: -80px;
`;

export const StyledLink = styled.a`
  text-decoration: none;
  background-color: rgba(0, 0, 0, 0.6);
  min-height: 30px;
  padding: 5px 30px;
  color: rgba(255, 255, 255, 0.8);
  transition: 0.3s;
  border-radius: 4px;

  :hover {
    text-decoration: none;
    color: rgba(255, 255, 255, 1);
  }
`;

export const CounterContainer = styled.div`
  width: 60px;
  height: 60px;
  border-radius: 50%;
  border: solid 3px rgba(0, 0, 0, 0.7);
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 20px;
`;
