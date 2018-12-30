import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const Textarea = styled.textarea`
  overflow-y: scroll;
  height: 300px;
  width: 100%;
  resize: none;
  border: none;
  padding-top: 1em;
  font-size: ${props => props.fontSize}px;
  &:focus {
    outline: none;
  }
`;

const CounterClass = ({ text, onChange, fontSize }) => (
  <Textarea placeholder="Type or paste something" value={text} fontSize={fontSize} onChange={onChange} />
)

CounterClass.defaultProps = {
  text: '',
  fontSize: 18
}

CounterClass.propTypes = {
  text: PropTypes.string,
  fontSize: PropTypes.number,
  onChange: PropTypes.func
}

export default CounterClass;