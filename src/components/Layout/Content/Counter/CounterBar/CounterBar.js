import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import CounterBarGroup from './CounterBarGroup/CounterBarGroup';
import CounterBarFormat from './CounterBarFormat/CounterBarFormat';

const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  padding-bottom: 1em;
  border-bottom: 1px solid #E8E9EA;

  @media only screen and (max-width: 600px) {
    flex-direction: column;
  }
`;

const CounterBarGroupWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

const CounterBarClass = ({wordsLength, charactersLength, fontSize, decrementFontsize, incrementFontsize, clear}) => (
  <Wrapper>
    <CounterBarGroupWrapper>
      <CounterBarGroup title="Words" length={wordsLength} />
      <CounterBarGroup title="Characters" length={charactersLength} />
    </CounterBarGroupWrapper>
    <CounterBarFormat fontSize={fontSize} decrementFontsize={decrementFontsize} incrementFontsize={incrementFontsize} clear={clear} />
  </Wrapper>
)

CounterBarClass.defaultProps = {
  wordsLength: 0,
  charactersLength: 0,
  fontSize: 18
}

CounterBarClass.propTypes = {
  wordsLength: PropTypes.number,
  charactersLength: PropTypes.number,
  fontSize: PropTypes.number
}

export default CounterBarClass;
