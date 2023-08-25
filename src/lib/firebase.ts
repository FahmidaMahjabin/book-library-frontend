import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

// const firebaseConfig = {
//   apiKey: import.meta.env.VITE_apikey,
//   authDomain: import.meta.env.VITE_authDomain,
//   projectId: import.meta.env.VITE_projectId,
//   storageBucket: import.meta.env.VITE_storageBucket,
//   messagingSenderId: import.meta.env.VITE_messagingSenderId,
//   appId: import.meta.env.VITE_appId,
// };

const firebaseConfig = {
  apiKey: 'AIzaSyCIyDR0i15IQgFA2ojbGHg0cl_rsHbQxh4',
  projectId: 'book-worm-library-47636',
  authDomain: 'book-worm-library-47636.firebaseapp.com',
  storageBucket: 'book-worm-library-47636.appspot.com',
  appId: '1:354803315304:web:ff810e905a3b7cafa2c1dd',
};
console.log(firebaseConfig.apiKey);
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
