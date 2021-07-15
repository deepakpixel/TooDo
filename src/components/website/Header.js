import { useState } from 'react';
import React from 'react';
import PropTypes from 'prop-types';
import { Link, useHistory } from 'react-router-dom';
import { useAuth } from '../../contexts/AuthContext';
import Swal from 'sweetalert2';
import Loading from '../Loading';

const Header = (props) => {
  const history = useHistory();
  const [loading, setLoading] = useState(false);

  const { currentUser, logout } = useAuth();

  const logMeOut = async (e) => {
    try {
      setLoading(true);
      await logout();
      // history.push('/login');
    } catch (error) {
      Swal.fire('Unable to logout', error.message, 'warning');
    }
    setLoading(false);
  };

  return (
    <header className="z-50 text-gray-600 body-font border-b-2 border-fuchsia-600 sticky top-0 bg-white">
      <div className="container mx-auto flex flex-wrap p-5 justify-between items-center">
        <Link
          to="/"
          className="flex title-font font-medium items-center text-gray-900"
        >
          <img
            src="logo192.png"
            className={`w-10 h-10 text-white p-2 bg-${props.theme}-500 rounded-full`}
            alt="TooDo Logo"
          />
          <span className="ml-3 text-xl">TooDo</span>
        </Link>
        <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
          <a
            href="https://github.com/deepakpixel/toodo"
            target="_blank"
            rel="noopener noreferrer"
            className="mr-2 hover:text-gray-900"
          >
            Source Code
          </a>
          <span
            onClick={
              currentUser
                ? logMeOut
                : () => {
                    history.push('/login');
                  }
            }
          >
            <button
              className={`inline-flex items-center bg-${props.theme}-500 border-0 py-1 px-3 focus:outline-none hover:bg-${props.theme}-600 rounded text-base text-white`}
            >
              {currentUser ? 'Logout' : 'Login'}
              {loading ? (
                <Loading height={24} width={24} inline={true} />
              ) : (
                <svg
                  fill="#fff"
                  fillOpacity="0.5"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  className="w-4 h-4 ml-1"
                  viewBox="0 0 384.971 384.971"
                >
                  {currentUser && (
                    <path d="M180.455,360.91H24.061V24.061h156.394c6.641,0,12.03-5.39,12.03-12.03s-5.39-12.03-12.03-12.03H12.03    C5.39,0.001,0,5.39,0,12.031V372.94c0,6.641,5.39,12.03,12.03,12.03h168.424c6.641,0,12.03-5.39,12.03-12.03    C192.485,366.299,187.095,360.91,180.455,360.91z" />
                  )}
                  <path d="M381.481,184.088l-83.009-84.2c-4.704-4.752-12.319-4.74-17.011,0c-4.704,4.74-4.704,12.439,0,17.179l62.558,63.46H96.279    c-6.641,0-12.03,5.438-12.03,12.151c0,6.713,5.39,12.151,12.03,12.151h247.74l-62.558,63.46c-4.704,4.752-4.704,12.439,0,17.179    c4.704,4.752,12.319,4.752,17.011,0l82.997-84.2C386.113,196.588,386.161,188.756,381.481,184.088z" />
                </svg>
              )}
            </button>
          </span>
        </nav>
      </div>
    </header>
  );
};

Header.defaultProps = {
  theme: 'indigo',
};

Header.propTypes = {
  theme: PropTypes.string.isRequired,
};

export default Header;
