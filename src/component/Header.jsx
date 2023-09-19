import React from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';

function Header() {
  const navi = useNavigate();
  const reload = () => {
    navi('/');
    window.location.reload();
  };

  return (
    <HeaderSec>
      <button type="button" aria-label="home" onClick={reload}>
        Moono
      </button>
    </HeaderSec>
  );
}

export default Header;

const HeaderSec = styled.header`
  /* background-color: red; */
  position: fixed;
  /* top: 0; */
  z-index: 10;
  width: calc(100% - 6.4rem);
  height: 7rem;
  padding: 0 3.2rem;
  display: flex;
  button {
    /* position: ; */
    display: flex;
    justify-content: center;
    align-items: center;
    font-family: 'Clash Display';
    font-size: 2.4rem;
    font-weight: 600;
    color: ${({ theme }) => theme.color.white};
  }
  @media screen and (max-width: 768px) {
    width: calc(100% - 4rem);
    height: 4.8rem;
    padding: 0 2rem;
  }
`;
