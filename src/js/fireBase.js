import { initializeApp } from "firebase/app";
import {
  getStorage,
  ref as StorageRef,
  uploadBytes,
  getDownloadURL,
} from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyBsY2uov9VlzXUGX2Enog5ztW7WZBlknss",
  authDomain: "qqqq-144ee.firebaseapp.com",
  projectId: "qqqq-144ee",
  storageBucket: "qqqq-144ee.appspot.com",
  messagingSenderId: "418161449032",
  appId: "1:418161449032:web:ba6d9b4345f1a910f2a07d",
};

const app = initializeApp(firebaseConfig);
const storage = getStorage();

export default {
  app,
  storage,
  StorageRef,
  uploadBytes,
  getDownloadURL,
};
