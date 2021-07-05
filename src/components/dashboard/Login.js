import { React, useState } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import swal from 'sweetalert';

const Login = (props) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  console.log(props);
  let logMeIn = () => {
    if (username === 'test' && password === 'test') {
      props.setLoggedIn(true);
    } else {
      swal(
        'Invalid credentials',
        'Username or password is incorrect',
        'warning'
      );
    }
  };

  return (
    <section className="text-gray-600 body-font">
      <div className="container px-5 py-24 mx-auto flex flex-wrap items-center">
        <div className="lg:w-3/5 md:w-1/2 md:pr-16 lg:pr-0 pr-0">
          <h1 className="title-font font-medium text-3xl text-gray-900">
            Managing team tasks have never been this easier
          </h1>
          <p className="leading-relaxed mt-4">
            Tired of making to-do lists for your team? Forget to update your
            manager about feature update? Don't worry TooDo is here to help. You
            can now create a to-do list for entire team. The TooDo list.
          </p>
        </div>
        <div className="lg:w-2/6 md:w-1/2 bg-gray-100 rounded-lg p-8 flex flex-col md:ml-auto w-full mt-10 md:mt-0">
          <h2 className="text-gray-900 text-lg font-medium title-font mb-5">
            <span className={`text-${props.theme}-500`}>Login</span>{' '}
            <Link
              to="/signup"
              className={`cursor-pointer text-gray-400 hover:text-${props.theme}-500`}
            >
              Sign up
            </Link>
          </h2>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              logMeIn();
            }}
          >
            <div className="relative mb-4">
              <label
                htmlFor="username"
                className="leading-7 text-sm text-gray-600"
              >
                Username
              </label>
              <input
                onChange={(e) => {
                  setUsername(e.target.value);
                }}
                type="text"
                id="username"
                name="username"
                className={`w-full bg-white rounded border border-gray-300 focus:border-${props.theme}-500 focus:ring-2 focus:ring-${props.theme}-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out`}
              />
            </div>
            <div className="relative mb-4">
              <label
                htmlFor="password"
                className="leading-7 text-sm text-gray-600"
              >
                Password
              </label>
              <input
                onChange={(e) => {
                  setPassword(e.target.value);
                }}
                type="password"
                id="password"
                name="password"
                className={`w-full bg-white rounded border border-gray-300 focus:border-${props.theme}-500 focus:ring-2 focus:ring-${props.theme}-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out`}
              />
            </div>
            <button
              className={`w-full text-white bg-${props.theme}-500 border-0 py-2 px-8 focus:outline-none hover:bg-${props.theme}-600 rounded text-lg`}
            >
              Login
            </button>
          </form>{' '}
          <p className="text-xs text-gray-500 mt-3">
            This is a personal project hence no {''}
            <span className="text-indigo-500">terms and service</span>.
          </p>
        </div>
      </div>
    </section>
  );
};

Login.defaultProps = {
  theme: 'indigo',
};

Login.propTypes = {
  theme: PropTypes.string.isRequired,
};

export default Login;