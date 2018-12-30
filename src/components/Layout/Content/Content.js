import React, { Component } from 'react';
import styled from 'styled-components';

import Counter from './Counter/Counter';
import Keywords from './Counter/Keywords/Keywords';
import CounterBar from './Counter/CounterBar/CounterBar';

const ContentWrapper = styled.div`
  display: flex;
  justify-content: space-between;

  @media only screen and (max-width: 1200px) {
    flex-direction: column;
  }
`;

const CounterWrapper = styled.div`
  background-color: #ffffff;
  padding: 15px;
  border: 1px solid #E8E9EA;
  border-radius: 5px;
  flex: 0 0 65%;
  margin-right: 25px;

  @media only screen and (max-width: 1200px) {
    margin: 0 0 25px 0;
    flex: 1 0 100%;
  }
`;

class ContentClass extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: '',
      wordsLength: 0,
      charactersLength: 0,
      keywords: [],
      fontSize: 18
    }
    this.handleTextarea = this.handleTextarea.bind(this)
    this.handleClear = this.handleClear.bind(this)
    this.decrementFontsize = this.decrementFontsize.bind(this)
    this.incrementFontsize = this.incrementFontsize.bind(this)
    this.setData = this.setData.bind(this);
  }

  componentDidMount() {
    this.setData('');
  }

  setData(value) {
    const words = value !== '' ? String(value).replace(/ {2,}/g,' ').trim().split(' ') : [];
    this.setState({
      text: value,
      wordsLength: words.length,
      charactersLength: String(value).length,
      keywords: this.getUniques(words)
    })
  }

  getUniques(words) {
    const uniques = []
    words.forEach(word => {
      if (!uniques.some(x => x.name === word)) {
        uniques.push({
          name: word,
          length: words.filter(x => x === word).length
        })
      }
    });
    return uniques.sort((a,b) => b.length - a.length)
  }

  handleTextarea(e) {
    const value = e.target.value;
    this.setData(value);
  }

  handleClear() {
    this.setData('');
  }

  decrementFontsize() {
    this.setState(state => ({
      fontSize: (state.fontSize > 10) ? --state.fontSize : state.fontSize
    }))
  }

  incrementFontsize() {
    this.setState(state => ({
      fontSize: (state.fontSize < 26) ? ++state.fontSize : state.fontSize
    }))
  }

  render() {
    return (
      <ContentWrapper>
        <CounterWrapper>
          <CounterBar wordsLength={this.state.wordsLength} charactersLength={this.state.charactersLength} fontSize={this.state.fontSize} clear={this.handleClear} incrementFontsize={this.incrementFontsize} decrementFontsize={this.decrementFontsize} />
          <Counter text={this.state.text} fontSize={this.state.fontSize} onChange={this.handleTextarea} />
        </CounterWrapper>
        <Keywords keywords={this.state.keywords} />
      </ContentWrapper>
    )
  }
}

export default ContentClass;