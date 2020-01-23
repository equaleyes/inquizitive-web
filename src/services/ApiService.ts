// Firebase App (the core Firebase SDK) is always required and must be listed first
import * as firebase from 'firebase/app';

// If you enabled Analytics in your project, add the Firebase SDK for Analytics
import 'firebase/analytics';

// Add the Firebase products that you want to use
import 'firebase/auth';
import 'firebase/firestore';

// TODO: Replace the following with your app's Firebase project configuration
const firebaseConfig = {
  apiKey: 'AIzaSyDBlkGrpqmii3KQjm-_qlDIIlCqb6TUdIc',
  authDomain: 'mlms-backend.firebaseapp.com',
  databaseURL: 'https://mlms-backend.firebaseio.com',
  projectId: 'mlms-backend',
  storageBucket: 'mlms-backend.appspot.com',
  messagingSenderId: '102311838892',
  appId: '1:102311838892:web:24f8ef5a9c485da2ca4b09',
  measurementId: 'G-MJ52R4LBB6',
};

// Initialize Firebase
const fir = firebase.initializeApp(firebaseConfig);

export const fstore = fir.firestore();
export const fireauth = fir.auth();
