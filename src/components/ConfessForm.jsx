import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { addConfessionToFirestore } from "../firebaseConfig";

function ConfessForm() {
  const [title, setTitle] = useState("");
  const [confession, setConfession] = useState("");
  const [category, setCategory] = useState("");
  const [anonymous, setAnonymous] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!title.trim() || !confession.trim()) {
      alert("Please fill out both Title and Confession fields.");
      return;
    }

    try {
      await addConfessionToFirestore({
        title,
        confession,
        category,
        anonymous,
        timestamp: new Date(),
      });
      console.log("Confession added successfully");
      alert("confession added!");
      navigate("/confessions");
    } catch (error) {
      console.error("Error adding confession: ", error);
    }
  };

  return (
    <div className="min-h-screen flex flex-col lg:flex-row">
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
      <div className="w-full max-w-full lg:max-w-lg bg-white dark:bg-zinc-800 rounded-lg shadow-md p-6">
        <h2 className="text-xl font-bold mb-2 text-zinc-900 dark:text-zinc-100">
          Confess Your Secrets
        </h2>
        <p className="text-zinc-600 dark:text-zinc-400 mb-4">
          Share your deepest thoughts and feelings anonymously.
        </p>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label
              className="block text-zinc-700 dark:text-zinc-400 mb-2"
              htmlFor="title"
            >
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
          </div>

          <div className="mb-4">
            <label
              className="block text-zinc-700 dark:text-zinc-400 mb-2"
              htmlFor="confession"
            >
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
            <label
              className="block text-zinc-700 dark:text-zinc-400 mb-2"
              htmlFor="category"
            >
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
            <label
              className="text-zinc-700 dark:text-zinc-400"
              htmlFor="anonymous"
            >
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
