import React from 'react';
import styled from 'styled-components';

import CounterBarGroup from './CounterBarGroup/CounterBarGroup';
import CounterBarFormat from './CounterBarFormat/CounterBarFormat';

const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  padding-bottom: 1em;
  border-bottom: 1px solid #E8E9EA;
`;

const CounterBarGroupWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

const CounterBarClass = ({wordsLength, charactersLength, format, handleClear}) => (
  <Wrapper>
    <CounterBarGroupWrapper>
      <CounterBarGroup title="Words" length={wordsLength} />
      <CounterBarGroup title="Characters" length={charactersLength} />
    </CounterBarGroupWrapper>
    <CounterBarFormat format={format} handleClear={handleClear} />
  </Wrapper>
)

export default CounterBarClass;
