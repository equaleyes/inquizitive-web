import React, { useState } from 'react';
import BoxLayout from '../../components/boxLayout/BoxLayout';
import Input from '../../components/input/Input';
import SubmitButton from '../../components/submitButton/SubmitButton';
import './Login.scss';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const login = () => {
    console.log(username, password);
  };

  return (
    <div className="login">
      <BoxLayout>
        <img src="assets/logo.png" />
        <div className="title">PRIJAVA</div>
        <form>
          <Input placeholder="Uporabnisko ime" type="text" onInputChange={setUsername} />
          <Input placeholder="Geslo" type="password" onInputChange={setPassword} />
          <SubmitButton onSubmit={login}>Prijava</SubmitButton>
        </form>
        <p className="subtle">Pozabljeno geslo</p>
      </BoxLayout>
    </div>
  );
};

export default Login;
