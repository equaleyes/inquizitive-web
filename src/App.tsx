import React from 'react';
import './App.scss';
import Layout from './layout/Layout';

import { logIn } from './services/auth';
import { firestore } from 'firebase';
import { fstore } from './services/ApiService';

const App: React.FC = () => {
  return (
    <div className="App">
      <Layout />
    </div>
  );
};

export default App;
