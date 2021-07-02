import React from 'react';
import PropTypes from 'prop-types';

const Footer = (props) => {
  return (
    <footer className={`text-gray-600 body-font bg-${props.theme}-100`}>
      <div className="container px-5 py-8 mx-auto flex items-center sm:flex-row flex-col">
        <a
          href
          className="flex title-font font-medium items-center md:justify-start justify-center text-gray-900"
        >
          <img
            src="logo192.png"
            className={`w-10 h-10 text-white p-2 `}
            alt="TooDo Logo"
          />
          <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
          <span className="ml-3 text-xl">TooDo</span>
        </a>
        <p className="text-sm text-gray-500 sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-gray-200 sm:py-2 sm:mt-0 mt-4">
          © 2021 TooDo —
          <a
            href="https://github.com/deepakpixel/toodo"
            className="text-gray-600 ml-1"
            rel="noopener noreferrer"
            target="_blank"
          >
            By @deepakjangra
          </a>
        </p>
      </div>
    </footer>
  );
};

Footer.defaultProps = {
  theme: 'indigo',
};

Footer.propTypes = {
  theme: PropTypes.string.isRequired,
};

export default Footer;
