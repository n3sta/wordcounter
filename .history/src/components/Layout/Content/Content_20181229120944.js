import React from 'react';
import styled from 'styled-components';

import Counter from './Counter/Counter';

const ContentWrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;

const CounterClass = () => (
  <ContentWrapper>
    <Counter />
  </ContentWrapper>
)

export default CounterClass;