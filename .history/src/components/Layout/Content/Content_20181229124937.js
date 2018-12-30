import React from 'react';
import styled from 'styled-components';

import Counter from './Counter/Counter';
import Format from './Counter/Format/Format';
import Keywords from './Counter/Keywords/Keywords';

const ContentWrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;

const CounterClass = () => (
  <ContentWrapper>
    <Format />
    <Counter a="a" />
    <Keywords />
  </ContentWrapper>
)

export default CounterClass;