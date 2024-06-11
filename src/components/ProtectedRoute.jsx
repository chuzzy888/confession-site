import React from 'react';
import { Navigate } from 'react-router-dom';
import { auth } from '../firebaseConfig';
import { useAuthState } from 'react-firebase-hooks/auth';


function ProtectedRoute({ children }) {
  const [user, loading, error] = useAuthState(auth);

  if (loading) {
    return <div className='h-screen flex justify-center items-center bg-black'>
      <div class="loader">
        <span class="bar"></span>
        <span class="bar"></span>
        <span class="bar"></span>
      </div>
    </div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  if (!user) {
    return <Navigate to="/login" />;
  }

  return children;
}

export default ProtectedRoute;
