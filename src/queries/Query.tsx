import React, { useState } from 'react';
import { fstore } from '../services/ApiService';

const Query = () => {
  const [posta, setPosta] = useState();
  const query = async () => {
    let postaQuizz = await fstore
      .collection('quizzes')
      .doc('pozarna_varnost_1')
      .get();

    setPosta(postaQuizz.data());

    if (posta && posta.startDate && posta.startDate.seconds) {
      console.log(posta.startDate);
    }
    console.log(posta);
  };

  return (
    <div>
    </div>
  );
};

export default Query;
