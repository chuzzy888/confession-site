import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function ConfessForm({ addConfession }) {
  const [title, setTitle] = useState('');
  const [confession, setConfession] = useState('');
  const [category, setCategory] = useState('');
  const [anonymous, setAnonymous] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    addConfession({
      title,
      confession,
      category,
      anonymous
    });
    navigate('/confessions');
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-zinc-100 dark:bg-zinc-900 p-6">
      <div className="w-full max-w-md bg-white dark:bg-zinc-800 rounded-lg shadow-md p-6">
        <h2 className="text-xl font-bold mb-2 text-zinc-900 dark:text-zinc-100">
          Confess Your Secrets
        </h2>
        <p className="text-zinc-600 dark:text-zinc-400 mb-4">
          Share your deepest thoughts and feelings anonymously.
        </p>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-zinc-700 dark:text-zinc-400 mb-2" htmlFor="title">
              Headline
            </label>
            <input
              type="text"
              id="title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="w-full px-3 py-2 text-zinc-700 dark:text-zinc-200 bg-zinc-100 dark:bg-zinc-900 border rounded-md focus:outline-none focus:ring focus:border-blue-300 dark:focus:border-blue-700"
              placeholder="Title of your confession"
            />
            <label className="block text-zinc-700 dark:text-zinc-400 mb-2" htmlFor="confession">
              Your Confession
            </label>
            <textarea
              id="confession"
              value={confession}
              onChange={(e) => setConfession(e.target.value)}
              className="w-full px-3 py-2 text-zinc-700 dark:text-zinc-200 bg-zinc-100 dark:bg-zinc-900 border rounded-md focus:outline-none focus:ring focus:border-blue-300 dark:focus:border-blue-700"
              rows="4"
              placeholder="Type your confession here..."
            ></textarea>
          </div>

          <div className="mb-4">
            <label className="block text-zinc-700 dark:text-zinc-400 mb-2" htmlFor="category">
              Confession Category
            </label>
            <select
              id="category"
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              className="w-full px-3 py-2 text-zinc-700 dark:text-zinc-200 bg-zinc-100 dark:bg-zinc-900 border rounded-md focus:outline-none focus:ring focus:border-blue-300 dark:focus:border-blue-700"
            >
              <option>Select a category</option>
              <option>Lies</option>
              <option>Guilt</option>
              <option>Regret</option>
              <option>Shame</option>
              <option>Other</option>
            </select>
          </div>

          <div className="mb-4 flex items-center">
            <input
              id="anonymous"
              type="checkbox"
              checked={anonymous}
              onChange={() => setAnonymous(!anonymous)}
              className="mr-2"
            />
            <label className="text-zinc-700 dark:text-zinc-400" htmlFor="anonymous">
              Hide My Identity
            </label>
          </div>

          <div className="flex justify-end">
            <button
              type="submit"
              className="px-4 py-2 bg-black text-white dark:bg-zinc-700 rounded-md hover:bg-zinc-800 focus:outline-none focus:bg-zinc-800 dark:focus:bg-zinc-600"
            >
              Submit Confession
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default ConfessForm;
