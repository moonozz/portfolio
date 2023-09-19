import React from 'react';
import styled from 'styled-components';

function Tag({ items, borderColor }) {
  return (
    <>
      {items.map(item => (
        <TagDiv borderColor={borderColor}>
          <p>{item}</p>
        </TagDiv>
      ))}
    </>
  );
}

export default Tag;

const TagDiv = styled.div`
  padding: 0.2rem 0.8rem;
  border: 0.1rem solid;
  border-color: ${({ borderColor }) => borderColor};
  /* border-radius: 100%; */
  border-radius: 1.2rem;
  margin: 0 0.2rem;
  margin-bottom: 0.8rem;
  color: ${({ borderColor }) => borderColor};
  p {
    font-size: 1.4rem;
  }
`;
