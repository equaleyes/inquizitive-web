import React from 'react';
import './SubmitButton.scss';

type SubmitButtonProps = {
  children: any,
  loading?: boolean,
  onSubmit: () => any,
}

const SubmitButton = ({ children, onSubmit, loading }: SubmitButtonProps) => {
  const loader = <img src="assets/loader.svg" alt="" />;
  const handleSubmit = (e: any) => {
    e.preventDefault();

    onSubmit();
  };

  return (
    <button onClick={handleSubmit} className={`submit-btn ${loading ? 'loading' : ''}`}>
      {loading ? loader : children}
    </button>
  );
};

export default SubmitButton;