import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: 'AIzaSyCbkfFYLla-yIpueffJ5Pt0uUitC6bwTYU',
  authDomain: 'fir-react-1d41c.firebaseapp.com',
  projectId: 'fir-react-1d41c',
  storageBucket: 'fir-react-1d41c.appspot.com',
  messagingSenderId: '336877542023',
  appId: '1:336877542023:web:158cd8b73d56afabcbf622',
  measurementId: 'G-C2DBH92W8W',
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
