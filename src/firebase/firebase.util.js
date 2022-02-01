import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';
import { getAnalytics } from "firebase/analytics";

const config  = {
    apiKey: "AIzaSyCBz3z0D1_4k65VxtwX77TFJYzdP5jeX_g",
    authDomain: "crwn-db-e46b7ddsad.firebaseapp.com",
    projectId: "crwn-db-e46b7ddsad",
    storageBucket: "crwn-db-e46b7ddsad.appspot.com",
    messagingSenderId: "57625454634",
    appId: "1:57625454634:web:f3ab01205ba4aee00a7b53",
    measurementId: "G-9VP98SSLRZ"
  };

  export const createUserProfileDocument = async (userAuth, additionalData) => {
      if(!userAuth) return;

      const userRef = firestore.doc(`users/${userAuth.uid}`);

      const snapShot = await userRef.get();

      if(!snapShot.exists){
        const { displayName, email } = userAuth;
        const createdAt = new Date();

        try{
          await userRef.set({
            displayName,
            email,
            createdAt,
            ...additionalData
          })
        } catch(error){
          console.log('error creating user', error.message);
        }
      }
      return userRef
  };



  const app = firebase.initializeApp(config);
  // const analytics = getAnalytics(app);

  export const auth = firebase.auth();
  export const firestore = firebase.firestore();

  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({ prompt: 'select_account' });
  export const signInWithGoogle = () => auth.signInWithPopup(provider);

  export default firebase;