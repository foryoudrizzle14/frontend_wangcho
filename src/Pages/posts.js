import React, { useState ,useEffect } from 'react';
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart, faComment } from '@fortawesome/free-solid-svg-icons';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

function Posts() {
  const [posts, setPosts] = useState();
  const fetchPosts = async () => {
    const { data } = await axios.get('http://localhost:3001/posts');
    setPosts(data);
  };
  useEffect(() => {
    fetchPosts();
  }, []);
  return (
    <>
      {/* header */}
      <StHeaderBox>
        <StHeaderTitle>왕초닷컴</StHeaderTitle>
        <StHeaderBtns>
        <button>
        <Link to="/Login">로그인</Link>
          </button>
          <button>작성하기</button>
        </StHeaderBtns>
      </StHeaderBox>
      {/* main */}
      <div>
        {posts?.map((post) => (
          <StPostBox key={post.postId}>
            <StPostBoxContents>
              <img
                style={{ width: '160px', height: '160px' }}
                src={post.image}
                alt={post.image}
              />
              <StPostBoxContent>
                <div>{post.nickname}</div>
                <div>{post.title}</div>
                <div>{post.content}</div>
              </StPostBoxContent>
            </StPostBoxContents>
            <StPostBoxIcons>
              <div>
                <FontAwesomeIcon icon={faHeart} />
                {post.likeNum}
              </div>
              <div>
                <FontAwesomeIcon icon={faComment} />
                {post.commentNum}
              </div>
            </StPostBoxIcons>
          </StPostBox>
          
        ))}
      </div>
    </>
  );
}
export default Posts;
const StHeaderBox = styled.div`
  background-color: #02C73C;
  color: white;
  display: flex;
  padding: 16px;
`;
const StHeaderTitle = styled.div`
  margin: auto;
`;
const StHeaderBtns = styled.div`
  display: flex;
  gap: 8px;
  margin-right: 40px;
`;
const StPostBox = styled.div`
  display: flex;
  margin: 16px 40px;
  padding-bottom: 16px;
  border-bottom: 1px solid #EEEEEF;
  justify-content: space-between;
  align-items: flex-end;
`;
const StPostBoxContent = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 16px;
`;
const StPostBoxIcons = styled.div`
  display: flex;
  gap: 8px;
`;
const StPostBoxContents = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-end;
`;