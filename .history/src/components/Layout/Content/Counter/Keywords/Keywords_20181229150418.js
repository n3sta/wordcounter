import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  background-color: #ffffff;
  padding: 15px;
  border: 1px solid #E8E9EA;
  border-radius: 5px;
  flex-basis: 30%;
`;

const H4 = styled.h4`
  flex: 0 1 auto;
  display: inline-block;
  margin: 0;
  color: #8A8B8C;
  font-size: 0.75rem;
  font-weight: 400;
  line-height: 1;
  text-transform: uppercase;
  letter-spacing: 0.075em;
`;

const Ul = styled.ul`
  margin-top: 20px;
`;

const Li = styled.li`
  line-height: 1.5em;
  &:nth-child(even) {
    background-color: #F7F8F9;
  }
`;

const KeywordsClass = ({ keywords = [] }) => (
  <Wrapper>
    <H4>Keywords</H4>
    <ul>
      {Array.from(new Set(keywords)).map(x => {
        return <li>{x} {keywords.filter(y => y == x).length}</li>
      })}
    </ul>
  </Wrapper>
)

export default KeywordsClass;