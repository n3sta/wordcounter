import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  background-color: #ffffff;
  padding: 15px;
  border: 1px solid #E8E9EA;
  border-radius: 5px;
  flex-basis: 30%;
`;

const KeywordsClass = ({ keywords = [] }) => (
  <Wrapper>
    <ul>
      {Array.from(new Set(keywords)).map((x,i,self) => {
        return <li>{x} {self.filter(y => y === x)}</li>
      })}
    </ul>
  </Wrapper>
)

export default KeywordsClass;