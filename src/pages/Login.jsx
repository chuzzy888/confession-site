import React, { useState, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { auth } from "../firebaseConfig";
import { signInWithEmailAndPassword } from "firebase/auth";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { UserContext } from "../App";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const { setUser } = useContext(UserContext);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const userCredential = await signInWithEmailAndPassword(
        auth,
        email,
        password
      );
      const user = userCredential.user;
      const userData = { name: user.displayName, email: user.email };
      setUser(userData);
      localStorage.setItem("user", JSON.stringify(userData));
      toast.success("Login successful!");
      setTimeout(() => {
        navigate("/");
      }, 2000);
    } catch (error) {
      toast.error("Invalid Credentials: ");
    }
  };

  return (
    <div>
      <div className="min-h-screen flex flex-col md:flex-row">
        <div
          className="flex-1 bg-gradient-to-r from-zinc-300 to-zinc-400 flex items-center justify-center p-10 bg-cover bg-center"
          style={{
            backgroundImage:
              "url('https://images.pexels.com/photos/5997003/pexels-photo-5997003.jpeg?auto=compress&cs=tinysrgb&w=600')",
          }}
        >
          <div className="text-center max-w-md">
            <h1 className="text-3xl font-bold text-white mb-4">
              Confess Your Secrets
            </h1>
            <p className="text-white mb-8">
              Share your deepest, darkest secrets anonymously on our platform.
              Find solace in the community and start your journey to healing.
            </p>
          </div>
        </div>

        <div className="flex-1 flex items-center justify-center p-10">
          <div className="max-w-md w-full">
            <h2 className="text-2xl font-bold mb-6">Sign in to your account</h2>
            <p className="mb-6">
              <Link to={"/signup"} className="text-blue-500">
                Or start your confession
              </Link>
            </p>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-zinc-700 "
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="mt-1 block w-full px-3 py-2 border border-zinc-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm "
                />
              </div>
              <div>
                <label
                  htmlFor="password"
                  className="block text-sm font-medium text-zinc-700 "
                >
                  Password
                </label>
                <input
                  type="password"
                  id="password"
                  name="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="mt-1 block w-full px-3 py-2 border border-zinc-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm "
                />
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <input
                    id="remember_me"
                    name="remember_me"
                    type="checkbox"
                    className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-zinc-300 rounded "
                  />
                  <label
                    htmlFor="remember_me"
                    className="ml-2 block text-sm text-zinc-900 "
                  >
                    Remember me
                  </label>
                </div>
                <div className="text-sm">
                  <a
                    href="#"
                    className="font-medium text-indigo-600 hover:text-indigo-500 "
                  >
                    Forgot your password?
                  </a>
                </div>
              </div>
              <div>
                <button
                  type="submit"
                  className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-black hover:bg-zinc-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 "
                >
                  Sign in
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
}

export default Login;
