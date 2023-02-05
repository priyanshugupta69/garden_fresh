import React, { useState } from 'react';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    // Perform authentication here
  };

  return (
    <div>
      <div className="h-screen flex items-center justify-center z-10">
      <form className="bg-white p-6 rounded-lg shadow-xl" onSubmit={handleSubmit}>
        <h2 className="text-lg font-medium mb-4">Login</h2>
        <div className="mb-4">
          <label className="block text-gray-700 font-medium mb-2" htmlFor="email">
            Email
          </label>
          <input 
            className="border border-gray-400 p-2 w-full" 
            type="email" 
            id="email" 
            name="email" 
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required 
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 font-medium mb-2" htmlFor="password">
            Password
          </label>
          <input 
            className="border border-gray-400 p-2 w-full" 
            type="password" 
            id="password" 
            name="password" 
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required 
          />
        </div>
        <button className="bg-blue-500 text-white p-2 rounded-full hover:bg-blue-600">
          Submit
        </button>
      </form>
    </div>
    </div>
    
  );
};

export default Login;