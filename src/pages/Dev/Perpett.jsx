import styled from 'styled-components';
import { useEffect } from 'react';
import { ReactComponent as BtnFigma } from '../../images/figma.svg';
import { ReactComponent as BtnGithub } from '../../images/github.svg';

function Perpett() {
  useEffect(() => {
    window.scroll(0, 0);
  }, []);

  return (
    <div>
      <div className="container">
        <h2 className="title">Perpett</h2>
        <MainImg className="main-img" />
        DevPerpett
        <div className="project-info">
          <div>
            <div className="project-info-title">
              <h3>Perpett</h3>
              <a
                href="http://testqjzlt.s3-website.ap-northeast-2.amazonaws.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="project-link"
              >
                Link
              </a>
            </div>
            <ProjectBtnDiv className="snsBtnGroup">
              <a
                href="https://github.com/codestates-seb/seb43_main_030"
                target="_blank"
                rel="noopener noreferrer"
                className="github"
              >
                <BtnGithub />
              </a>
              <a
                href="https://www.figma.com/file/PFOgIanoWAdQqqgtEtRWUM/%EB%B0%98%EB%A0%A4%EB%8F%99%EB%AC%BC-%EC%9C%A0%EC%B9%98%EC%9B%90-%EA%B8%B0%ED%9A%8D-%EB%B0%8F-%EB%94%94%EC%9E%90%EC%9D%B8?type=design&node-id=726-7469&mode=design&t=lPhmq71RjNvxv4Lm-0"
                target="_blank"
                rel="noopener noreferrer"
                className="figma"
              >
                <BtnFigma />
              </a>
            </ProjectBtnDiv>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Perpett;

const MainImg = styled.div`
  /* background: center / cover no-repeat
    url(${process.env.PUBLIC_URL}/assets/${props => props.$image}); */
`;

// const ProjectTitle = styled.div``;

const ProjectName = styled.div``;

const ProjectBtnDiv = styled.div`
  margin-top: 4rem;
  @media ${({ theme }) => theme.tablet} {
    margin-top: 8rem;
  }
`;
