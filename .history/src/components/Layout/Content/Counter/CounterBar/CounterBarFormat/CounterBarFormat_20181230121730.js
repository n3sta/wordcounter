import React, { Component } from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
`;

const CounterBarFormatClass = ({ fontSize, decrementFontsize, incrementFontsize, clear }) => (
  <Wrapper>
    <div>
      <button type="button" onClick={decrementFontsize}>-</button>
        {fontSize}
      <button type="button" onClick={incrementFontsize}>+</button>
    </div>
    <button type="button" onClick={clear}>Clear</button>
  </Wrapper>
)

export default CounterBarFormatClass;
