import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

const GlobalStyles = createGlobalStyle`
  ${reset}

  html {
    font-size: 62.5%;
  }
  body, input {
    font-family: 'Pretendard', sans-serif;
  }
  body {
    padding: 0;
    margin: 0;
    line-height: 1.5;
    width: 100vw;
    height: 100vh;
    overflow-x: hidden;
    /* color:  */
  }
  h1 {
    font-weight: normal;
    margin: 0;
  }
  dl,
  dd,
  p {
    margin: 0;
  }
  button,
  input {
    appearance: none;
    border: 0;
    padding: 0;
    margin: 0;
    background-color: transparent;
    border-radius: 0;
  }

  button {
    cursor: pointer;
  }
  em {
    font-style: normal;
  }
  a {
    text-decoration: none;
    cursor: pointer;
  }
  a:hover,
  a:focus {
    text-decoration: underline;
  }
  img {
    vertical-align: top;
  }
  fieldset {
    border: 0 none;
    margin: 0;
    padding: 0;
  }

  .snsBtnGroup {
    display: flex;
    flex-direction: row;
    gap: 2.8rem;
  }
  .snsBtnGroup a {
    width: 2.8rem;
    height: 2.8rem;
    border-radius: 100%;
  }
  .snsBtnGroup a svg {
    width: 2.8rem;
    height: 2.8rem;
  }

  
  /* 각 프로젝트 별 페이지 관련 css */
  .container {
    color: ${({ theme }) => theme.color.lightGray};
    position: relative;
    padding-top: 4.8rem;

    @media screen and (min-width: 769px) {
      padding-top: 7rem;
    }
  }

  .title {
    display: none;

    @media screen and (min-width: 769px) {
      display: block;
      font-family: 'Clash Display';
      color: ${({ theme }) => theme.color.black};
      font-size: 9.6rem;
      font-weight: 900;
      padding-top: 9.6rem;
      margin-bottom: 3.2rem;
    }
  }

  .main-img {
    width: 100%;
    height: 40vw;
    background-color: gray;

    @media screen and (min-width: 769px) {
      height: 50rem;
    }
  }

  .project-info {
    isplay: flex;
    flex-direction: column;

    @media screen and (min-width: 769px) {
      flex-direction: row;
    }
  }

  .project-info-title {
    display: flex;
    flex-direction: row;
    @media screen and (min-width: 769px) {
      flex-direction: column;
    }
  }
  .project-info-title h3 {
    font-family: "Clash Display";
    font-size: 4rem;
    font-weight: 900;
    color: ${({ theme }) => theme.color.mainDark};

    @media screen and (min-width: 769px) {
      font-size: 3.2rem;
      color: ${({ theme }) => theme.color.black};
    }
  }
`;

export default GlobalStyles;
