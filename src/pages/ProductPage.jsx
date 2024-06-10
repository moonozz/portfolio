import styled from 'styled-components';
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { ReactComponent as BtnFigma } from '../images/figma.svg';
import { ReactComponent as BtnGithub } from '../images/github.svg';
import { ReactComponent as BtnNotion } from '../images/notion.svg';
import { setBack } from '../actions/actions';
import { useScrollEvent } from '../hook/useScrollEvent';

import Tag from '../component/Tag';

function ProductPage() {
  const dispatch = useDispatch();
  const project = useSelector(state => state.project);

  const { ref, isInViewport } = useScrollEvent();

  const getLocalBack = localStorage.getItem('back');

  // const data = {};

  const localSetProject = () => {
    localStorage.setItem('project', JSON.stringify(project));
  };

  // const parsedData = JSON.parse(getLocalProject);

  localSetProject();

  useEffect(() => {
    window.scroll(0, 0);

    dispatch(setBack(getLocalBack));
  }, []);

  return (
    <div>
      <Container>
        <Title>{project.title}</Title>
        <MainImg>
          <img
            src={`${process.env.PUBLIC_URL}/assets/${project.mainImg}`}
            alt={`${project.title} 메인이미지`}
          />
        </MainImg>
        <ProjectInfo>
          <ProjectTitleGroup>
            <ProjectInfoTitle>
              <h3>{project.title}</h3>
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className={project.link !== '' ? 'project-link' : 'hidden'}
              >
                Link
                <span />
              </a>
            </ProjectInfoTitle>
            <div className="snsBtnGroup">
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className={project.github !== '' ? '' : 'hidden'}
              >
                <BtnGithub />
              </a>
              <a href={project.figma} target="_blank" rel="noopener noreferrer">
                <BtnFigma />
              </a>
              <a
                href={project.notion}
                target="_blank"
                rel="noopener noreferrer"
              >
                <BtnNotion />
              </a>
            </div>
          </ProjectTitleGroup>
          <ProjectInfoDetail>
            <ProjectTitle>{project.date}</ProjectTitle>
            <p>{project.info}</p>
            <ul>
              {project.infoDetail.map(el => {
                return <li>{el}</li>;
              })}
            </ul>
            <div className="tag-group">
              <Tag key={project.skill.indexOf} items={project.skill} />
            </div>
            <ProjectEx>
              <ProjectTitle>경험 및 문제 해결</ProjectTitle>
              {project.projectDetail.map(el => {
                return (
                  <ul>
                    <li>
                      <span>{el.tag}</span>
                    </li>
                    <li>
                      <p>{el.title}</p>
                      {el.detail.map(i => {
                        return <p>{i}</p>;
                      })}
                    </li>
                  </ul>
                );
              })}
            </ProjectEx>
          </ProjectInfoDetail>
        </ProjectInfo>
        <ProjectImg>
          <div className="pc-img">
            {project.projectImgPC.map(el => {
              return (
                <img
                  src={`${process.env.PUBLIC_URL}/assets/${el}`}
                  alt={`${project.title} pc 이미지`}
                  key={`pc 이미지 ${project.projectImgPC.indexOf(el)}`}
                />
              );
            })}
          </div>
          {/* <div className="img-gif">
            {project.projectGif.map(el => {
              return (
                <img
                  src={`${process.env.PUBLIC_URL}/assets/${el}`}
                  alt={`${project.title} gif 이미지`}
                  key={`gif ${project.projectGif.indexOf(el)}`}
                />
              );
            })}
          </div> */}
          <div className="m-img">
            {project.projectImgMobile.map(el => {
              return (
                <img
                  src={`${process.env.PUBLIC_URL}/assets/${el}`}
                  alt={`${project.title} mobile 이미지`}
                  key={`mobile 이미지 ${project.projectImgMobile.indexOf(el)}`}
                />
              );
            })}
          </div>
        </ProjectImg>
      </Container>
    </div>
  );
}

export default ProductPage;

const Container = styled.div`
  background-color: ${({ theme }) => theme.color.lightGray150};
  color: ${({ theme }) => theme.color.black};
  position: relative;
  padding-top: 4.8rem;
  font-size: 1.4rem;
  overflow-x: hidden;

  @media ${({ theme }) => theme.tablet} {
    padding-top: 7rem;
    font-size: 1.6rem;
  }
`;

const Title = styled.h2`
  display: none;

  @media ${({ theme }) => theme.tablet} {
    display: block;
    font-family: 'Clash Display';
    font-size: 9.6rem;
    font-weight: 900;
    padding: 9.6rem 8rem 3.2rem;
  }
`;

const MainImg = styled.div`
  /* width: 100%; */
  position: relative;
  img {
    width: 100%;
    overflow-clip-margin: content-box;
    overflow: clip;
  }
`;

const ProjectInfo = styled.section`
  display: grid;
  grid-template-columns: 1fr;
  padding: 6rem 2rem 16rem;
  @media ${({ theme }) => theme.tablet} {
    grid-template-columns: 2fr 3fr;
    padding: 12rem 8rem 16rem;
  }
`;

const ProjectTitleGroup = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  max-height: 24rem;
`;

const ProjectInfoTitle = styled.div`
  display: grid;
  grid-template-columns: 7fr 1fr;
  margin-bottom: 2.4rem;
  max-height: 14rem;

  @media ${({ theme }) => theme.tablet} {
    grid-template-columns: 1fr;
    margin-bottom: 3.2rem;
  }

  h3 {
    font-family: 'Clash Display';
    font-size: 4rem;
    font-weight: 900;

    @media ${({ theme }) => theme.tablet} {
      font-size: 3.2rem;
    }
  }
`;

const ProjectInfoDetail = styled.div`
  font-size: 1.6rem;
  margin-top: 4.8rem;

  li {
    display: block;
    margin-top: 0.4rem;
  }

  @media ${({ theme }) => theme.tablet} {
    margin-top: 0rem;
  }
`;

const ProjectTitle = styled.p`
  margin: 1rem 0 2.4rem;
  font-weight: 600;
`;

const ProjectEx = styled.div`
  border-top: 0.1rem solid ${({ theme }) => theme.color.black};
  margin: 4.8rem 0 2.4rem;
  padding-top: 4.8rem;
  font-size: 1.6rem;

  span {
    font-size: 1.2rem;
    color: ${({ theme }) => theme.color.white};
    padding: 0.2rem 0.5rem;
    margin-right: 1rem;
    border: 0.1rem solid;
    background-color: ${({ theme }) => theme.color.black};
    border-color: ${({ theme }) => theme.color.black};
    border-radius: 0.8rem;

    @media ${({ theme }) => theme.tablet} {
      font-size: 1.2rem;
    }
  }
  ul {
    display: grid;
    grid-template-columns: 6rem auto;
    li {
      margin-bottom: 1rem;
      p {
        margin-top: 0.2rem;
      }
    }
  }
`;

const ProjectImg = styled.section`
  margin: 4.8rem 0;
  position: relative;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  padding: 0 2rem;

  img {
    display: block;
    width: 100%;
    max-width: 150rem;
    overflow-clip-margin: content-box;
    overflow: clip;
  }

  @media ${({ theme }) => theme.tablet} {
    margin: 9rem 0;
  }
`;

// const ProjectBtnDiv = styled.div`
//   margin-top: 4rem;
//   @media ${({ theme }) => theme.tablet} {
//     margin-top: 8rem;
//   }
// `;
