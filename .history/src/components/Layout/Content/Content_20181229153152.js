import React, { Component } from 'react';
import styled from 'styled-components';

import Counter from './Counter/Counter';
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
  margin-right: 25px;
`;

class ContentClass extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: '',
      wordsLength: 0,
      charactersLength: 0,
      keywords: []
    }
    this.handleTextarea = this.handleTextarea.bind(this)
  }

  handleTextarea(e) {
    const value = e.target.value;
    const words = String(value).replace(/  + +$/g,'').split(' ');
    this.setState({
      text: value,
      wordsLength: words.length,
      charactersLength: String(value).length,
      keywords: words
    })
  }

  render() {
    return (
      <ContentWrapper>
        <CounterWrapper>
          <CounterBar wordsLength={this.state.wordsLength} charactersLength={this.state.charactersLength} />
          <Counter onChange={this.handleTextarea} />
        </CounterWrapper>
        <Keywords keywords={this.state.keywords} />
      </ContentWrapper>
    )
  }
}

export default ContentClass;