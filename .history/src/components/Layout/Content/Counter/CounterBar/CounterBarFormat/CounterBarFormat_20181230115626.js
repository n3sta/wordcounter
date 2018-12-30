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
    this.state = {
      test: 'test'
    }
  }

  render() {
    return (
      <div>asd</div>
    )
  }
}

export default CounterBarFormatClass;
