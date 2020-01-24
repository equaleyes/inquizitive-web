import React from 'react';
import './input.scss';

export type InputEvent = {
  value: string,
  name: string
}

type InputProps = {
  placeholder?: string,
  type?: string,
  inline?: boolean,
  onInputChange: (value: string) => void,
}

const Input = ({ placeholder, type, onInputChange, inline }: InputProps) => {
  const emitValue = (e: any) => {
    onInputChange(e.target.value);
  };

  return (
    <div className={`form-input ${inline ? 'inline-input' : ''}`}>
      <input type={type || 'text'} onChange={emitValue} autoComplete="new-password" placeholder={placeholder || ''} />
    </div>
  );
};

export default Input;