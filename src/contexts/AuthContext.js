import React, { useContext, useState, useEffect } from 'react';
import app, { auth } from '../config/firebase';

import methods from '../utils/methods';

const AuthContext = React.createContext();

export function useAuth() {
  return useContext(AuthContext);
}

export function AuthProvider({ children }) {
  const [currentUser, setCurrentUser] = useState();
  const [loading, setLoading] = useState(true);

  async function signup(email, password) {
    let cred = await auth.createUserWithEmailAndPassword(email, password);
    const Users = app.firestore().collection('users');
    await Users.doc(cred.user.uid).set({
      name: methods.generateUsername(),
      toodos: [],
      createdAt: new Date(),
    });
  }

  async function anonymousSignup() {
    let cred = await auth.signInAnonymously();
    const Users = app.firestore().collection("users");
    await Users.doc(cred.user.uid).set({
      name: methods.generateUsername(),
      toodos: [],
      createdAt: new Date(),
    });
  }

  function login(email, password) {
    return auth.signInWithEmailAndPassword(email, password);
  }

  function logout() {
    return auth.signOut();
  }

  function resetPassword(email) {
    return auth.sendPasswordResetEmail(email);
  }

  function updateEmail(email) {
    return currentUser.updateEmail(email);
  }

  function updatePassword(password) {
    return currentUser.updatePassword(password);
  }

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      setCurrentUser(user);
      setLoading(false);
    });

    return unsubscribe;
  }, []);

  const value = {
    currentUser,
    login,
    signup,
    anonymousSignup,
    logout,
    resetPassword,
    updateEmail,
    updatePassword,
  };

  return (
    <AuthContext.Provider value={value}>
      {!loading && children}
    </AuthContext.Provider>
  );
}
