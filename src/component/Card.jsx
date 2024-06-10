import { useRef } from 'react';
import { Link } from 'react-router-dom';
import styled, { withTheme } from 'styled-components';
import { useSelector, useDispatch } from 'react-redux';
import { setBack, setProject, setPosition } from '../actions/actions';
import data from '../data/data.json';
import { useScrollEvent } from '../hook/useScrollEvent';

import Tag from './Tag';

function Card({ id, text, items, imgUrl, theme }) {
  const dispatch = useDispatch();

  const { ref, isInViewport } = useScrollEvent();

  const onCardClick = () => {
    dispatch(setBack('other'));
    localStorage.setItem('back', 'other');

    saveProject();
    onScroll();
  };

  const onScroll = () => {
    dispatch(setPosition(window.scrollY));
  };

  const saveProject = () => {
    const findId = id;
    const devObject = data.Dev.find(item => item.id === findId);
    const designObject = data.Design.find(item => item.id === findId);

    if (devObject) {
      dispatch(
        setProject({
          id: Number(devObject.id),
          imgUrl: devObject.imgUrl,
          items: devObject.items,
          title: devObject.title,
          link: devObject.link,
          github: devObject.github,
          figma: devObject.figma,
          notion: devObject.notion,
          date: devObject.date,
          info: devObject.info,
          infoDetail: devObject.infoDetail,
          projectDetail: devObject.projectDetail,
          skill: devObject.skill,
          mainImg: devObject.mainImg,
          projectImgPC: devObject.projectImgPC,
          projectGif: devObject.projectGif,
          projectImgMobile: devObject.projectImgMobile,
        }),
      );
    }

    if (designObject) {
      dispatch(
        setProject({
          id: Number(designObject.id),
          imgUrl: designObject.imgUrl,
          items: designObject.items,
          title: designObject.title,
          link: designObject.link,
          github: designObject.github,
          figma: designObject.figma,
          notion: designObject.notion,
          date: designObject.date,
          info: designObject.info,
          infoDetail: designObject.infoDetail,
          projectDetail: designObject.projectDetail,
          skill: designObject.skill,
          mainImg: designObject.mainImg,
          projectImgPC: designObject.projectImgPC,
          projectGif: designObject.projectGif,
          projectImgMobile: designObject.projectImgMobile,
        }),
      );
    }
  };

  return (
    <StyleLink
      to={`/p/${id}`}
      onClick={() => {
        onCardClick();
      }}
      id={id}
    >
      <CardDiv
        ref={ref}
        className={
          isInViewport ? 'animation-default frame-in' : 'animation-default'
        }
      >
        <Img $image={imgUrl} />
        <Content>
          <Title>{text}</Title>
          <TagGroup>
            <Tag
              items={items}
              borderColor={theme.color.black}
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
    /* text-decoration: none; */
    /* font-weight: 900; */
    /* color: ${({ theme }) => theme.color.main}; */
  }
`;

const CardDiv = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 2.4rem;
  will-change: animation, keyframe;
  /* color: ${({ theme }) => theme.color.black}; */
  &:hover {
    /* color: ${({ theme }) => theme.color.main}; */
  }
`;

const Img = styled.div`
  position: relative;
  border-radius: 1.2rem;
  width: 100%;
  height: 12rem;
  background: center / cover no-repeat
    url(${process.env.PUBLIC_URL}/assets/${props => props.$image});
  transition: all 0.5s;
  color: ${({ theme }) => theme.color.black};

  &:hover {
    height: 30.8rem;
    color: ${({ theme }) => theme.color.main};
  }
  &::after {
    position: absolute;
    top: 0;
    right: 0;
    left: 0;
    bottom: 0;
    content: '';
    background-color: ${({ theme }) => theme.color.black};
    opacity: 0.4;
    border-radius: 1.2rem;
  }
`;

const Content = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 0.8rem;
  &:hover {
    text-decoration: none;
    /* font-weight: 900; */
    color: ${({ theme }) => theme.color.main};
  }
`;

const TagGroup = styled.div`
  display: flex;
`;

const Title = styled.h4`
  color: ${({ theme }) => theme.color.black};
  font-family: 'Clash Display';
  font-size: 1.8rem;

  @media ${({ theme }) => theme.tablet} {
    font-size: 2.4rem;
  }
`;
