import {
  createUserWithEmailAndPassword,
  getAuth,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from 'firebase/auth';
import { useEffect, useState } from 'react';
import initAuth from '../firebase/firebase.init';

initAuth();

const useFirebase = () => {
  const auth = getAuth();
  const [user, setUser] = useState({});
  const [errors, setErrors] = useState('');
  const [isLoading, setIsLoading] = useState(true);

  // adding displayName
  const addUsername = (username) => {
    updateProfile(auth.currentUser, {
      displayName: username,
    })
      .then(() => {
        setErrors('');
      })
      .catch((error) => {
        setErrors(error.message);
      });
  };

  // signup using email & password
  const signUpWithEmail = (username, email, password) => {
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        console.log(user);
        setErrors('');
        addUsername(username);
      })
      .catch((error) => {
        console.log(error.message);
        setErrors(error.message);
      });
  };

  // sign in using email & password
  const signInUsingEmail = (email, password) => {
    setIsLoading(true);
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        console.log(user);
        setErrors('');
      })
      .catch((error) => {
        console.log(error.message);
        setErrors(error.message);
      })
      .finally(() => setIsLoading(false));
  };

  // sign in using google
  const signInUsingGoogle = () => {
    setIsLoading(true);
    const googleProvider = new GoogleAuthProvider();
    signInWithPopup(auth, googleProvider)
      .then((result) => {
        setUser(result.user);
        setErrors('');
        console.log(result.user);
      })
      .catch((error) => {
        console.log(error.message);
        setErrors(error.message);
      })
      .finally(() => setIsLoading(false));
  };

  // observer
  useEffect(() => {
    const unsubscribed = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
      } else {
        setUser({});
      }
      setIsLoading(false);
    });
    return () => unsubscribed;
  }, [auth]);

  // logout
  const logOut = () => {
    setIsLoading(true);
    signOut(auth)
      .then(() => {
        setErrors('');
      })
      .catch((error) => {
        setErrors(error.message);
      })
      .finally(() => setIsLoading(false));
  };

  return {
    user,
    errors,
    isLoading,
    setError: setErrors,
    signInUsingGoogle,
    signUpWithEmail,
    signInUsingEmail,
    logOut,
  };
};

export default useFirebase;
