import React, { useState } from 'react';
import { fstore } from '../services/ApiService';
import SubmitButton from '../components/submitButton/SubmitButton';

const Query = () => {
  const [posta, setPosta] = useState();
  const [question, setQuestion] = useState();
  const query = async () => {
    let postaQuizz = await fstore
      .collection('quizzes')
      .doc('pozarna_varnost_1')
      .get();

    await fstore
      .collection('quizzes')
      .doc('question-name')
      .onSnapshot({ includeMetadataChanges: true }, doc => {
        setQuestion(doc.data());
      });

    setPosta(postaQuizz.data());
  };

  const createQuiz = async (question: string = 'question-name') => {
    const questionName = encodeURIComponent(question);
    await fstore
      .collection('quizzes')
      .doc(questionName)
      .set({ name: question });
  };

  return (
    <div>
      {posta && posta.startDate ? posta.startDate.seconds : ''}
      {question && question.name ? question.name : ''}
      <SubmitButton onSubmit={query}>Prijava</SubmitButton>
    </div>
  );
};

export default Query;
