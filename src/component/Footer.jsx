import React from 'react';
import styled from 'styled-components';

function Footer() {
  return (
    <FooterSec>
      <Top>
        <Thx>Thank U :&#41;</Thx>
        <Info>
          <p>Seoul, Korea</p>
          <p>
            http0127@naver.com
            <br />
            +82&#41;10-3112-4543
          </p>
        </Info>
      </Top>
      <Bottom>
        <p>©Moono</p>
      </Bottom>
    </FooterSec>
  );
}

export default Footer;

const FooterSec = styled.footer`
  dixplay: flex;
  background-color: ${({ theme }) => theme.color.black};
  padding: 4rem 2rem 2.4rem;
  @media screen and (min-width: 769px) {
    padding: 6.8rem 8rem 2.4rem;
  }
`;

const Top = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: start;
  @media screen and (min-width: 769px) {
    justify-content: space-between;
  }
`;

const Thx = styled.p`
  color: ${({ theme }) => theme.color.main};
  font-size: 2.8rem;
  font-family: 'Clash Display';
  @media screen and (min-width: 769px) {
    font-size: 4rem;
  }
`;

const Info = styled.div`
  color: ${({ theme }) => theme.color.white};
  font-size: 1.4rem;
  text-align: left;
  margin-top: 2rem;
  p:first-child {
    margin-bottom: 2rem;
  }
  @media screen and (min-width: 769px) {
    font-size: 1.8rem;
    text-align: right;
  }
`;

const Bottom = styled.div`
  color: ${({ theme }) => theme.color.white};
  font-size: 1.2rem;
  margin-top: 10.6rem;
  @media screen and (min-width: 769px) {
    font-size: 1.4rem;
  }
`;
