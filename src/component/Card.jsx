import React from 'react';
import { Link } from 'react-router-dom';
import styled, { withTheme } from 'styled-components';
import Tag from './Tag';

function Card({ id, text, items, imgUrl, theme }) {
  return (
    <StyleLink to={`/p/${id}`}>
      <CardDiv>
        <Img $image={imgUrl} />
        <Content>
          <Title>{text}</Title>
          <TagGroup>
            <Tag
              items={items}
              borderColor={theme.color.mainDark}
              key={items.index}
            />
          </TagGroup>
        </Content>
      </CardDiv>
    </StyleLink>
  );
}

export default withTheme(Card);

const StyleLink = styled(Link)`
  &:hover {
    text-decoration: none;
    font-weight: 900;
  }
`;

const CardDiv = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 2.4rem;
`;

const Img = styled.div`
  position: relative;
  border-radius: 1.2rem;
  width: 100%;
  height: 12rem;
  background-image: url(${process.env.PUBLIC_URL}/assets/${props =>
    props.$image});
  background-repeat: no-repeat;
  background-size: cover;
  border: 0.1rem solid ${({ theme }) => theme.color.mainDark};
  /* transition: all 0.5s; */
  transition: height cubic-bezier(0.4, 0, 1, 1) 300ms;
  &:hover {
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
  margin-top: 0.8rem;
`;

const TagGroup = styled.div`
  display: flex;
`;

const Title = styled.h4`
  color: ${({ theme }) => theme.color.mainDark};
  font-family: 'Clash Display';
  font-size: 1.8rem;

  @media screen and (min-width: 769px) {
    font-size: 2.4rem;
  }
`;
