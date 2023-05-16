import React from 'react'
import AppLayout from '../Components/AppLayout'
import styled from 'styled-components'


function Home() {
  return (
    <>
  
    <AppLayout>
    <div></div>
  </AppLayout>
  <CenteredContainer>
  <StyledDiv>
  <StyledH1>왕초닷컴에 오신것을 환영합니다!!</StyledH1>
  <StyledH1>오늘 지출은 어떻게 되나요?</StyledH1>
  <StyledH2>당신의 지출을 공유해 보세요</StyledH2>
  </StyledDiv>
  </CenteredContainer>
  </>
  )
}

export default Home;

const StyledH1 = styled.h1`
  color: #333;
  font-size: 24px;
  font-weight: bold;
 
`;

const StyledH2 = styled.h2`
  color: #666;
  font-size: 18px;
  
`;

const StyledDiv = styled.div`
  background-color: #f2f2f2;
  border-radius: 8px;
  padding: 20px;
  width: 500px;
  border: 2px solid black;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  align-items: center;
`;

const CenteredContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  

`;