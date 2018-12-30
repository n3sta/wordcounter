import React from 'react';
import styled from 'styled-components';

import Counter from './Counter/Counter';
import Format from './Counter/Format/Format';

const ContentWrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;

const CounterClass = () => (
  <ContentWrapper>
    <Format />
    <Counter />
  </ContentWrapper>
)

export default CounterClass;