import React from 'react';
import styled from 'styled-components';

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

const CounterClass = ({handleTextarea}) => (
  <Textarea placeholder="Type or paste something" onChange={handleTextarea} />
)

export default CounterClass;