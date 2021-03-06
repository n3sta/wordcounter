import React from 'react';
import styled from 'styled-components';

import CounterBarGroup from './CounterBarGroup/CounterBarGroup';
import CounterBarFormat from './CounterBarFormat/CounterBarFormat';

const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  padding-bottom: 1em;
  border-bottom: 1px solid #E8E9EA;
`;

const CounterBarFormatFloat = styled(CounterBarFormat)`
  float: right;
`;

const CounterBarClass = ({wordsLength, charactersLength, format}) => (
  <Wrapper>
    <CounterBarGroup title="Words" length={wordsLength} />
    <CounterBarGroup title="Characters" length={charactersLength} />
    <CounterBarFormatFloat format={format} />
  </Wrapper>
)

export default CounterBarClass;
