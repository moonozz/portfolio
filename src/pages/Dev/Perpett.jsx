import styled from 'styled-components';
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { ReactComponent as BtnFigma } from '../../images/figma.svg';
import { ReactComponent as BtnGithub } from '../../images/github.svg';
import { setProject, setBack } from '../../actions/actions';

import Tag from '../../component/Tag';

function Perpett() {
  const dispatch = useDispatch();
  const project = useSelector(state => state.project);

  const getLocalBack = localStorage.getItem('back');
  const getLocalProject = localStorage.getItem('project');

  const data = {};

  const localSetProject = () => {
    localStorage.setItem('project', JSON.stringify(project));
  };

  const parsedData = JSON.parse(getLocalProject);
  localSetProject();

  useEffect(() => {
    window.scroll(0, 0);

    dispatch(setBack(getLocalBack));
    console.log(project);
    // dispatch(setProject(parsedData));
  }, []);

  return (
    <div>
      <div className="container">
        <h2 className="title">{project.title}</h2>
        <MainImg className="main-img" />
        <div className="project-info">
          <div className="project-title-group">
            <div className="project-info-title">
              <h3>{project.title}</h3>
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="project-link"
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
