import styled, { keyframes, withTheme } from 'styled-components';
import { useState, useEffect, useRef } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setPosition } from '../actions/actions';
import data from '../data/data.json';

import Tag from '../component/Tag';
import Card from '../component/Card';
import { ReactComponent as BtnVelog } from '../images/velog.svg';
import { ReactComponent as BtnGithub } from '../images/github.svg';

function Home({ theme }) {
  const dispatch = useDispatch();
  const position = useSelector(state => state.position);

  const { Dev } = data;
  const { Design } = data;

  const onScroll = () => {
    setPosition(window.scrollY);
  };

  useEffect(() => {
    console.log(position);
    window.addEventListener('scroll', onScroll);
  }, [position]);

  const skillArr = [
    'html',
    'css',
    'Javascript',
    'React',
    'Typescript',
    'tailwindCSS',
    'Redux',
    'figma',
  ];

  return (
    <div>
      <Main>
        <div>
          <FlowBox>
            <FlowTrack>
              <FlowTitle>
                <Outline>Frontend</Outline>
                <Outline>Developer</Outline>
                <span>Moono</span>
                <Outline>Frontend</Outline>
                <Outline>Developer</Outline>
                <span>Moono</span>
                <Outline>Frontend</Outline>
                <Outline>Developer</Outline>
                <span>Moono</span>
              </FlowTitle>
            </FlowTrack>
          </FlowBox>
        </div>
        <Arrow />
      </Main>
      <Content>
        <Sticky>
          <StickyTxt>
            <h3>
              Frontend
              <br />
              Developer
            </h3>
            <h3>moono</h3>
            <BtnDiv className="snsBtnGroup">
              <a
                href="https://github.com/moonozz"
                target="_blank"
                rel="noopener noreferrer"
                className="github"
              >
                <BtnGithub />
              </a>
              <a
                href="https://github.com/moonozz"
                target="_blank"
                rel="noopener noreferrer"
                className="velog"
              >
                <BtnVelog />
              </a>
            </BtnDiv>
          </StickyTxt>
        </Sticky>
        <ScrollContent>
          <Intro>
            <SubTitle>Intro.</SubTitle>
            <IntroTxt>
              <p>
                커뮤니케이션을 중요하게 생각하는 신입 프론트엔드 개발자
                문혜린입니다.
                <br />
                의문이 생기면 주저하지않고 물어보는 편이라 팀원이 놓친 부분을
                빠르게 캐치할 수 있고
                <br />
                서로 토론하는 것이 팀을 발전 시키는 좋은 방법이라고 생각합니다.
              </p>
              <p>
                UI/UX 업무 경력이 있어 사용자에 대한 고민 뿐 아니라 작업 시 팀
                내에서도 효율적이고
                <br />
                향상된 경험을 제공하고자 고민하고 개선하려 합니다.
              </p>
              <p>
                개발자로서 성능 최적화와 작업 속도 향상이 중요하다고 생각하기
                때문에 초반에 시간이 걸리더라도
                <br />
                ‘컴포넌트화’ 나 ‘CSS-in-JS 최적화’ 등으로 코드의 재사용성을 높여
                <br />
                사용자 경험과 개발 생산성을 동시에 고려해 보다 빠르게 프로젝트를
                마무리 하고자 합니다.
              </p>
            </IntroTxt>
            <TagGroup>
              <Tag
                key={skillArr.indexOf}
                items={skillArr}
                borderColor={theme.color.black}
              />
            </TagGroup>
          </Intro>
          <DevSec>
            <SubTitle>Dev</SubTitle>
            {Dev.map(el => {
              return (
                <Card
                  key={el.id}
                  id={el.id}
                  text={el.title}
                  items={el.items}
                  imgUrl={el.imgUrl}
                />
              );
            })}
          </DevSec>
          <DesignSec>
            <SubTitle>Design</SubTitle>
            {Design.map(el => {
              return (
                <Card
                  key={el.id}
                  id={el.id}
                  text={el.title}
                  items={el.items}
                  imgUrl={el.imgUrl}
                />
              );
            })}
          </DesignSec>
        </ScrollContent>
      </Content>
    </div>
  );
}

export default withTheme(Home);

const Main = styled.section`
  display: flex;
  position: relative;
  background-color: ${({ theme }) => theme.color.black};
  justify-content: center;
  height: 100vh;
  width: 100vw;
`;

