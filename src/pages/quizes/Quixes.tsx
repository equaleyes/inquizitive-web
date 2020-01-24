import React from 'react';
import { Link } from 'react-router-dom';
import './Quizes.scss';
import ShadowBox from '../../components/shadowBox/ShadowBox';
import Button from '../../components/button/Button';
import CompletedQuizes from './components/CompletedQuizes';
import ActiveQuizes from './components/ActiveQuizes';

const Quizes = () => {
  return (
    <div className="quizes page">
      <div className="first">
        <ShadowBox>
          <h2>Kvizi</h2>
          <Link to="/create-quiz">
            <Button>
              <span>+</span>Dodaj nov
            </Button>
          </Link>
          <Button>Zaključi kviz</Button>
        </ShadowBox>
      </div>

      <ActiveQuizes />
      <CompletedQuizes />
    </div>
  );
};

export default Quizes;
