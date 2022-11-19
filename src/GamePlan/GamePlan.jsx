import React from 'react';
import { useState } from 'react';
import Input from '../Input/Input';
import Sign from '../Sign/Sign';
import SignSelector from '../SignSelector/SignSelector';
import { InputsWrapper, Inputs } from './GamePlanStyles';

export default function GamePlan() {
  const [sign, setSign] = useState('+');
  const [value1, setValue1] = useState(0);
  const [value2, setValue2] = useState(0);
  const [result1, setResult] = useState(0);

  function changeResult(value1, value2, sign) {
    let result;
    switch (sign) {
      case '+':
        result = value1 + value2;
        break;
      case '-':
        result = value1 - value2;
        break;
      case '/':
        result = value1 / value2;
        break;
      case '*':
        result = value1 * value2;
        break;
      default:
        result = value1 + value2;
        break;
    }
    setResult(result);
  }
  function changeValue1(value) {
    setValue1(parseInt(value));
    changeResult(parseInt(value), parseInt(value2), sign);
  }
  function changeValue2(value) {
    setValue2(parseInt(value));
    changeResult(parseInt(value1), parseInt(value), sign);
  }

  return (
    <InputsWrapper>
      <h1>Gameplan</h1>
      <SignSelector setSign={setSign} />
      <Inputs>
        <Input handleValue={changeValue1} value1={value1} />
        <Sign sign={sign} />

        <Input handleValue={changeValue2} value1={value2} />
        <Sign sign="=" />
        <Input value1={result1} />
      </Inputs>
    </InputsWrapper>
  );
}
