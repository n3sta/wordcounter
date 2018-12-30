import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const Wrapper = styled.div`
  background-color: #ffffff;
  padding: 15px;
  border: 1px solid #E8E9EA;
  border-radius: 5px;
  flex: 0 0 35%;

  @media only screen and (max-width: 1200px) {
    flex: 1 0 100%;
  }
`;

const H4 = styled.h4`
  flex: 0 1 auto;
  display: inline-block;
  margin: 0;
  color: #8A8B8C;
  font-size: 0.75rem;
  font-weight: 400;
  line-height: 1;
  text-transform: uppercase;
  letter-spacing: 0.075em;
`;

const Ul = styled.ul`
  margin-top: 20px;
  overflow-y: scroll;
  height: 380px;
`;

const Li = styled.li`
  display: flex;
  justify-content: space-between;
  line-height: 1.5em;
  padding: 3px 9px;
  &:nth-child(odd) {
    background-color: #F7F8F9;
  }
`;

const Span = styled.span`
  max-width: 80%;
  word-break: break-all;
`;

const KeywordsClass = ({ keywords = [] }) => (
  <Wrapper>
    <H4>Keywords</H4>
    <Ul>
      {keywords.map(x => <Li key={x.name}><Span>{x.name}</Span> <span>{x.length}</span></Li>)}
    </Ul>
  </Wrapper>
)

KeywordsClass.defaultProps = {
  keywords: [],
}

KeywordsClass.propTypes = {
  keywords: PropTypes.array
}

export default KeywordsClass;