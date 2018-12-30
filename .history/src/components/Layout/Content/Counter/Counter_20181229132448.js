import React from 'react';
import styled from 'styled-components';

const Counter = styled.div`
  background-color: #ffffff;
  padding: 15px;
  border: 1px solid #E8E9EA;
  border-radius: 5px;
  flex: 1 0 auto;
  margin: 0 25px;
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

const CounterClass = () => {
  <div>
    <Textarea placeholder="Type or paste something" />
  </div>
}

export default CounterClass;