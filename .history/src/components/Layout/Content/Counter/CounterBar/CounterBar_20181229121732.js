import React from 'react';
import styled from 'styled-components';

import CounterBarGroup from './CounterBarGroup/CounterBarGroup';

const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;

const CounterBarClass = () => (
  <Wrapper>
    <CounterBarGroup title="Words" amount="10" />
    <CounterBarGroup title="Characters" amount="29" />
  </Wrapper>
)

export default CounterBarClass;