import React from 'react';
import { InputWrapper } from './InputStyles';

export default function Input({ value1, handleValue }) {
  const handleChange = (event) => {
    handleValue(event.target.value);
  };
  return (
    <InputWrapper>
      <input type="number" value={value1} onChange={handleChange} />
    </InputWrapper>
  );
}
