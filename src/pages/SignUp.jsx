import React, { useState, useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { auth } from '../firebaseConfig';
import { createUserWithEmailAndPassword, updateProfile } from 'firebase/auth';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { UserContext } from '../App';

function SignUp() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const navigate = useNavigate();
  const { setUser } = useContext(UserContext);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;
      await updateProfile(user, { displayName: name }); 
      const userData = { name, email: user.email };
      setUser(userData);
      localStorage.setItem('user', JSON.stringify(userData));
      toast.success('Sign up successful!');
      setTimeout(() => {
        navigate('/');
      }, 2000);
    } catch (error) {
      toast.error('Error signing up: ' + error.message);
    }
  };

  return (
    <div>
      <div className="min-h-screen flex  items-center justify-center bg-zinc-100 p-5">
        <div className="flex md:flex-row flex-col bg-white rounded-lg shadow-md overflow-hidden w-full max-w-4xl">
          <div className=" md:w-1/2 bg-zinc-100 flex items-center justify-center">
            <img
              src="https://images.pexels.com/photos/5997003/pexels-photo-5997003.jpeg?auto=compress&cs=tinysrgb&w=600"
              alt="Placeholder"
              className="object-cover h-full w-full"
            />
          </div>
          <div className="w-full md:w-1/2 p-6 sm:p-12">
            <h2 className="text-2xl font-bold mb-2">Sign up for Confess</h2>
            <p className="mb-6">Share your secrets anonymously.</p>
            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <label className="block text-sm font-bold mb-1" htmlFor="name">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full p-3 border rounded bg-zinc-50 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                />
              </div>
              <div className="mb-4">
                <label className="block text-sm font-bold mb-1" htmlFor="email">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full p-3 border rounded bg-zinc-50 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                />
              </div>
              <div className="mb-4">
                <label className="block text-sm font-bold mb-1" htmlFor="password">
                  Password
                </label>
                <input
                  type="password"
                  id="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full p-3 border rounded bg-zinc-50 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                />
              </div>
              <button
                type="submit"
                className="w-full py-3 bg-black text-white font-semibold rounded hover:bg-zinc-800">
                Sign up
              </button>
              <p className='p-2'>Already have an account? <Link to='/login'><span className='underline text-blue-500 text-sm'>Login</span></Link></p>
            </form>
          </div>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
}

export default SignUp;
