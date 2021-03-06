import React from 'react';
import styled from 'styled-components';

import Counter from './Counter/Counter';

const Content = styled.div`
  display: flex;
  justify-content: space-between;
`;

const CounterClass = () => (
  <Content>
    <Counter />
  </Content>
)

export default CounterClass;