import React from 'react';
import Number from '../Number/Number';
import { Wrapper } from './NumbersStyle';

export default function Numbers() {
  return (
    <Wrapper>
      {[...Array(10)].map((e, i) => {
        return <Number number={i} />;
      })}
    </Wrapper>
  );
}
