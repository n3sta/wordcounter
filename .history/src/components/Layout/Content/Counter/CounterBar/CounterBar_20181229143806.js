import React from 'react';
import styled from 'styled-components';

import CounterBarGroup from './CounterBarGroup/CounterBarGroup';

const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  padding-bottom: 1em;
  border-bottom: 1px solid #E8E9EA;
`;

const CounterBarClass = ({wordsLength, charactersLength}) => (
  <Wrapper>
    <CounterBarGroup title="Words" wordsLength={wordsLength} />
    <CounterBarGroup title="Characters" charactersLength={charactersLength} />
    <CounterBarGroup title="Facebook" wordsLength={wordsLength} />
    <CounterBarGroup title="Twitter" wordsLength={wordsLength} />
    <CounterBarGroup title="Google" wordsLength={wordsLength} />
  </Wrapper>
)

export default CounterBarClass;
