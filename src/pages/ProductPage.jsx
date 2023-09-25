import styled from 'styled-components';
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { ReactComponent as BtnFigma } from '../images/figma.svg';
import { ReactComponent as BtnGithub } from '../images/github.svg';
import { setProject, setBack } from '../actions/actions';

import Tag from '../component/Tag';

function ProductPage() {
  const dispatch = useDispatch();
  const project = useSelector(state => state.project);
  const position = useSelector(state => state.position);

  const getLocalBack = localStorage.getItem('back');
  const getLocalProject = localStorage.getItem('project');

  const data = {};

  const localSetProject = () => {
    localStorage.setItem('project', JSON.stringify(project));
  };

  const parsedData = JSON.parse(getLocalProject);

  // const classNamePush = () => {
  //   if (project.link === '') {
  //     return 'project-link';
  //   }
  //   return 'hidden';
  // };

  localSetProject();

  useEffect(() => {
    window.scroll(0, 0);

    dispatch(setBack(getLocalBack));
    console.log(project);
    console.log(position);
    // console.log(project.link);
    // classNamePush();
    // dispatch(setProject(parsedData));
  }, []);

  return (
    <div>
      <div className="container">
        <h2 className="title">{project.title}</h2>
        <MainImg className="main-img" $image={project.mainImg} />
        <div className="project-info">
          <div className="project-title-group">
            <div className="project-info-title">
              <h3>{project.title}</h3>
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                // className="project-link"
                className={project.link !== '' ? 'project-link' : 'hidden'}
              >
                Link
                <span />
              </a>
            </div>
            <ProjectBtnDiv className="snsBtnGroup">
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
                <BtnFigma />
              </a>
            </ProjectBtnDiv>
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
      </div>
    </div>
  );
}

export default ProductPage;

const MainImg = styled.div`
  background: center / cover no-repeat
    url(${process.env.PUBLIC_URL}/assets/${props => props.$image});
`;

// const ProjectTitle = styled.div``;

const ProjectName = styled.div``;

const ProjectBtnDiv = styled.div`
  margin-top: 4rem;
  @media ${({ theme }) => theme.tablet} {
    margin-top: 8rem;
  }
`;
