import React, { useState, useEffect } from "react";
import { db } from "../firebaseConfig";
import { collection, getDocs } from "firebase/firestore";
import { Link } from "react-router-dom";
import { BiLike } from "react-icons/bi";
import { AiOutlineDislike } from "react-icons/ai";

function ConfessionList() {
  const [confessions, setConfessions] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredConfessions, setFilteredConfessions] = useState([]);
  const confessionsPerPage = 6;

  useEffect(() => {
    const fetchConfessions = async () => {
      const confessionsCollection = collection(db, "confessions");
      const confessionSnapshot = await getDocs(confessionsCollection);
      const confessionList = confessionSnapshot.docs.map((doc) => {
        const data = doc.data();
        return {
          id: doc.id,
          ...data,
          timestamp: data.timestamp ? data.timestamp.toDate() : null,
        };
      });
      setConfessions(confessionList);
      setFilteredConfessions(confessionList);
    };

    fetchConfessions();
  }, []);

  useEffect(() => {
    const results = confessions.filter(
      (confession) =>
        confession.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        confession.confession.toLowerCase().includes(searchQuery.toLowerCase())
    );
    setFilteredConfessions(results);
    setCurrentPage(1);
  }, [searchQuery, confessions]);

  const indexOfLastConfession = currentPage * confessionsPerPage;
  const indexOfFirstConfession = indexOfLastConfession - confessionsPerPage;
  const currentConfessions = filteredConfessions.slice(
    indexOfFirstConfession,
    indexOfLastConfession
  );

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div className="container mx-auto p-4">
      <div className="flex flex-col md:flex-row items-center justify-between sticky top-0 z-50 p-4 bg-zinc-100 dark:bg-zinc-800 space-y-4 md:space-y-0">
        <div className="flex items-center space-x-4">
          <Link to={"/"}>
            <button className="flex items-center space-x-2 px-4 py-2 bg-black text-white rounded-md hover:bg-zinc-900 focus:outline-none focus:ring-2 focus:ring-offset-2 dark:bg-zinc-700">
              <svg
                undefinedhidden="true"
                alt="back-arrow"
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M15 19l-7-7 7-7"
                ></path>
              </svg>
              <span>Go Back</span>
            </button>
          </Link>
          <h1 className="text-xl font-semibold text-zinc-900 dark:text-white">
            Confessions
          </h1>
        </div>
        <div className="relative w-full md:w-auto ">
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-10 pr-4 py-2 border rounded-md bg-white dark:bg-zinc-700 placeholder-zinc-400 dark:placeholder-zinc-500 text-zinc-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
            placeholder="Search confessions..."
          />
          <svg
            undefinedhidden="true"
            alt="search-icon"
            className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-zinc-400 dark:text-zinc-500"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M21 21l-4.35-4.35M4.598 4.598a9.601 9.601 0 1113.56 13.56 9.601 9.601 0 01-13.56-13.56z"
            ></path>
          </svg>
        </div>
      </div>
      <hr className="p-2  " />

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {currentConfessions.length > 0 ? (
          currentConfessions.map((confession) => (
            <div
              key={confession.id}
              className="bg-white dark:bg-zinc-800 p-6 rounded-lg shadow-lg relative"
            >
              <span className="absolute top-2 right-2 px-3 py-1 bg-green-500 text-white text-xs font-semibold rounded-full">
                {confession.category}
              </span>
              <h2 className="text-xl font-semibold mb-4">
                "{confession.title}"
              </h2>
              <p className="mb-4 text-gray-700 dark:text-gray-300">
                {confession.confession}
              </p>
              <div className="flex items-center space-x-2 m-2">
                <button className="text-green-500">
                  <BiLike />
                </button>
                <button className="text-red-500">
                  <AiOutlineDislike />
                </button>
              </div>
              <hr className="p-1" />
              <div className="flex justify-between items-center">
                <p className="text-sm text-white  p-1 rounded-md dark:text-gray-400 bg-black">
                  {confession.anonymous ? "Anonymous" : "Known"}
                </p>
                <p className="text-sm text-gray-500 dark:text-gray-400 underline">
                  {confession.timestamp
                    ? new Date(confession.timestamp).toLocaleDateString()
                    : "No Date"}
                </p>
              </div>
            </div>
          ))
        ) : (
          <div className="col-span-full text-center text-gray-500 dark:text-gray-400">
            No search results found.
          </div>
        )}
      </div>
      <Pagination
        confessionsPerPage={confessionsPerPage}
        totalConfessions={filteredConfessions.length}
        currentPage={currentPage}
        paginate={paginate}
        setCurrentPage={setCurrentPage}
      />
    </div>
  );
}

const Pagination = ({
  confessionsPerPage,
  totalConfessions,
  paginate,
  currentPage,
  setCurrentPage,
}) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalConfessions / confessionsPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <nav>
      <ul className="flex justify-center mt-4">
        <li className="mx-1">
          <button
            onClick={() =>
              setCurrentPage(currentPage > 1 ? currentPage - 1 : 1)
            }
            className="px-3 py-1 border rounded"
            disabled={currentPage === 1}
          >
            Previous
          </button>
        </li>
        {pageNumbers.map((number) => (
          <li key={number} className="mx-1">
            <button
              onClick={() => paginate(number)}
              className={`px-3 py-1 border rounded ${
                currentPage === number ? "bg-black text-white" : ""
              }`}
            >
              {number}
            </button>
          </li>
        ))}
        <li className="mx-1">
          <button
            onClick={() =>
              setCurrentPage(
                currentPage < pageNumbers.length
                  ? currentPage + 1
                  : pageNumbers.length
              )
            }
            className="px-3 py-1 border rounded"
            disabled={currentPage === pageNumbers.length}
          >
            Next
          </button>
        </li>
      </ul>
    </nav>
  );
};

export default ConfessionList;
