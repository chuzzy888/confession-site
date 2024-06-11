import React, { useState } from "react";

function ConfessionList({ confessions }) {
    const [currentPage, setCurrentPage] = useState(1);
    const confessionsPerPage = 6;

    const indexOfLastConfession = currentPage * confessionsPerPage;
    const indexOfFirstConfession = indexOfLastConfession - confessionsPerPage;
    const currentConfessions = confessions.slice(indexOfFirstConfession, indexOfLastConfession);

    const paginate = (pageNumber) => setCurrentPage(pageNumber);

    return (
        <div className="container mx-auto p-4 ">
            <h1 className="text-2xl font-semibold text-center mb-6">Confessions</h1>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                {currentConfessions.map((confession, index) => (
                    <div key={index} className="bg-white dark:bg-zinc-800 p-6 rounded-lg shadow">
                        <h2 className="text-lg font-semibold mb-4">{confession.title}</h2>
                        <p>{confession.confession}</p>
                        <p className="text-zinc-500 dark:text-zinc-400 mt-4">{confession.anonymous ? 'Anonymous' : 'Known'}</p>
                        <p className="text-zinc-500 dark:text-zinc-400 mt-2">Category: {confession.category}</p>
                    </div>
                ))}
            </div>
            <Pagination
                confessionsPerPage={confessionsPerPage}
                totalConfessions={confessions.length}
                currentPage={currentPage}
                paginate={paginate}
                setCurrentPage={setCurrentPage}
            />
        </div>
    );
}

const Pagination = ({ confessionsPerPage, totalConfessions, paginate, currentPage, setCurrentPage }) => {
    const pageNumbers = [];

    for (let i = 1; i <= Math.ceil(totalConfessions / confessionsPerPage); i++) {
        pageNumbers.push(i);
    }

    return (
        <nav>
            <ul className="flex justify-center mt-4">
                <li className="mx-1">
                    <button
                        onClick={() => setCurrentPage(currentPage > 1 ? currentPage - 1 : 1)}
                        className="px-3 py-1 border rounded"
                        disabled={currentPage === 1}
                    >
                        Previous
                    </button>
                </li>
                {pageNumbers.map(number => (
                    <li key={number} className="mx-1">
                        <button
                            onClick={() => paginate(number)}
                            className={`px-3 py-1 border rounded ${currentPage === number ? 'bg-black text-white' : ''}`}
                        >
                            {number}
                        </button>
                    </li>
                ))}
                <li className="mx-1">
                    <button
                        onClick={() => setCurrentPage(currentPage < pageNumbers.length ? currentPage + 1 : pageNumbers.length)}
                        className="px-3 py-1 border rounded"
                        disabled={currentPage === pageNumbers.length}
                    >
                        Next
                    </button>
                </li>
            </ul>
        </nav>
    );
}

export default ConfessionList;





