import { fstore } from '../services/ApiService';
import { cursorTo } from 'readline';
import { Question } from '../pages/createQuiz/CreateQuiz';
import { start } from 'repl';

import Timestamp from 'firebase/firestore';

const getQuiz = async (id: string = 'pozarna_varnost_1') => {
  let postaQuizz = await fstore
    .collection('quizzes')
    .doc(id)
    .get();
};

const assignListener = async (id: string, callback: (doc: any) => any) => {
  await fstore
    .collection('quizzes')
    .doc('id')
    .onSnapshot({ includeMetadataChanges: true }, doc => {
      return callback(doc);
    });
};

let massageData = (title: string, startDate: Date, endDate: Date, question: Array<Question>) => {
  let obj = {} as any;
  obj.name = title;
  obj.startDate = startDate;
  obj.endDate = endDate;
  obj.response = 0;
  obj.score = question.length;

  question.forEach((q, ind) => {
    title = `vprasanje${ind + 1}`;
    obj[title] = [];
    obj[title].push({ vprasanje: q.question });

    let options = q.options
      .filter(option => {
        if (option === '') {
          return false;
        }
        return true;
      })
      .map((option, ind) => {
        return {
          jePravi: q.answer === ind,
          odgovor: option,
        };
      })
      .forEach(item => obj[title].push(item));
  });
  return obj;
};

const create = async (title: string, startDate: Date, endDate: Date, question: Array<Question>) => {
  const quizName = encodeURIComponent(title);
  await fstore
    .collection('quizzes')
    .doc(quizName)
    .set(massageData(title, startDate, endDate, question));
};

export const createQuiz = create;
