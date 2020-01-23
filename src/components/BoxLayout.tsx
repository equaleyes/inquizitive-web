import React from 'react';
import './BoxLayout.scss';

type BoxLayoutProps = {
  children: any,
}

const BoxLayout = ({ children }: BoxLayoutProps) => {
  return <div className="shadowed-box">{children}</div>;
};

export default BoxLayout;
