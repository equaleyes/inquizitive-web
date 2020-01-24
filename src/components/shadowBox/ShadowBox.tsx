import React from 'react';
import './ShadowBox.scss';

type ShadowBoxProps = {
  children: any,
}

const ShadowBox = ({children}: ShadowBoxProps) => {
  return <div className="shadow-box">{children}</div>;
};

export default ShadowBox;
