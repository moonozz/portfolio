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
    width: 2rem;
    height: 2rem;
    border-radius: 100%;
  }
  .snsBtnGroup a svg {
    width: 2rem;
    height: 2rem;
  }

  
  /* 각 프로젝트 별 페이지 관련 css */

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
  
  .pc-img, .img-gif {
    max-width: 150rem;
    margin-bottom: 4rem;
    img {
      margin-bottom: 4rem;
    }

    @media ${({ theme }) => theme.tablet} {
      margin-bottom: 10rem;
      img {
        margin-bottom: 10rem;
      }
    }
  }

  .m-img {
    display: grid;
    grid-template-columns: 1fr;
    grid-gap: 4rem;
    img {
      max-width: 36rem;
    }
    
    @media ${({ theme }) => theme.mobile} {
      grid-template-columns: 1fr 1fr;
      grid-gap: 4rem;
      img {
        max-width: 32rem;
      }
    }
    @media ${({ theme }) => theme.tablet} {
      grid-template-columns: 1fr 1fr 1fr;
      grid-gap: 10rem;
      img {
        max-width: 32rem;
      }
    }

  }
`;

export default GlobalStyles;
