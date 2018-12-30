import React from 'react';
import styled from 'styled-components';

import CounterBar from './CounterBar/CounterBar';

const Textarea = styled.textarea`
  width: 100%;
  resize: none;
  border: none;
`;

const Counter = styled.div`
  background-color: #ffffff;
  padding: 15px;
  border: 1px solid #E8E9EA;
  border-radius: 5px;
`;

const CounterClass = () => (
  <Counter>
    <CounterBar />
    <Textarea />
  </Counter>
)

export default CounterClass;