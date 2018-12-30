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
  <div>
    <Textarea placeholder="Type or paste something" onChange={handleTextarea} />
  </div>
)

export default CounterClass;