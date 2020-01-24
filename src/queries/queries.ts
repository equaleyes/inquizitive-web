import { fstore } from '../services/ApiService';

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
