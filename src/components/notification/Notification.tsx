import React, { useState, useEffect } from 'react';
import './Notification.scss';
import { subscribeToQuiz } from '../../queries/listeners';

const NOTIFICATION_DURATION: number = 5000;

const Notification = () => {
  const [visible, show] = useState(false);
  const [message, setMessage] = useState('');

  subscribeToQuiz(setMessage);

  useEffect(() => {
    if (message) {
      show(true);

      setTimeout(() => {
        show(false);
        setMessage('');
      }, NOTIFICATION_DURATION);
    } 
  }, [message]);

  return (
    <div className={`notification ${visible ? 'show' : 'hide'}`}>
      <img src="assets/avatar.png" alt="" />
      <div className="msg">Blaz V. je rešil kviz {message}</div>{' '}
    </div>
  );
};

export default Notification;
