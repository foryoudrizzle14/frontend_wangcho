import styled from 'styled-components';
import React from 'react';
import BackgroundImage from '../Components/Background.JPG';

function Login() {
  return (
    <BodyContainer>
      <LoginContainer>
        <LoginHeading>로그인</LoginHeading>
        <LoginForm>
          <LoginInput type="text" placeholder="Username" />
          <LoginInput type="password" placeholder="Password" />
          <LoginButton>Login</LoginButton>
        </LoginForm>
      </LoginContainer>
    </BodyContainer>
  );
}

export default Login;

const BodyContainer = styled.div`
  height: 100vh;
  background-image: url(${BackgroundImage});
  background-size: cover;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const LoginContainer = styled.div`
  background-color: rgba(255, 255, 255, 0.8);
  padding: 2rem;
  border-radius: 1rem;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.3);
  height: 500px;
  width: 500px;
`;

const LoginHeading = styled.h1`
  font-size: 2rem;
  margin-bottom: 2rem;
`;

const LoginForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const LoginInput = styled.input`
  padding: 0.5rem;
  margin-bottom: 1rem;
  border: none;
  border-bottom: 2px solid #ccc;
  width: 300px;
  height: 50px;
  font-size: 1rem;
  &:focus {
    outline: none;
    border-bottom: 2px solid #555;
  }
`;

const LoginButton = styled.button`
  padding: 0.5rem 1rem;
  background-color: #555;
  color: #fff;
  border: none;
  border-radius: 0.25rem;
  font-size: 1rem;
  height: 50px;
  width: 100px;
  cursor: pointer;
  &:hover {
    background-color: #333;
  }
`;
