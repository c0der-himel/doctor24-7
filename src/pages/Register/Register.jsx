import { LockClosedIcon } from '@heroicons/react/solid';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import googleLogo from '../../assets/img/login-register/search.png';
import logo from '../../assets/img/logo/logo.png';
import useAuth from '../../hooks/useAuth';

const Register = () => {
  const { errors, signUpWithEmail, signInUsingGoogle } = useAuth();
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleUsername = (e) => setUsername(e.target.value);
  const handleEmail = (e) => setEmail(e.target.value);
  const handlePassword = (e) => setPassword(e.target.value);

  const handleRegister = (e) => {
    e.preventDefault();
    if (password.length < 6) {
      setError('Password should be at least 6 characters');
      return;
    }
    setError('');
    signUpWithEmail(username, email, password);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-white py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8 shadow rounded-lg px-10 pt-10">
        <div>
          <img className="mx-auto h-24 w-auto" src={logo} alt="logo" />
          <h2 className="mt-6 text-center text-3xl font-extrabold text-green-500">
            Register your account
          </h2>
        </div>
        <form
          onSubmit={handleRegister}
          className="mt-8 space-y-6"
          action="#"
          method="POST"
        >
          <input type="hidden" name="remember" defaultValue="true" />
          <div className="rounded-md shadow-sm -space-y-px">
            <div>
              <label htmlFor="username" className="sr-only">
                Username
              </label>
              <input
                onBlur={handleUsername}
                id="username"
                name="username"
                type="text"
                required
                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-600 focus:outline-none focus:ring-green-500 focus:border-green-500 focus:z-10 sm:text-sm rounded-t-md"
                placeholder="Username"
              />
            </div>
            <div>
              <label htmlFor="email-address" className="sr-only">
                Email address
              </label>
              <input
                onBlur={handleEmail}
                id="email-address"
                name="email"
                type="email"
                autoComplete="email"
                required
                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-600 focus:outline-none focus:ring-green-500 focus:border-green-500 focus:z-10 sm:text-sm"
                placeholder="Email address"
              />
            </div>
            <div>
              <label htmlFor="password" className="sr-only">
                Password
              </label>
              <input
                onBlur={handlePassword}
                id="password"
                name="password"
                type="password"
                autoComplete="current-password"
                required
                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-600 rounded-b-md focus:outline-none focus:ring-green-500 focus:border-green-500 focus:z-10 sm:text-sm"
                placeholder="Password"
              />
            </div>
          </div>
          <div className="flex items-center justify-center">
            <div className="text-sm">
              <Link
                to="/login"
                className="font-medium text-gray-600 hover:text-green-500"
              >
                Already have account ?
              </Link>
            </div>
          </div>
          <div>
            <button
              type="submit"
              className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-green-500 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 transition"
            >
              <span className="absolute left-0 inset-y-0 flex items-center pl-3">
                <LockClosedIcon
                  className="h-5 w-5 text-white"
                  aria-hidden="true"
                />
              </span>
              Register
            </button>
            <button
              onClick={signInUsingGoogle}
              type="submit"
              className="group relative w-full flex justify-center py-2 px-4 border text-sm font-medium rounded-md text-gray-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 border-green-500 mt-3"
            >
              <span className="absolute left-0 inset-y-0 flex items-center pl-3">
                <img className="h-5 w-5" src={googleLogo} alt="google" />
              </span>
              Register using Google
            </button>
          </div>
        </form>
        <div>
          {error ? (
            <p className="bg-red-300 text-gray-600 text-center rounded-lg p-2 mb-8">
              {error}
            </p>
          ) : (
            ''
          )}
          {errors ? (
            <p className="bg-red-300 text-gray-600 text-center rounded-lg p-2 mb-8">
              {errors}
            </p>
          ) : (
            ''
          )}
        </div>
      </div>
    </div>
  );
};

export default Register;
