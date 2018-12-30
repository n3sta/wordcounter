import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  background-color: #ffffff;
  padding: 15px;
  border: 1px solid #E8E9EA;
  border-radius: 5px;
  flex-basis: 30%;
`;

const FormatClass = ({ keywords = [] }) => (
  <Wrapper>
    <ul>
      {keywords.map(x => {
        return <li>x</li>
      })}
    </ul>
  </Wrapper>
)

export default FormatClass;