import React from 'react';
import styled from 'styled-components';

import FormatItem from './FormatItem/FormatItem';

const Wrapper = styled.div`
  background-color: #ffffff;
  padding: 15px;
  border: 1px solid #E8E9EA;
  border-radius: 5px;
  flex: 0 0 10%;
`;

const CounterClass = () => (
  <Wrapper>
    <FormatItem />
    <FormatItem />
    <FormatItem />
    <FormatItem />
  </Wrapper>
)

export default CounterClass;