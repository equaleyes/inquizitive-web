import React from 'react';
import './Button.scss';

type ButtonProps = {
  children: any,
  onClick?: () => any,
}

const Button = ({ children, onClick }: ButtonProps) => {
  return <button  className="button" onClick={onClick}>{children}</button>;
};

export default Button;