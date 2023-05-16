import React from "react";
import { Link } from "react-router-dom";
import PropTypes from 'prop-types';
import styled from 'styled-components';


const AppLayout = ({ children }) => {
  return (
    <>
      <div>
        <StyledMenu>
          <li>
            <Link to="/">왕초닷컴</Link>
          </li>
          <li>
          <Link to="/Posts">게시판으로</Link>
          </li>
          <li>
            <Link to="/Login">로그인하기</Link>
          </li>
          <li>
            <Link to="/Signup">회원가입</Link>
          </li>
         
        </StyledMenu>
        {children}
      </div>
      <div>

      </div>
    </>
  );
};

AppLayout.propTypes = {
  children: PropTypes.node.isRequired,
};

const StyledMenu = styled.ul`
  display: flex;
  justify-content: space-between;
  list-style: none;
  margin: 0;
  padding: 0;
  background-color: #fff;
  border-bottom: 1px solid #f0f0f0;

  li {
    margin: 0 auto;
    padding: 0;
    

    a {
      display: block;
      padding: 16px;
      color: #333;

      &:hover {
        color: #1890ff;
      }
    }
  }
`;

export default AppLayout;
