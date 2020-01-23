import React from 'react';
import './input.scss';

export type InputEvent = {
  value: string,
  name: string
}

type InputProps = {
  placeholder: string,
  type: string,
  onInputChange: (value: string) => void,
}

const Input = ({ placeholder, type, onInputChange}: InputProps) => {
  const emitValue = (e: any) => {
    onInputChange(e.target.value);
  };

  return (
    <div className="form-input">
      <input type={type} onChange={emitValue} autoComplete="new-password" placeholder={placeholder} />
    </div>
  );
};

export default Input;