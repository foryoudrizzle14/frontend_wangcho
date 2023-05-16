import React from 'react';
import styled from 'styled-components';


const Signup = () => {
  return (
    <Wrapper>
      <Title>왕초닷컴에 오신것을 환영합니다!</Title>
      <Form>
        <Input type="text" placeholder="ID" />
        <Input type="text" placeholder="Nickname" />
        <Input type="password" placeholder="Password" />
        <Input type="password" placeholder="Confirm password" />
        <Button>회원가입</Button>
      </Form>
    </Wrapper>
  );
};

    
const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
`;

const Title = styled.h1`
  font-size: 2rem;
  margin-bottom: 1rem;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Input = styled.input`
  padding: 0.5rem;
  margin-bottom: 1rem;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 1rem;
  width: 100%;
`;

const Button = styled.button`
  background-color: #0077ff;
  color: #fff;
  border: none;
  border-radius: 4px;
  padding: 0.5rem 1rem;
  font-size: 1rem;
  cursor: pointer;

  &:hover {
    background-color: #0055cc;
  }
`;
  
  
export default Signup;
