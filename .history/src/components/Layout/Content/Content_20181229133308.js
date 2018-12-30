import React, { Component } from 'react';
import styled from 'styled-components';

import Counter from './Counter/Counter';
import Format from './Counter/Format/Format';
import Keywords from './Counter/Keywords/Keywords';
import CounterBar from './Counter/CounterBar/CounterBar';

const ContentWrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;

const CounterWrapper = styled.div`
  background-color: #ffffff;
  padding: 15px;
  border: 1px solid #E8E9EA;
  border-radius: 5px;
  flex: 1 0 auto;
  margin: 0 25px;
`;

class ContentClass extends Component {
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
        <CounterWrapper>
          <CounterBar wordsLength={this.state.wordsLength} charactersLength={this.state.charactersLength} />
          <Counter onChange={this.handleTextarea} />
        </CounterWrapper>
        <Keywords />
      </ContentWrapper>
    )
  }
}

export default ContentClass;