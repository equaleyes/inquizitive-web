import React, { useState, useEffect } from 'react';
import './Notification.scss';

const NOTIFICATION_DURATION: number = 5000;
const MESSAGE: string = 'Blaz ';


const Notification = () => {
  const [visible, show] = useState(false);
  const [message, setMessage] = useState('');

  useEffect(() => {
    show(true);

    setTimeout(() => {
      show(false);
    }, NOTIFICATION_DURATION);
  }, [message]);

  return <div className={`notification ${visible ? 'show' : 'hide'}`}>{MESSAGE}</div>;
};

export default Notification;
