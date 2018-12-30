import React from 'react';
import styled from 'styled-components';


const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const CounterBarGroupClass = ({title, amount}) => (
  <Wrapper>
    <h4>{title}</h4>
    <p>{amount}</p>
  </Wrapper>
)

export default CounterBarGroupClass;