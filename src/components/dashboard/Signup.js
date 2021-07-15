import { React, useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Link, useHistory } from 'react-router-dom';
import Swal from 'sweetalert2';
import Loading from '../Loading';
import { useAuth } from '../../contexts/AuthContext';

const Login = (props) => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [passwordConf, setPasswordConf] = useState('');
  const [loading, setLoading] = useState(false);
  const { signup } = useAuth();
  let history = useHistory();

  let signMeUp = async (e) => {
    e.preventDefault();

    if (password !== passwordConf) {
      return Swal.fire(
        "Password doesn't match!",
        'Password and Confirm Password should be same',
        'warning'
      );
    }

    try {
      setLoading(true);
      await signup(username, password);
      history.push('/dashboard');
    } catch (error) {
      Swal.fire('Failed to signup!', error.message, 'warning');
      setLoading(false);
    }
  };
  return (
    <section className="text-gray-600 body-font">
      <div className="container px-5 py-10 mx-auto flex flex-wrap items-center">
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
            <Link
              to="/login"
              className={`cursor-pointer text-gray-400 hover:text-${props.theme}-500`}
            >
              Login
            </Link>
            <span className={`text-${props.theme}-500`}> Sign up</span>
          </h2>
          <form onSubmit={signMeUp}>
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
            <div className="relative mb-4">
              <label
                htmlFor="passwordConf"
                className="leading-7 text-sm text-gray-600"
              >
                Confirm Password
              </label>
              <input
                onChange={(e) => {
                  setPasswordConf(e.target.value);
                }}
                type="password"
                id="passwordConf"
                name="passwordConf"
                className={`w-full bg-white rounded border border-gray-300 focus:border-${props.theme}-500 focus:ring-2 focus:ring-${props.theme}-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out`}
              />
            </div>
            <button
              className={`w-full text-white bg-${props.theme}-500 border-0 py-2 px-8 focus:outline-none hover:bg-${props.theme}-600 rounded text-lg`}
            >
              {loading ? <Loading inline={true} /> : 'Signup'}
            </button>
          </form>
          <p className="text-xs text-gray-500 mt-3">
            Already have an account?{' '}
            <Link to="/signup" className="text-indigo-500">
              Login
            </Link>
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
