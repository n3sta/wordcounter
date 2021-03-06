import React from 'react';
import styled from 'styled-components';

import Counter from './Counter/Counter';
import Format from './Counter/Format/Format';
import Keywords from './Counter/Keywords/Keywords';

const ContentWrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;

class CounterClass {
  constructor(props) {
    super(props);
    this.state = {
      text: '',
      wordsLength: 0,
      charactersLength: 0
    }
    this.handleTextarea = this.handleTextarea.bind(this)
  }

  handleTextarea(e) {
    this.setState({
      text: e.target.value,
      wordsLength: String(e.target.value).split(' ').length,
      charactersLength: String(e.target.value).length
    })
  }

  render() {
    return (
      <ContentWrapper>
        <Format />
        <CounterBar />
        <Counter onChange={this.handleTextarea} />
        <Keywords />
      </ContentWrapper>
    )
  }
}

export default CounterClass;