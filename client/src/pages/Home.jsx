import React from 'react'
import { Link } from "react-router-dom";

const Home = () => {
  return (
        <div className="min-h-screen flex flex-col justify-center items-center bg-red-500">
            <h1 className="text-5xl font-bold mb-4 text-white text-center">
                Welcome to NotesApp ✨
            </h1>
            <p className="text-lg text-white mb-8 text-center max-w-md">
                Keep your notes anytime, anywhere. Easy, fast, and convenient!
            </p>

            <div className="flex gap-4">
                <Link to="/login">
                <button className="px-6 py-2 bg-gray-900 text-white rounded hover:bg-gray-700 transition">
                    Login
                </button>
                </Link>
                <Link to="/signup">
                <button className="px-6 py-2 bg-gray-900 text-white rounded hover:bg-gray-700 transition">
                    Signup
                </button>
                </Link>
            </div>
        </div>
  );
};

export default Home