const flowing = keyframes`
  0% {
    transform: translate3d(0, 0, 0);
  }
  100% {
    transform: translate3d(-33.3%, 0, 0);
  }
`;

const FlowBox = styled.div`
  font-family: 'Clash Display';
  position: relative;
  width: 100%;
  height: 100%;
  overflow: hidden;
`;

const FlowTrack = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  white-space: nowrap;
  will-change: transform animation;
  transform: rotateZ(-4deg);
`;

const FlowTitle = styled.div`
  font-size: 10vh;

  color: ${({ theme }) => theme.color.main};
  animation: ${flowing} 10s linear infinite;
  line-height: 1.1;
  span {
    display: inline-block;
    font-weight: 900;
    padding: 0 3rem;
  }
  @media screen and (min-width: 769px) {
    font-size: 15rem;
  }
`;

const Outline = styled.span`
  color: ${({ theme }) => theme.color.black};
  -webkit-text-stroke: 0.1rem ${({ theme }) => theme.color.main};
  display: inline-block;
  font-weight: 900;
  padding: 0 3rem;
`;

const arrowAni = keyframes`
  0% {
    bottom: 5%
  }
  50% {
    bottom: 6%
  }
  100% {
    bottom: 5%
  }
`;

const Arrow = styled.span`
  content: '';
  position: absolute;
  bottom: 5%;
  width: 3rem;
  height: 0.1rem;
  background-color: ${({ theme }) => theme.color.white};
  transform: rotateZ(90deg);
  animation: ${arrowAni} 1s linear infinite;

  &::before {
    content: '';
    border-bottom: 0.1rem solid ${({ theme }) => theme.color.white};
    position: absolute;
    width: 20%;

    top: -0.2rem;
    left: 2.5rem;
    transform: rotateZ(45deg);
  }
  &::after {
    content: '';
    border-bottom: 0.1rem solid ${({ theme }) => theme.color.white};
    position: absolute;
    width: 20%;

    top: 0.2rem;
    left: 2.5rem;
    transform: rotateZ(-45deg);
  }

  @media screen and (min-width: 769px) {
    width: 5rem;
    /* animation: ${arrowAni} 1s linear infinite; */

    &::before {
      width: 10%;
      top: -0.15rem;
      left: 4.6rem;
    }
    &::after {
      width: 10%;
      top: 0.15rem;
      left: 4.6rem;
    }
  }
`;

const Content = styled.section`
  background-color: ${({ theme }) => theme.color.main};
  display: flex;
  position: relative;
  flex-direction: column;
  padding: 12rem 2.4rem;

  @media screen and (min-width: 769px) {
    padding: 0 8rem;
    flex-direction: row;
  }
`;

const Sticky = styled.div`
  width: 100%;
  h3 {
    font-family: 'Clash Display';
    line-height: 1.1;
    font-weight: 800;
    font-size: 12vw;
  }
  h3:first-child {
    margin-bottom: 2rem;
    font-weight: 400;
  }

  @media screen and (min-width: 769px) {
    width: 50%;
    z-index: 10;
    h3 {
      font-size: 7vw;
    }
  }
`;

const StickyTxt = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  @media screen and (min-width: 769px) {
    position: sticky;
    top: 0;
    left: 0;
    width: 100%;
    height: 35%;
  }
`;

const BtnDiv = styled.div`
  margin-top: 4rem;
  @media screen and (min-width: 769px) {
    margin-top: 8rem;
  }
`;

const ScrollContent = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 12rem;
  margin-top: 10rem;

  @media screen and (min-width: 769px) {
    width: 50%;
    padding: 15rem 0 15rem 4rem;
  }
`;

const Intro = styled.div`
  display: flex;
  flex-direction: column;
`;
const IntroTxt = styled.div`
  font-size: 1.4rem;
  white-space: normal;
  text-overflow: ellipsis;
  p {
    margin-top: 0.8rem;
  }

  @media screen and (min-width: 769px) {
    font-size: 1.6rem;
  }
`;

const SubTitle = styled.h4`
  font-family: 'Clash Display';
  font-size: 2.8rem;

  @media screen and (min-width: 769px) {
    font-size: 4rem;
  }
`;

const TagGroup = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-top: 3.2rem;
  div:first-child {
    margin-left: 0;
  }
`;

const DevSec = styled.div``;

const DesignSec = styled.div``;
