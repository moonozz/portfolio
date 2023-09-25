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
      <div className="container">
        <h2 className="title">{project.title}</h2>
        <MainImg className="main-img">
          <img
            src={`${process.env.PUBLIC_URL}/assets/${project.mainImg}`}
            alt={`${project.title} 메인이미지`}
          />
        </MainImg>
        <div className="project-info">
          <div className="project-title-group">
            <div className="project-info-title">
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
            </div>
            <div className="snsBtnGroup">
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
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
          </div>
          <div className="project-info-detail">
            <p className="project-date">{project.date}</p>
            <p>{project.info}</p>
            <ul>
              {project.infoDetail.map(el => {
                return <li>{el}</li>;
              })}
            </ul>
            <div className="tag-group">
              <Tag key={project.skill.indexOf} items={project.skill} />
            </div>
          </div>
        </div>
        <div className="project-img">
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
          <div className="img-gif">
            {project.projectGif.map(el => {
              return (
                <img
                  src={`${process.env.PUBLIC_URL}/assets/${el}`}
                  alt={`${project.title} gif 이미지`}
                  key={`gif ${project.projectGif.indexOf(el)}`}
                />
              );
            })}
          </div>
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
        </div>
      </div>
    </div>
  );
}

export default ProductPage;

const MainImg = styled.div`
  /* width: 100%; */
  position: relative;
  img {
    width: 100%;
    overflow-clip-margin: content-box;
    overflow: clip;
  }
`;

const ProjectName = styled.div``;

// const ProjectBtnDiv = styled.div`
//   margin-top: 4rem;
//   @media ${({ theme }) => theme.tablet} {
//     margin-top: 8rem;
//   }
// `;
