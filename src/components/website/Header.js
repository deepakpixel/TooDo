import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const Header = (props) => {
  return (
    <header className="z-50 text-gray-600 body-font border-b-2 border-fuchsia-600 sticky top-0 bg-white">
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <a
          href="/"
          className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0"
        >
          <img
            src="logo192.png"
            className={`w-10 h-10 text-white p-2 bg-${props.theme}-500 rounded-full`}
            alt="TooDo Logo"
          />
          <span className="ml-3 text-xl">TooDo</span>
        </a>
        <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
          <a href="/documentation" className="mr-5 hover:text-gray-900">
            Documentation
          </a>
          <a
            href="https://github.com/deepakpixel/toodo"
            target="_blank"
            rel="noopener noreferrer"
            className="mr-5 hover:text-gray-900"
          >
            Source Code
          </a>
        </nav>
        <Link to={props.loggedIn ? '/dashboard' : '/login'}>
          <button
            className={`inline-flex items-center bg-${props.theme}-500 border-0 py-1 px-3 focus:outline-none hover:bg-${props.theme}-600 rounded text-base text-white mt-4 md:mt-0`}
          >
            {props.loggedIn ? 'Dashboard' : 'Login'}
            <svg
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              className="w-4 h-4 ml-1"
              viewBox="0 0 24 24"
            >
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </button>
        </Link>
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
