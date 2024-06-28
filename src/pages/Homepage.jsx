// import React from "react";
// import { BiLike } from "react-icons/bi";
// import { AiOutlineDislike } from "react-icons/ai";
// import { Link } from "react-router-dom";
// import Navbar from "../components/Navbar";

// function Homepage() {
//   return (
//     <div>
//       <Navbar />
//       <div className="min-h-screen md:p-4 p-2 flex flex-col items-center dark:bg-zinc-900">
//         <section className="w-full max-w-3xl bg-white dark:bg-zinc-800 rounded shadow-md my-4 p-4 sm:p-6 ">
//           <img
//             className="w-full h-64 object-cover rounded"
//             src="https://images.pexels.com/photos/5206850/pexels-photo-5206850.jpeg?auto=compress&cs=tinysrgb&w=600"
//             alt="Confess and be heard"
//           />
//           <div className="text-center mt-4 sm:mt-6">
//             <h1 className="text-2xl font-bold dark:text-white">
//               Confess and be heard
//             </h1>
//             <p className="text-zinc-600 dark:text-zinc-400 mt-2">
//               Confess your deepest secrets anonymously, and connect with people
//               who understand. Become a listener and help others feel less alone.
//             </p>
//             <Link to={"/confess"}>
//               <button className="mt-4 bg-blue-500 text-white px-6 py-3 rounded-lg">
//                 Make a confession
//               </button>
//             </Link>
//           </div>
//         </section>

//         {/* <footer className="w-full max-w-3xl bg-white dark:bg-zinc-800 rounded shadow-md my-4 p-4 sm:p-6 text-center">
//           <Link to={"/confessions"}>
//             <button className="bg-blue-500 text-white px-6 py-3 rounded-lg">
//               View secrets
//             </button>
//           </Link>
//         </footer> */}
//       </div>
//     </div>
//   );
// }

// export default Homepage;

import React, { useState } from "react";
import { BiLike, BiChevronDown, BiChevronUp } from "react-icons/bi";
import { RiArrowUpSLine } from "react-icons/ri";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";

function Homepage() {
  const [showSecrets, setShowSecrets] = useState(false);

  const toggleSecrets = () => {
    setShowSecrets(!showSecrets);
  };

  return (
    <div>
      <Navbar />
      <div className="min-h-screen md:p-4 p-2 flex flex-col items-center dark:bg-zinc-900">
        <section className="w-full max-w-3xl bg-white dark:bg-zinc-800 rounded shadow-md my-4 p-4 sm:p-6 ">
          <img
            className="w-full h-64 object-cover rounded"
            src="https://images.pexels.com/photos/5206850/pexels-photo-5206850.jpeg?auto=compress&cs=tinysrgb&w=600"
            alt="Confess and be heard"
          />
          <div className="text-center mt-4 sm:mt-6">
            <h1 className="text-2xl font-bold dark:text-white">
              Confess and be heard
            </h1>
            <p className="text-zinc-600 dark:text-zinc-400 mt-2">
              Confess your deepest secrets anonymously, and connect with people
              who understand. Become a listener and help others feel less alone.
            </p>
            <Link to={"/confess"}>
              <button className="mt-4 bg-blue-500 text-white px-6 py-3 rounded-lg">
                Make a confession
              </button>
            </Link>
          </div>
        </section>

        <div className="w-full max-w-3xl rounded shadow-md my-4 p-4 sm:p-6 text-center md:hidden flex justify-center items-center">
          <button
            className="flex items-center justify-center bg-black text-white p-2 px-2 rounded-full h-10 w-10"
            onClick={toggleSecrets}
          >
            {showSecrets ? "" : ""}
            {showSecrets ? (
              <BiChevronUp className="text-2xl font-bold" />
            ) : (
              <BiChevronDown className="text-2xl font-bold" />
            )}
          </button>
          {showSecrets && (
            <div>
              <Link to={"/confessions"}>
                <button className="mt-4 text-black underline  px-4 m-2  rounded-lg w-full">
                  View secrets
                </button>
              </Link>
              <Link to={"#"}>
                <button className="mt-4 text-blue-600 underline  px-4 rounded-lg w-full">
                  Speak with a counsellor
                </button>
              </Link>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Homepage;
