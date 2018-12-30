import React, { Component } from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
`;

const CounterBarFormatClass = ({ clear }) => (
  <Wrapper>
    <button type="button" onClick={clear}>Clear</button>
  </Wrapper>
)

export default CounterBarFormatClass;
