import React, { useState } from 'react';

const Login = ({ handleLogin }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const submitHandler = (e) => {
    e.preventDefault();
    handleLogin(email, password);
    setEmail('');
    setPassword('');
  };

  return (
    <div className="flex h-screen w-screen items-center justify-center bg-gradient-to-r from-white via-blue-100 to-blue-200">
      <div className="bg-white shadow-lg rounded-2xl p-10 md:p-16 max-w-md w-full h-[500px] flex flex-col justify-center transform transition hover:scale-105">
        <h1 className="text-3xl font-bold text-gray-800 mb-6 text-center">Welcome Back</h1>
        <form
          onSubmit={(e) => submitHandler(e)}
          className="flex flex-col space-y-6"
        >
          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="outline-none bg-gray-50 text-gray-800 border-2 border-gray-300 focus:ring-2 focus:ring-blue-500 text-lg py-3 px-5 rounded-lg placeholder-gray-500 transition focus:border-blue-500"
            type="email"
            placeholder="Email Address"
          />
          <input
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            className="outline-none bg-gray-50 text-gray-800 border-2 border-gray-300 focus:ring-2 focus:ring-blue-500 text-lg py-3 px-5 rounded-lg placeholder-gray-500 transition focus:border-blue-500"
            type="password"
            placeholder="Password"
          />
          <button
            className="mt-4 bg-blue-500 hover:bg-blue-600 text-white font-semibold py-3 px-6 rounded-lg shadow-md transition transform hover:-translate-y-1 hover:shadow-lg"
            type="submit"
          >
            Log In
          </button>
        </form>
        <p className="mt-6 text-gray-600 text-sm text-center">
          Don't have an account?{' '}
          <a href="#" className="text-blue-500 hover:underline">
            Sign up
          </a>
        </p>
      </div>
    </div>
  );
};

export default Login;
