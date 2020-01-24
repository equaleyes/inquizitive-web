import React, { useState } from 'react';
import './CreateQuiz.scss';
import Input from '../../components/input/Input';
import ShadowBox from '../../components/shadowBox/ShadowBox';
import Button from '../../components/button/Button';
import SubmitButton from '../../components/submitButton/SubmitButton';

import { createQuiz } from '../../queries/queries';
import { create } from 'domain';
import { subscribeToQuiz } from '../../queries/listeners';

export interface Question {
  question: string;
  answer: number;
  options: string[];
}

const CreateQuiz = () => {
  const today: Date = new Date();
  const futureDaye: Date = new Date(today.getFullYear(), today.getMonth(), today.getDate());

  const [title, setTitle] = useState('');
  const [startDate, setStartDate] = useState(today);
  const [endDate, setEndDate] = useState(futureDaye);
  const [currentAnswer, setCurrentAnswer] = useState<string>('');

  const newQuestion: Question = {
    question: '',
    answer: 1,
    options: [''],
  };

  const [questions, setQuestions] = useState<Question[]>([newQuestion]);

  const convertToDateValue = (date: Date): string => {
    const month: number = date.getMonth() + 1;
    return `${date.getFullYear()}-${month < 10 ? `0${month}` : month}-${date.getDate()}`;
  };

  const handleDateChange = (event: any) => {
    event.persist();

    return event.target.valueAsDate as Date;
  };

  const addQuestion = () => {
    setQuestions([...questions, newQuestion]);
  };

  const updateQuestion = (questionIndex: number, question: string) => {
    const currentQuestions = [...questions];
    currentQuestions[questionIndex].question = question;

    setQuestions(currentQuestions);
  };

  const addAnswer = (questionIndex: number) => {
    const currentQuestions = [...questions];
    currentQuestions[questionIndex].options.push('');

    setQuestions(currentQuestions);
  };

  /**
   * Update selected answer on input change
   * @param questionIndex index of answer
   * @param answer answer
   */
  const updateAnswer = (questionIndex: number, answer: string) => {
    const currentQuestions = [...questions];
    currentQuestions[questionIndex].options.push(answer);

    setQuestions(currentQuestions);
  };

  const renderAnswerInput = (question: Question, questionIndex: number) => {
    const handleSubmit = () => {
      updateAnswer(questionIndex, currentAnswer);

      setCurrentAnswer('');
    };

    const input = (
      <div className="inline">
        <Input placeholder="Vpiši odgovor" onInputChange={setCurrentAnswer} inline={true} />
        <Button onClick={handleSubmit}>
          <span>+</span> Dodaj odgovor
        </Button>
      </div>
    );

    const addBtn = (
      <div className="subtle action" onClick={() => addAnswer(questionIndex)}>
        <b>+</b> dodaj odgovor
      </div>
    );

    return question.options.length === 0 || question.options[question.options.length - 1] === '' ? input : addBtn;
  };

  const selectAnswer = (questionIndex: number, answer: number) => {
    const currentQuestions = [...questions];
    currentQuestions[questionIndex].answer = answer;

    setQuestions(currentQuestions);
  };

  const renderAnswers = (question: Question, questionIndex: number) => {
    return question.options.map((option, index) => {
      return option ? (
        <div key={index} className={`answer ${index === question.answer ? 'selected' : ''}`}>
          <span onClick={() => selectAnswer(questionIndex, index)}>
            <img src={`assets/${index === question.answer ? 'checked' : 'unchecked'}.svg`} />
          </span>
          {option}
        </div>
      ) : (
        ''
      );
    });
  };

  const renderQuestions = () => {
    return questions.map((question, index) => {
      return (
        <ShadowBox key={index}>
          <div className="margin-bottom">{index + 1}. Vprašanje</div>
          <div className="left-margin">
            <Input onInputChange={e => updateQuestion(index, e)} placeholder="Vpiši vprašanje" inline={true} />
          </div>
          <div className="margin-top margin-bottom">Odgovori</div>
          <div className="left-margin">
            {renderAnswers(question, index)}
            {renderAnswerInput(question, index)}
          </div>
        </ShadowBox>
      );
    });
  };

  const submit = () => {
    console.log('quiz title', title);
    console.log('start date', startDate);
    console.log('end date', endDate);
    console.log('questions', questions);
    console.log('___________________');

    createQuiz(title, startDate, endDate, questions);
  };

  return (
    <div className="create-quiz page">
      <ShadowBox>
        <h2>Ustvari nov kviz</h2>
        <div className="inline">
          Ime kviza:{' '}
          <div className="left-margin">
            <Input onInputChange={setTitle} inline={true} />
          </div>
        </div>
        <hr />
        <div className="inline">
          <b className="font-s">Datum objave </b>
          <input
            type="date"
            defaultValue={convertToDateValue(startDate)}
            onChange={e => setStartDate(handleDateChange(e))}
          />
          <b className="font-s">Datum poteka </b>
          <input
            type="date"
            defaultValue={convertToDateValue(endDate)}
            onChange={e => setEndDate(handleDateChange(e))}
          />
        </div>
        <hr />
        {renderQuestions()}
        <ShadowBox>
          <div className="add-btn" onClick={addQuestion}>
            <span>+</span> Dodaj vprašanje
          </div>
        </ShadowBox>
        <SubmitButton onSubmit={submit}>Shrani</SubmitButton>
      </ShadowBox>
    </div>
  );
};

export default CreateQuiz;
