import React from "react";

const Notes = () => {
  // Get user info from localStorage
  const user = JSON.parse(localStorage.getItem("user"));

  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-gray-100">
      <h1 className="text-4xl font-bold mb-6">Notes Page</h1>

      {user ? (
        <div className="text-center">
          <p className="text-lg mb-4">
            Welcome, <strong>{user.firstname} {user.lastname}</strong>!
          </p>
          <p className="text-gray-600">
            This is a placeholder page. Your notes will appear here.
          </p>
        </div>
      ) : (
        <p className="text-red-500">You are not logged in.</p>
      )}
    </div>
  );
};

export default Notes;
