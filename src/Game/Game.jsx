import React from 'react';
import GamePlan from '../GamePlan/GamePlan';
import Numbers from '../Numbers/Numbers';
import Button from '../Button/Button';

export default function Game() {
  return (
    <div>
      <GamePlan />
      <Numbers />
      <Button />
    </div>
  );
}
