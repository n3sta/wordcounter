import React, { Component } from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  float: right;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
`;

class CounterBarClass  extends Component {
  constructor(props) {
    super(props);
    this.state = {

    }
  }
  render() {
    return (
      <Wrapper>
        <button type="button" onClear="this.handleClear">Clear</button>
      </Wrapper>
    )
  }
}

export default CounterBarClass;
