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

const CounterBarClass = ({wordsLength, CharactersLength}) => (
  <Wrapper>
    <CounterBarGroup title="Words" amount="wordsLength" />
    <CounterBarGroup title="Characters" amount="CharactersLength" />
    <CounterBarGroup title="Facebook" amount="wordsLength" max="250" />
    <CounterBarGroup title="Twitter" amount="wordsLength" max="280" />
    <CounterBarGroup title="Google" amount="wordsLength" max="300" />
  </Wrapper>
)

export default CounterBarClass;