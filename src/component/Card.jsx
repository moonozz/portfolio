import React from 'react';
import { Link } from 'react-router-dom';
import styled, { withTheme } from 'styled-components';
import Tag from './Tag';

function Card({ id, text, items, imgUrl, theme }) {
  return (
    <Link to={`/p/${id}`}>
      <CardDiv>
        <LinkDiv>
          {/* <Img src={imgUrl} alt="퍼펫트" /> */}
          <Img imgUrl={imgUrl} />
          <Content>
            <Title>{text}</Title>
            <TagGroup>
              <Tag items={items} borderColor={theme.color.mainDark} />
            </TagGroup>
          </Content>
        </LinkDiv>
      </CardDiv>
    </Link>
  );
}

export default withTheme(Card);

const CardDiv = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 2.4rem;
`;

const LinkDiv = styled.a`
  /* display: flex;
  flex-direction: column; */
  &:hover {
    text-decoration: none;
    font-weight: 900;
    /* transition: width 2s linear 4s; */
    /* transition: all 3s ease-in-out 8s; */
    /* transition: all cubic-bezier(0.4, 0, 1, 1) 300ms; */
  }
`;

const Img = styled.div`
  position: relative;
  border-radius: 1.2rem;
  width: 100%;
  height: 12rem;
  background-image: url(${({ imgUrl }) => imgUrl});
  background-repeat: no-repeat;
  background-size: cover;
  border: 0.1rem solid ${({ theme }) => theme.color.mainDark};
  /* display: flex; */
  /* justify-content: center; */
  /* align-items: center; */
  &:hover {
    transition: all cubic-bezier(0.4, 0, 1, 1) 300ms;
    height: 30.8rem;
  }
  &::after {
    position: absolute;
    top: 0;
    right: 0;
    left: 0;
    bottom: 0;
    content: '';
    background-color: ${({ theme }) => theme.color.mainDark};
    /* mix-blend-mode: normal; */
    opacity: 0.7;
    border-radius: 1.2rem;
  }
`;

const Content = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const TagGroup = styled.div`
  display: flex;
`;

const Title = styled.h4`
  color: ${({ theme }) => theme.color.mainDark};
  font-family: 'Clash Display';
  font-size: 2.4rem;
  &:hover {
    /* font-weight: 900; */
  }
`;
