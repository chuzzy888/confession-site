import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { UserContext } from "../App";
import { auth } from "../firebaseConfig";
import { signOut } from "firebase/auth";
import { TbLogout2 } from "react-icons/tb";
import { MdAccountCircle } from "react-icons/md";
import lg from "../assets/lg.png";

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
    <div className="bg-zinc-100 md:p-4 flex flex-col items-center sticky top-0  shadow-xl md:shadow-none">
      <header className="w-full  flex justify-between items-center p-2 md:h-10  rounded sm:p-4  ">
        <div className="text-2xl font-bold ">
          <Link to="/" className="text-black ">
            <img src={lg} alt="" className="md:h-20 h-12" />
          </Link>
        </div>
        <nav className="flex space-x-4 md:block hidden">
          <Link
            to="/"
            className="text-black  underline hover:text-green-700 decoration-solid"
          >
            Home
          </Link>
          <Link
            to="/confess"
            className="text-black  hover:underline hover:text-blue-900"
          >
            Confess
          </Link>
          <Link
            to="/confessions"
            className="text-black  hover:underline hover:text-blue-900"
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
                className="ml-4 py-1 px-2 bg-black text-white rounded hover:bg-red-500  "
              >
                <TbLogout2 />
              </button>
            </>
          ) : (
            <Link to="/login">
              <MdAccountCircle className="text-4xl mx-4" />
            </Link>
          )}
        </div>
      </header>
    </div>
  );
}

export default Navbar;
