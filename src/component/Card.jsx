import React from 'react';
import { Link } from 'react-router-dom';
import styled, { withTheme } from 'styled-components';
import { useSelector, useDispatch } from 'react-redux';
import { setBack, setProject } from '../actions/actions';
import data from '../data/data.json';

import Tag from './Tag';

function Card({ id, text, items, imgUrl, theme }) {
  const dispatch = useDispatch();
  const project = useSelector(state => state.project);

  const onPageClick = () => {
    dispatch(setBack('other'));
    saveProject();
    // const imgUrl = { imgUrl };
  };

  const saveProject = () => {
    const findId = id;
    const devObject = data.Dev.find(item => item.id === findId);
    const designObject = data.Design.find(item => item.id === findId);

    if (devObject) {
      // console.log('Dev 카테고리에서 찾은 객체:', devObject);
      // console.log(devObject.id);
      // console.log(devObject.items);
      dispatch(
        setProject({
          id: Number(devObject.id),
          imgUrl: devObject.imgUrl,
          items: devObject.items,
          title: devObject.title,
        }),
      );
      console.log(project, 'project객체 저장완료');
    }

    if (designObject) {
      console.log('Design 카테고리에서 찾은 객체:', designObject);
      setProject(designObject);
      console.log(project, 'project객체 저장완료');
    }
  };

  return (
    <StyleLink
      to={`/p/${id}`}
      onClick={() => {
        onPageClick();
      }}
      id={id}
    >
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
  background: center / cover no-repeat
    url(${process.env.PUBLIC_URL}/assets/${props => props.$image});
  border: 0.1rem solid ${({ theme }) => theme.color.mainDark};
  transition: all 0.5s;
  /* transition: height cubic-bezier(0.4, 0, 1, 1) 300ms; */
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

  @media ${({ theme }) => theme.tablet} {
    font-size: 2.4rem;
  }
`;
