import React from 'react';
import styled from 'styled-components';

import CounterBar from './CounterBar/CounterBar';

const Counter = styled.div`
  background-color: #ffffff;
  padding: 15px;
  border: 1px solid #E8E9EA;
  border-radius: 5px;
  flex: 1 0 auto;
`;

const Textarea = styled.textarea`
  overflow-y: scroll;
  min-height: 150px;
  width: 100%;
  resize: none;
  border: none;
  padding-top: 1em;
  &:focus {
    outline: none;
  }
`;

const CounterClass = () => (
  <Counter>
    <CounterBar />
    <Textarea placeholder="Type or paste something" />
  </Counter>
)

export default CounterClass;