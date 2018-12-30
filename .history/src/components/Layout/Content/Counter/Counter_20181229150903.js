import React from 'react';
import styled from 'styled-components';

const Textarea = styled.textarea`
  overflow-y: scroll;
  height: 300px;
  width: 100%;
  resize: none;
  border: none;
  padding-top: 1em;
  &:focus {
    outline: none;
  }
`;

const CounterClass = ({onChange}) => (
  <Textarea placeholder="Type or paste something" onChange={onChange} />
)

export default CounterClass;