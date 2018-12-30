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
      keywords: [],
      format: {
        fontSize: 14,
        weight: 400,
      }
    }
    this.handleTextarea = this.handleTextarea.bind(this)
    this.handleClear = this.handleClear.bind(this)
    this.setData = this.setData.bind(this);
  }

  componentDidMount() {
    this.setData('');
  }

  setData(value) {
    const words = value !== '' ? String(value).replace(/ {2,}/g,' ').trim().split(' ') || [];
    this.setState({
      text: value,
      wordsLength: words.length,
      charactersLength: String(value).length,
      keywords: words
    })
  }

  handleTextarea(e) {
    const value = e.target.value;
    this.setData(value);
  }

  handleClear() {
    this.setData('');
  }

  render() {
    return (
      <ContentWrapper>
        <CounterWrapper>
          <CounterBar wordsLength={this.state.wordsLength} charactersLength={this.state.charactersLength} format={this.state.format} clear={this.handleClear} />
          <Counter text={this.state.text} onChange={this.handleTextarea} />
        </CounterWrapper>
        <Keywords keywords={this.state.keywords} />
      </ContentWrapper>
    )
  }
}

export default ContentClass;