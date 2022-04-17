//NPM package
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

//Properties
const firebaseConfig = {
  apiKey: "AIzaSyAj46l1wVkYo5VwXu2uiJ1n7Xm9RREKUac",
  authDomain: "bbq-restaurant-react.firebaseapp.com",
  projectId: "bbq-restaurant-react",
  storageBucket: "bbq-restaurant-react.appspot.com",
  messagingSenderId: "771388085139",
  appId: "1:771388085139:web:56c503c43d786f87ae4e66",
};

const app = initializeApp(firebaseConfig);
export const fireStore = getFirestore(app);
