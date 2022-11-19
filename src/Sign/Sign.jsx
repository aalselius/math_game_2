import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faDivide,
  faPlus,
  faMinus,
  faXmark,
  faEquals,
} from '@fortawesome/free-solid-svg-icons';

import { SignWrapper } from './SignStyles';

export default function Sign({ sign }) {
  const getSign = () => {
    switch (sign) {
      case '+':
        return <FontAwesomeIcon icon={faPlus} />;
      case '-':
        return <FontAwesomeIcon icon={faMinus} />;
      case '/':
        return <FontAwesomeIcon icon={faDivide} />;
      case '*':
        return <FontAwesomeIcon icon={faXmark} />;
      case '=':
        return <FontAwesomeIcon icon={faEquals} />;
      default:
        return <FontAwesomeIcon icon={faPlus} />;
    }
  };
  return <SignWrapper>{getSign({ sign })}</SignWrapper>;
}
