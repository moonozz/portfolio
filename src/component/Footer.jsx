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
  padding: 6.8rem 8rem 2.4rem;
`;

const Top = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Thx = styled.p`
  color: ${({ theme }) => theme.color.main};
  font-size: 4rem;
  font-family: 'Clash Display';
`;

const Info = styled.div`
  color: ${({ theme }) => theme.color.white};
  font-size: 1.8rem;
  text-align: right;
  p:first-child {
    margin-bottom: 2rem;
  }
`;

const Bottom = styled.div`
  color: ${({ theme }) => theme.color.white};
  font-size: 1.4rem;
  margin-top: 10.6rem;
`;
