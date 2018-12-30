import React from 'react';
import styled from 'styled-components';

import CounterBarGroup from './CounterBarGroup/CounterBarGroup';

const CounterBarClass = () => (
  <>
    <CounterBarGroup title="Words" amount="10" />
    <CounterBarGroup title="Characters" amount="29" />
  </>
)

export default CounterBarClass;