import React from 'react';
import Sign from '../Sign/Sign';
import { SignSelectorWrapper, SignButton } from './SignSelectorStyles';

export default function SignSelector({ setSign }) {
  function changeSign(sign) {
    setSign(sign);
  }
  return (
    <SignSelectorWrapper>
      <SignButton onClick={() => changeSign('+')}>
        <Sign sign="+" />
      </SignButton>

      <SignButton onClick={() => changeSign('-')}>
        <Sign sign="-" />
      </SignButton>

      <SignButton onClick={() => changeSign('*')}>
        <Sign sign="*" />
      </SignButton>

      <SignButton onClick={() => changeSign('/')}>
        <Sign sign="/" />
      </SignButton>
    </SignSelectorWrapper>
  );
}
