import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  margin-right: -8px;

  @media only screen and (max-width: 600px) {
    margin: 16px 0 0 -8px;
  }
`;

const Button = styled.button`
  font-weight: 500;
  border: 1px solid #E8E9EA;
  background-color: #ffffff;
  padding: 4px 10px;
  border-radius: 2px;
  margin: 0 8px;
  cursor: pointer;
  transition: all 0.25s ease-in-out;
  outline: none;
  &:hover {
    background-color: #eee;
  }
`;

const CounterBarFormatClass = ({ fontSize, decrementFontsize, incrementFontsize, clear }) => (
  <Wrapper>
    <div>
      <Button type="button" onClick={decrementFontsize}>-</Button>
        {fontSize}px
      <Button type="button" onClick={incrementFontsize}>+</Button>
    </div>
    <Button type="button" onClick={clear}>Clear</Button>
  </Wrapper>
)

CounterBarFormatClass.defaultProps = {
  fontSize: 18
}

CounterBarFormatClass.propTypes = {
  fontSize: PropTypes.number
}

export default CounterBarFormatClass;