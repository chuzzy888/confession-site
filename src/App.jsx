import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { collection, addDoc, getDocs } from 'firebase/firestore';
import { db } from './firebaseConfig';
import Homepage from './pages/Homepage';
import Login from './pages/Login';
import SignUp from './pages/SignUp';
import ConfessForm from './components/ConfessForm';
import ConfessionList from './components/ConfessionList';
import ProtectedRoute from './components/ProtectedRoute';
import './App.css'

function App() {
  const [confessions, setConfessions] = useState([]);

  useEffect(() => {
    const fetchConfessions = async () => {
      const querySnapshot = await getDocs(collection(db, 'confessions'));
      const confessionsList = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
      setConfessions(confessionsList);
    };
    fetchConfessions();
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
  );
}

export default App;








