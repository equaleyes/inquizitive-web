import React, { useState } from 'react';
import BoxLayout from '../../components/boxLayout/BoxLayout';
import Input from '../../components/input/Input';
import SubmitButton from '../../components/submitButton/SubmitButton';
import './Login.scss';
import { logIn } from '../../services/auth';
import { useHistory } from 'react-router-dom';

const Login = () => {
  const history = useHistory();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [loader, setLoader] = useState(false);

  const login = async () => {
    setLoader(true);

    await logIn(username, password);

    setLoader(false);

    history.push('/home');
  };

  return (
    <div className="login">
      <BoxLayout border={true}>
        <img src="assets/logo.png" alt="" />
        <div className="title">PRIJAVA</div>
        <form>
          <Input placeholder="Email" type="text" onInputChange={setUsername} />
          <Input placeholder="Geslo" type="password" onInputChange={setPassword} />
          <SubmitButton onSubmit={login} loading={loader}>
            Prijava
          </SubmitButton>
        </form>
        <p className="subtle">Pozabljeno geslo</p>
      </BoxLayout>
    </div>
  );
};

export default Login;
