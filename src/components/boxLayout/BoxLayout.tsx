import React from 'react';
import './BoxLayout.scss';

type BoxLayoutProps = {
  children: any,
  border?: boolean,
}

const BoxLayout = ({ children, border }: BoxLayoutProps) => {
  return <div className={`shadowed-box ${border ? 'border' : ''}`}>{children}</div>;
};

export default BoxLayout;
