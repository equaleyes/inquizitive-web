import * as firebase from 'firebase/app';
import { fireauth } from './ApiService';

export const logIn = (email: string, password: string) => {
  return fireauth.setPersistence(firebase.auth.Auth.Persistence.LOCAL).then(() => {
    return fireauth.signInWithEmailAndPassword(email, password).catch(function(error) {
      var errorCode = error.code;
      var errorMessage = error.message;

      console.log(errorCode, errorMessage);
    });
  });
};

// logIn('matej.stavanja@equaleyes.com', 'matej.5').then(res => {
//   console.log('resr', res);
//   console.log(fstore);

//   const f = fstore
//     .collection('companies')
//     .doc('posta')
//     .get();
//   f.then(doc => {
//     if (!doc.exists) {
//       console.log('No such document!');
//     } else {
//       console.log('Document data:', doc.data());
//     }
//   }).catch(err => {
//     console.log('Error getting document', err);
//   });
// });
