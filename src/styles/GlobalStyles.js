import { createGlobalStyle, keyframes } from 'styled-components';
import reset from 'styled-reset';

// const frameInAnimation = keyframes`
//     from {
//       opacity: 0;
//       transform: translateY(50%);
//       display: none;
//     }

//     to {
//       opacity: 1;
//       transform: translateY(0%);
//       display: block;
//     }
//   `;

const GlobalStyles = createGlobalStyle`
  ${reset}

  html {
    font-size: 62.5%;
    over-flow-x :  hidden;
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

  
  .animation-default {
    opacity: 0;
    transform: translateY(5rem);
  }
  .frame-in {
    opacity: 1;
    transform: translateY(0);
    transition: all 1s ease-in-out;
  }

  .scroll-hidden {
    overflow-x: hidden;
  }

  .hidden {
    display: none;
  }
  
  // tag Group 묶은 겄
  .tag-group {
    display: flex;
    flex-wrap: wrap;
    margin-top: 3.2rem;
    div:first-child {
      margin-left: 0;
    }
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
    background-color: ${({ theme }) => theme.color.white};
    color: ${({ theme }) => theme.color.black};
    position: relative;
    padding-top: 4.8rem;
    font-size: 1.4rem;
    overflow-x: hidden;

    @media ${({ theme }) => theme.tablet} {
      padding-top: 7rem;
      font-size: 1.6rem
    }
  }

  .title {
    display: none;

    @media ${({ theme }) => theme.tablet} {
      display: block;
      font-family: 'Clash Display';
      /* color: ${({ theme }) => theme.color.mainDark}; */
      font-size: 9.6rem;
      font-weight: 900;
      padding: 9.6rem 8rem 3.2rem;
    }
  }

  .main-img {
    width: 100%;
    height: 40vw;
    background-color: gray;

    @media ${({ theme }) => theme.tablet} {
      height: 50rem;
    }
  }

  .project-info {
    display: grid;
    grid-template-columns: 1fr;
    padding: 6rem 2rem 16rem;
    @media ${({ theme }) => theme.tablet} {
      grid-template-columns: 2fr 3fr;
      padding: 12rem 8rem 16rem;
    }
  }

  .project-title-group {
    display: grid;
    grid-template-columns: 1fr;
    @media ${({ theme }) => theme.tablet} {
      /* flex-direction: row; */
    }
  }

  .project-info-title {
    /* display: flex;
    flex-direction: row;
    justify-content: space-between; */
    /* position: relative; */
    display: grid;
    grid-template-columns: 7fr 1fr;
    @media ${({ theme }) => theme.tablet} {
      grid-template-columns: 1fr;
    }
  }
  .project-info-title h3 {
    font-family: "Clash Display";
    font-size: 4rem;
    font-weight: 900;

    @media ${({ theme }) => theme.tablet} {
      font-size: 3.2rem;
    }
  }
  .project-link {
    position: relative;
    color: ${({ theme }) => theme.color.black};
    width: 9rem;
    display: flex;
    align-items: center;
    font-size: 1.8rem;
    
    @media ${({ theme }) => theme.tablet} {
      font-size: 2rem;
      width: 10rem;
    }
  }
  .project-link span {
    content: "";
    width: 3rem;
    border-bottom: 0.1rem solid ${({ theme }) => theme.color.black};
    position: absolute;
    top: 50%;
    left: 50%;

    &::before {
      content: '';
      border-bottom: 0.1rem solid ${({ theme }) => theme.color.black};
      position: absolute;
      width: 20%;

      top: -0.2rem;
      left: 85%;
      transform: rotateZ(45deg);
    }
    &::after {
      content: '';
      border-bottom: 0.1rem solid ${({ theme }) => theme.color.black};
      position: absolute;
      width: 20%;

      top: 0.2rem;
      left: 85%;
      transform: rotateZ(-45deg);
    }

    @media ${({ theme }) => theme.tablet} {
      width: 6rem;

      &::before {
        width: 10%;
        top: -0.2rem;
        left: 91%;
        transform: rotateZ(45deg);
      }
      &::after {
        width: 10%;
        top: 0.2rem;
        left: 91%;
        transform: rotateZ(-45deg);
      }
    }
  }

  .project-info-detail {
    font-size: 1.6rem
  }
  .project-date {
    margin: 1rem 0 2.4rem;
    font-weight: 600;
  }
  .project-info-detail li {
    display: block;
    margin-top: 0.4rem;
  }
`;

export default GlobalStyles;
