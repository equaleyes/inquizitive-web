import React from 'react';
import './SubmitButton.scss';

type SubmitButtonProps = {
  children: any,
  onSubmit: () => any,
}

const SubmitButton = ({ children, onSubmit }: SubmitButtonProps) => {
  const handleSubmit = (e: any) => {
    e.preventDefault();

    onSubmit();
  };

  return <button onClick={handleSubmit}>{children}</button>;
};

export default SubmitButton;