import React, { Component } from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
`;

class CounterBarFormatClass extends Component {
  constructor(props) {
    super(props);
    console.log
  }

  render() {
    return (
      <Wrapper>
        <button type="button" onClick={this.clear}>Clear</button>
      </Wrapper>
    )
  }
}

export default CounterBarFormatClass;
