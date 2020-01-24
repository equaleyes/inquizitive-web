import React, { useState, useEffect } from 'react';
import './ProgressBar.scss';

export enum ProgressBarColor {
  Dark = 'dark',
  Light = 'light',
}

type ProgressBarProps = {
  value: number;
  color?: ProgressBarColor;
}

const ProgressBar = ({value, color}: ProgressBarProps) => {
  const [animated, animate] = useState(false);

  useEffect(() => {
    if (animated) {
      return;
    }

    setTimeout(() => {
      animate(true);
    }, 500);
  }, [value]);

  return (
    <div className={`progress-bar ${color || ProgressBarColor.Dark}`}>
      <div className="progress" style={{ width: `${animated ? value : 0}%` }}>
        <span>{value}%</span>
      </div>
    </div>
  );
};
export default ProgressBar;
