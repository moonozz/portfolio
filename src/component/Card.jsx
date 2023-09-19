import React from 'react';
import styled from 'styled-components';
import Tag from './Tag';
import perpettMain from '../images/perpett-main.png';

function Card({ text, items }) {
  return (
    <CardDiv>
      <Img src={perpettMain} alt="퍼펫트" />
      <Txt>
        <H3 className="clashFont">{text}</H3>
        <Tag items={items} />
      </Txt>
    </CardDiv>
  );
}

export default Card;

const CardDiv = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 2.4rem;
`;

const Img = styled.img`
  border-radius: 1.2rem;
  width: 50px;
  height: 50px;
`;

const Txt = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

const H3 = styled.h3`
  color: ${({ theme }) => theme.color.mainDark};
`;
