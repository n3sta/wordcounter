import React from 'react';
import styled from 'styled-components';


const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const H4 = styled.h4`
  color: #8A8B8C;
  margin-top: 0;
  margin-bottom: 0.25rem;
  font-size: 0.75rem;
  font-weight: 400;
  text-transform: uppercase;
  letter-spacing: 0.075em;
`;

const P = styled.p`
  display: inline-block;
  font-size: 2rem;
  font-weight: 500;
  line-height: 1;
`;

const Small = styled.small`
  display: inline-block;
  font-size: 1rem;
  color: #8A8B8C;
`;

const CounterBarGroupClass = ({title, wordsLength = null, charactersLength = null, max = null}) => (
  <Wrapper>
    <H4>{title}</H4>
    <P>
      {wordsLength ? max ? max - wordsLength : wordsLength : max - charactersLength}
      {(max) && <Small>/{max}</Small>}
    </P>
  </Wrapper>
)

export default CounterBarGroupClass;