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
    <CounterBarGroup title="Facebook" amount="29" max="250" />
    <CounterBarGroup title="Twitter" amount="29" max="280" />
    <CounterBarGroup title="Google" amount="29" max="300" />
  </Wrapper>
)

export default CounterBarClass;