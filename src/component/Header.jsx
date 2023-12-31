import React from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { setBack, setProject, setPosition } from '../actions/actions';

function Header() {
  const navi = useNavigate();
  const dispatch = useDispatch();
  const back = useSelector(state => state.back);
  const project = useSelector(state => state.project);
  const position = useSelector(state => state.position);

  const localGet = localStorage.getItem('back');

  const reload = () => {
    navi('/');
    window.location.reload();
    dispatch(setBack('main'));
    localStorage.setItem('back', localGet);
    window.scroll(0, 0);
    dispatch(setPosition(0));
  };

  const onMainClick = () => {
    navi('/');
    dispatch(setBack('main'));
    localStorage.setItem('back', localGet);
    window.scroll(0, position);
  };

  return (
    <HeaderSec back={back}>
      {back === 'main' ? (
        <button type="button" aria-label="home" onClick={reload}>
          Moono
        </button>
      ) : (
        <button type="button" aria-label="home" onClick={onMainClick}>
          Back to Main
        </button>
      )}
    </HeaderSec>
  );
}

export default Header;

const HeaderSec = styled.header`
  position: fixed;
  z-index: 30;
  width: calc(100% - 4rem);
  height: 4.8rem;
  padding: 0 2rem;
  display: flex;
  button {
    display: flex;
    justify-content: center;
    align-items: center;
    font-family: 'Clash Display';
    font-size: 2.4rem;
    font-weight: 600;
    /* color: ${({ theme }) => theme.color.white}; */
    color: ${({ theme, back }) =>
      back === 'main' ? theme.color.main : theme.color.black};
  }
  @media ${({ theme }) => theme.tablet} {
    width: calc(100% - 6.4rem);
    height: 7rem;
    padding: 0 3.2rem;
  }
`;
