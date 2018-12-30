import React from 'react';
import styled from 'styled-components';

import FormatItem from './FormatItem/FormatItem';

const Wrapper = styled.div`
  background-color: #ffffff;
  padding: 15px;
  border: 1px solid #E8E9EA;
  border-radius: 5px;
  width: 50px;
`;

const FormatClass = () => (
  <Wrapper>
    <FormatItem />
    <FormatItem />
    <FormatItem />
    <FormatItem />
  </Wrapper>
)

export default FormatClass;