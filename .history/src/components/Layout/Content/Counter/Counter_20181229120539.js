import React from 'react';
import styled from 'styled-components';

import CounterBar from './CounterBar/CounterBar';

const Textarea = styled.textarea`
  width: 100%;
  resize: none;
`;

const Counter = () => (
  <>
    <CounterBar />
    <Textarea />
  </>
)

export default Counter;