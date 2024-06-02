import { initializeApp } from 'firebase/app'

const firebaseConfig = {
      apiKey: "AIzaSyACQCEbGGkFLra0S-PQB1FyoQCSzJ_k6iE",
  authDomain: "fir-tutorial-8b83e.firebaseapp.com",
  projectId: "fir-tutorial-8b83e",
  storageBucket: "fir-tutorial-8b83e.appspot.com",
  messagingSenderId: "154291836076",
  appId: "1:154291836076:web:931a15f0cbeb276fb53b09",
  measurementId: "G-R5L0MXNKMJ"
}   

const app = initializeApp(firebaseConfig);
export default app