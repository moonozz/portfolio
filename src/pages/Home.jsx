import styled, { keyframes } from 'styled-components';
import { useEffect, useRef } from 'react';

import Tag from '../component/Tag';
import Card from '../component/Card';

function Home() {
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
              {/* <FlowTitleOpa>
                <OutlineOpa>Frontend</OutlineOpa>
                <OutlineOpa>Developer</OutlineOpa>
                <span>Moono</span>
                <OutlineOpa>Frontend</OutlineOpa>
                <OutlineOpa>Developer</OutlineOpa>
                <span>Moono</span>
                <OutlineOpa>Frontend</OutlineOpa>
                <OutlineOpa>Developer</OutlineOpa>
                <span>Moono</span>
              </FlowTitleOpa> */}
            </FlowTrack>
          </FlowBox>
        </div>
        <Arrow />
      </Main>
      <Content>
        <div className="left clashFont">
          <h3>
            Frontend
            <br />
            Developer
          </h3>
          <h3>moono</h3>
          <div className="">
            <button type="button" aria-label="github" className="github-btn" />
            <button type="button" aria-label="figma" className="figma-btn" />
          </div>
        </div>
        <div className="right">
          <div className="intro">
            <h3 className="clashFont">Intro.</h3>
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
            <div className="tag-group">
              <Tag items={skillArr} />
            </div>
          </div>
          <div className="Dev">
            <h3 className="clashFont">Dev</h3>
            <Card text="Perpett" items={['App', 'App', 'App', 'App']} />
          </div>
        </div>
      </Content>
    </div>
  );
}

export default Home;

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
  font-size: 15.6rem;
  color: ${({ theme }) => theme.color.main};
  animation: ${flowing} 10s linear infinite;
  line-height: 1.1;
  span {
    display: inline-block;
    font-weight: 900;
    padding: 0 3rem;
  }
`;

const Outline = styled.span`
  color: ${({ theme }) => theme.color.black};
  -webkit-text-stroke: 0.1rem ${({ theme }) => theme.color.main};
  display: inline-block;
  font-weight: 900;
  padding: 0 3rem;
`;

const FlowTitleOpa = styled.div`
  font-size: 15.6rem;
  color: ${({ theme }) => theme.color.main};
  animation: ${flowing} 10s linear infinite;
  line-height: 1.1;

  span {
    opacity: 0.2;
    display: inline-block;
    font-weight: 900;
    padding: 0 3rem;
  }
`;

const OutlineOpa = styled.span`
  color: ${({ theme }) => theme.color.black};
  -webkit-text-stroke: 0.1rem ${({ theme }) => theme.color.main};
  display: inline-block;
  font-weight: 900;
  padding: 0 3rem;
  /* opacity: 1; */
`;

const Arrow = styled.span`
  content: '';
  position: absolute;
  bottom: 6rem;
  width: 6rem;
  height: 0.1rem;
  background-color: ${({ theme }) => theme.color.white};
  transform: rotateZ(90deg);
  &::before {
    content: '';
    border-bottom: 0.1rem solid ${({ theme }) => theme.color.white};
    position: absolute;
    width: 10%;
    /* bottom: 10%; */
    top: -0.2rem;
    left: 5.6rem;
    transform: rotateZ(45deg);
  }
  &::after {
    content: '';
    border-bottom: 0.1rem solid ${({ theme }) => theme.color.white};
    position: absolute;
    width: 10%;
    top: 0.2rem;
    left: 5.6rem;
    transform: rotateZ(-45deg);
  }
`;

const Content = styled.section`
  background-color: ${({ theme }) => theme.color.main};
`;
