import React from 'react';
import styled from 'styled-components';

import CounterBar from './CounterBar/CounterBar';

const Textarea = styled.textarea`
  width: 100%;
  resize: none;
`;


const CounterClass = () => (
  <>
    <CounterBar />
    <Textarea />
  </>
)

export default CounterClass;