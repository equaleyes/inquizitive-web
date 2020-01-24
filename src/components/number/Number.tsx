import React, { useState, useEffect } from 'react';
import './Number.scss';

type NumberProps = {
  value: number;
  symbol?: string;
}

const Number = ({value, symbol}: NumberProps) => {
  let counter = 0;
  const [number, setNumber] = useState(0);
  const color = (): string => {
    return value < 50 ? 'red' : 'green';
  };

  const animateNumber = (): void => {
    const interval = setInterval(() => {
      counter++;

      setNumber(counter);
      
      if (counter === value) {
        clearInterval(interval);
      }
    }, 20);
  };

  useEffect(() => {
    animateNumber();
  }, [value]);
  
  return (
    <div className={`number ${color()}`}>
      {number}
      {symbol || ''}
    </div>
  );
};

export default Number;
