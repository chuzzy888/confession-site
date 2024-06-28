import React from "react";
import { BiLike } from "react-icons/bi";
import { AiOutlineDislike } from "react-icons/ai";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";

function Homepage() {
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

        {/* <section className="w-full max-w-3xl bg-white dark:bg-zinc-800 rounded shadow-md my-4 p-4 sm:p-6">
          <h2 className="text-xl font-bold mb-4 dark:text-white">
            Why use Confess.io?
          </h2>
          <h3 className="text-lg font-semibold mb-4 dark:text-white">
            What people are confessing
          </h3>
          <div className="space-y-4">
            <div className="flex items-start space-x-4">
              <div className="w-8 h-8 rounded-full bg-indigo-500 text-white flex items-center justify-center font-bold">
                M
              </div>
              <div className="flex-1">
                <div className="flex items-center space-x-2 text-zinc-700 dark:text-zinc-300">
                  <span className="font-semibold">Melissa, 26</span>
                  <span className="text-zinc-500 dark:text-zinc-500">
                    2 days ago
                  </span>
                </div>
                <p className="text-zinc-800 dark:text-zinc-200">
                  I've been married for 7 years, and I'm in love with my best
                  friend. I don't know what to do.
                </p>
                <div className="flex items-center space-x-2 mt-2">
                  <button className="text-green-500">
                    <BiLike />
                  </button>
                  <button className="text-red-500">
                    <AiOutlineDislike />
                  </button>
                </div>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="w-8 h-8 rounded-full bg-indigo-500 text-white flex items-center justify-center font-bold">
                D
              </div>
              <div className="flex-1">
                <div className="flex items-center space-x-2 text-zinc-700 dark:text-zinc-300">
                  <span className="font-semibold">David, 34</span>
                  <span className="text-zinc-500 dark:text-zinc-500">
                    1 day ago
                  </span>
                </div>
                <p className="text-zinc-800 dark:text-zinc-200">
                  I'm a successful lawyer, but I feel like a fraud. I'm
                  terrified that someone will find out I'm not as smart as they
                  think.
                </p>
                <div className="flex items-center space-x-2 mt-2">
                  <button className="text-green-500">
                    <BiLike />
                  </button>
                  <button className="text-red-500">
                    <AiOutlineDislike />
                  </button>
                </div>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="w-8 h-8 rounded-full bg-indigo-500 text-white flex items-center justify-center font-bold">
                L
              </div>
              <div className="flex-1">
                <div className="flex items-center space-x-2 text-zinc-700 dark:text-zinc-300">
                  <span className="font-semibold">Lily, 21</span>
                  <span className="text-zinc-500 dark:text-zinc-500">
                    2 days ago
                  </span>
                </div>
                <p className="text-zinc-800 dark:text-zinc-200">
                  I hate my body. I'm so tired of feeling ugly and fat all the
                  time.
                </p>
                <div className="flex items-center space-x-2 mt-2">
                  <button className="text-green-500">
                    <BiLike />
                  </button>
                  <button className="text-red-500">
                    <AiOutlineDislike />
                  </button>
                </div>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="w-8 h-8 rounded-full bg-indigo-500 text-white flex items-center justify-center font-bold">
                M
              </div>
              <div className="flex-1">
                <div className="flex items-center space-x-2 text-zinc-700 dark:text-zinc-300">
                  <span className="font-semibold">Mike, 48</span>
                  <span className="text-zinc-500 dark:text-zinc-500">
                    6 days ago
                  </span>
                </div>
                <p className="text-zinc-800 dark:text-zinc-200">
                  I'm addicted to gambling, and I've lost everything. I don't
                  know how to stop.
                </p>
                <div className="flex items-center space-x-2 mt-2">
                  <button className="text-green-500">
                    <BiLike />
                  </button>
                  <button className="text-red-500">
                    <AiOutlineDislike />
                  </button>
                </div>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="w-8 h-8 rounded-full bg-indigo-500 text-white flex items-center justify-center font-bold">
                E
              </div>
              <div className="flex-1">
                <div className="flex items-center space-x-2 text-zinc-700 dark:text-zinc-300">
                  <span className="font-semibold">Emily, 29</span>
                  <span className="text-zinc-500 dark:text-zinc-500">
                    4 days ago
                  </span>
                </div>
                <p className="text-zinc-800 dark:text-zinc-200">
                  I'm so lonely. I wish I had someone to talk to, someone who
                  really understands.
                </p>
                <div className="flex items-center space-x-2 mt-2">
                  <button className="text-green-500">
                    <BiLike />
                  </button>
                  <button className="text-red-500">
                    <AiOutlineDislike />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section> */}
        {/* 
        <section className="bg-card p-6 rounded-lg shadow-md w-full max-w-3xl">
          <h3 className="text-2xl font-semibold mb-4">Recent Confessions</h3>
          <div className="space-y-4">
            <div className="p-4 bg-secondary text-secondary-foreground rounded-md shadow">
              <p>
                "I accidentally broke my friend's favorite mug and blamed it on
                the cat."
              </p>
              <p className="text-sm text-muted-foreground mt-2">- Anonymous</p>
            </div>
            <div className="p-4 bg-secondary text-secondary-foreground rounded-md shadow">
              <p>"I have had a crush on my best friend for years."</p>
              <p className="text-sm text-muted-foreground mt-2">- Anonymous</p>
            </div>
            <div className="p-4 bg-secondary text-secondary-foreground rounded-md shadow">
              <p>"I lied on my resume to get my current job."</p>
              <p className="text-sm text-muted-foreground mt-2">- Anonymous</p>
            </div>
          </div>
        </section>

        <section
          id="about"
          className="w-full my-2 max-w-3xl bg-white text-popover-foreground p-6 rounded-lg shadow-md space-y-4"
        >
          <h3 className="text-2xl font-semibold">About Us</h3>
          <p className="text-muted-foreground">
            Confess.io is a safe haven for sharing your deepest secrets without
            fear of judgement or exposure. Our mission is to provide a platform
            where people can unburden their hearts anonymously.
          </p>
        </section>

        <footer
          id="contact"
          className="w-full max-w-3xl bg-card text-card-foreground p-4 rounded-lg shadow-md mt-8"
        >
          <h4 className="text-lg font-semibold mb-2">Contact Us</h4>
          <form className="space-y-4">
            <div className="flex flex-col space-y-2">
              <label htmlFor="name" className="text-sm">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                className="bg-input text-foreground p-2 rounded-md border border-border"
                placeholder="Your Name"
              />
            </div>
            <div className="flex flex-col space-y-2">
              <label htmlFor="email" className="text-sm">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className="bg-input text-foreground p-2 rounded-md border border-border"
                placeholder="your.email@example.com"
              />
            </div>
            <div className="flex flex-col space-y-2">
              <label htmlFor="message" className="text-sm">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows="4"
                className="bg-input text-foreground p-2 rounded-md border border-border"
                placeholder="Your Message..."
              ></textarea>
            </div>
            <button
              type="submit"
              className="bg-secondary text-secondary-foreground hover:bg-secondary/80 px-6 py-2 rounded-lg shadow transition"
            >
              Send Message
            </button>
          </form>
        </footer> */}

        {/* <footer className="w-full max-w-3xl bg-white dark:bg-zinc-800 rounded shadow-md my-4 p-4 sm:p-6 text-center">
          <Link to={"/confessions"}>
            <button className="bg-blue-500 text-white px-6 py-3 rounded-lg">
              View secrets
            </button>
          </Link>
        </footer> */}
      </div>
    </div>
  );
}

export default Homepage;
