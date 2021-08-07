import { React, useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Link, useHistory, useLocation } from 'react-router-dom';
import Swal from 'sweetalert2';
import { useAuth } from '../../contexts/AuthContext';
import Loading from '../Loading';

import Footer from '../website/Footer';
import Content from '../website/Content';
import Contact from '../website/Contact';
import Demo from '../website/Demo';

const Login = (props) => {
  const query = new URLSearchParams(useLocation().search);
  const nextUrl = query.get('next');

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const { login } = useAuth();

  let history = useHistory();

  let logMeIn = async (e) => {
    e.preventDefault();

    try {
      setLoading(true);
      await login(username, password);
      window.scrollTo({ top: 0, behavior: 'smooth' });
      history.push(nextUrl || '/dashboard');
    } catch (error) {
      Swal.fire('Unable to login!', error.message, 'warning');
      setLoading(false);
    }
  };

  return (
    <>
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-10 mx-auto flex flex-wrap items-center">
          <div className="lg:w-3/5 md:w-1/2 md:pr-16 lg:pr-0 pr-0">
            <h1 className="title-font font-medium text-3xl text-gray-900">
              Managing team tasks have never been this easier
            </h1>
            <p className="leading-relaxed mt-4">
              Tired of making to-do lists for your team? Forget to update your
              manager about feature update? Don't worry TooDo is here to help.
              You can now create a to-do list for entire team. The TooDo list.
            </p>
          </div>
          <div className="lg:w-2/6 md:w-1/2 bg-gray-100 rounded-lg p-8 flex flex-col md:ml-auto w-full mt-10 md:mt-0">
            <h2 className="text-gray-900 text-lg font-medium title-font mb-5">
              <span className={`text-${props.theme}-500`}>Login </span>
              <Link
                to={`/signup${nextUrl ? '?next=' + nextUrl : ''}`}
                className={`cursor-pointer text-gray-400 hover:text-${props.theme}-500`}
              >
                Sign up
              </Link>
            </h2>
            <form onSubmit={logMeIn}>
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
                {loading ? <Loading inline={true} /> : 'Login'}
              </button>
            </form>
            <p className="text-xs text-gray-500 mt-3">
              Don't have an account?{' '}
              <Link
                to={`/signup${nextUrl ? '?next=' + nextUrl : ''}`}
                className="text-indigo-500"
              >
                Create account
              </Link>
            </p>
          </div>
        </div>
      </section>
      <Content />
      <Demo />
      <Contact />
      <Footer />
    </>
  );
};

Login.defaultProps = {
  theme: 'indigo',
};

Login.propTypes = {
  theme: PropTypes.string.isRequired,
};

export default Login;
