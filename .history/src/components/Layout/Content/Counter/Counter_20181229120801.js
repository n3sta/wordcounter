import React from 'react';
import styled from 'styled-components';

import CounterBar from './CounterBar/CounterBar';

const Textarea = styled.textarea`
  width: 100%;
  resize: none;
`;

const Counter = styled.div`
  padding: 15px;
  border: 1px solid #E8E9EA;
  border-radius: 5px;
`;

const CounterClass = () => (
  <>
    <CounterBar />
    <Textarea />
  </>
)

export default CounterClass;