import * as firebase from 'firebase/app';
import { fireauth as fireAuth } from './ApiService';

export const logIn = (email: string, password: string) => {
  return fireAuth.setPersistence(firebase.auth.Auth.Persistence.LOCAL).then(() => {
    return fireAuth.signInWithEmailAndPassword(email, password).catch(function(error) {
      var errorCode = error.code;
      var errorMessage = error.message;

      console.log(errorCode, errorMessage);
    });
  });
};

export const logOut = (handler: () => void) => {
  return fireAuth
    .signOut()
    .then(() => {
      handler();
    })
    .catch(function(error) {
      // An error happened
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
