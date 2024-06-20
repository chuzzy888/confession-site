import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { UserContext } from "../App";
import { auth } from "../firebaseConfig";
import { signOut } from "firebase/auth";

function Navbar() {
  const { user, setUser } = useContext(UserContext);

  const getInitials = (name) => {
    if (!name) return "";
    const nameParts = name.split(" ");
    const initials = nameParts.map((part) => part[0]).join("");
    return initials.toUpperCase();
  };

  const handleLogout = async () => {
    try {
      await signOut(auth);
      setUser(null);
      localStorage.removeItem("user");
    } catch (error) {
      console.error("Error signing out:", error);
    }
  };

  return (
    <div className="bg-zinc-100 md:p-4 flex flex-col items-center dark:bg-zinc-900 sticky top-0 z-50 shadow-xl md:shadow-none">
      <header className="w-full max-w-3xl flex justify-between items-center p-2 bg-white dark:bg-zinc-800 rounded sm:p-4  ">
        <div className="text-2xl font-bold">
          <Link to="/" className="text-black dark:text-white">
            Confess.io
          </Link>
        </div>
        <nav className="flex space-x-4 md:block hidden">
          <Link
            to="/"
            className="text-black dark:text-white underline hover:text-green-700 decoration-solid"
          >
            Home
          </Link>
          <Link
            to="/confess"
            className="text-black dark:text-white hover:underline hover:text-blue-900"
          >
            Confess
          </Link>
          <Link
            to="/confessions"
            className="text-black dark:text-white hover:underline hover:text-blue-900"
          >
            Confessions
          </Link>
        </nav>
        <div className="flex items-center">
          {user ? (
            <>
              <div className="w-8 h-8 rounded-full bg-indigo-500 text-white flex items-center justify-center font-bold">
                {getInitials(user.name)}
              </div>
              <button
                onClick={handleLogout}
                className="ml-4 py-2 px-4 bg-black text-white rounded hover:bg-zinc-800 dark:bg-zinc-600 dark:hover:bg-zinc-700"
              >
                Logout
              </button>
            </>
          ) : (
            <Link
              to="/login"
              className="py-2 px-4 bg-black text-white rounded hover:bg-zinc-800 dark:bg-zinc-600 dark:hover:bg-zinc-700"
            >
              Login
            </Link>
          )}
        </div>
      </header>
    </div>
  );
}

export default Navbar;
