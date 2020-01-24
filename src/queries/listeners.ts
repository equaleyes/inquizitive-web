import { fstore } from '../services/ApiService';
import { Question } from '../pages/createQuiz/CreateQuiz';

export const subscribeToQuiz = async (handler: any) => {
  await fstore.collection('quizzes').onSnapshot(querySnapshot => {
    querySnapshot.docChanges().forEach(change => {
      if (change.type === 'modified') {
        handler(change.doc.data().name);
      }
    });
  });
};
