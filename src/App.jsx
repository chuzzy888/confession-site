import React, { useState, useEffect, createContext } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { collection, addDoc, getDocs } from 'firebase/firestore';
import { onAuthStateChanged } from 'firebase/auth';
import { db, auth } from './firebaseConfig';
import Homepage from './pages/Homepage';
import Login from './pages/Login';
import SignUp from './pages/SignUp';
import ConfessForm from './components/ConfessForm';
import ConfessionList from './components/ConfessionList';
import ProtectedRoute from './components/ProtectedRoute';
import './App.css';

export const UserContext = createContext();

function App() {
  const [confessions, setConfessions] = useState([]);
  const [user, setUser] = useState(JSON.parse(localStorage.getItem('user')) || null);

  useEffect(() => {
    const fetchConfessions = async () => {
      const querySnapshot = await getDocs(collection(db, 'confessions'));
      const confessionsList = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
      setConfessions(confessionsList);
    };
    fetchConfessions();
  }, []);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const userData = { name: user.displayName, email: user.email };
        setUser(userData);
        localStorage.setItem('user', JSON.stringify(userData));
      } else {
        setUser(null);
        localStorage.removeItem('user');
      }
    });

    return () => unsubscribe();
  }, []);

  const addConfession = async (newConfession) => {
    try {
      const docRef = await addDoc(collection(db, 'confessions'), newConfession);
      setConfessions([...confessions, { id: docRef.id, ...newConfession }]);
    } catch (error) {
      console.error('Error adding confession:', error);
    }
  };

  return (
    <UserContext.Provider value={{ user, setUser }}>
      <Router>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          <Route
            path="/confess"
            element={
              <ProtectedRoute>
                <ConfessForm addConfession={addConfession} />
              </ProtectedRoute>
            }
          />
          <Route
            path="/confessions"
            element={
              <ProtectedRoute>
                <ConfessionList confessions={confessions} />
              </ProtectedRoute>
            }
          />
        </Routes>
      </Router>
    </UserContext.Provider>
  );
}

export default App;
