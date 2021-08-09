import React from 'react';
import PropTypes from 'prop-types';

import { Link } from 'react-router-dom';

const Hero = (props) => {
  return (
    <section className="text-gray-600 body-font">
      <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
        <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
          <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
            Managing team tasks has never been this easier
          </h1>
          <p className="mb-8 leading-relaxed">
            Tired of making to-do lists for your team? Forget to update your
            manager about feature update? Don't worry TooDo is here to help. You
            can now create a to-do list for entire team. The TooDo list.
          </p>
          <div className="flex justify-center">
            <Link to="/login">
              <button
                className={`inline-flex text-white bg-${props.theme}-500 border-0 py-2 px-6 focus:outline-none hover:bg-${props.theme}-600 rounded text-lg`}
              >
                Get started
              </button>
            </Link>
            <a
              href="https://youtu.be/CsawSG3qZ8Y"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className="ml-4 inline-flex text-gray-700 bg-gray-100 border-0 py-2 px-6 focus:outline-none hover:bg-gray-200 rounded text-lg">
                Watch demo
              </button>
            </a>
          </div>
        </div>
        <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
          <img
            className="object-cover object-center rounded"
            alt="hero"
            src="toodo.svg"
          />
        </div>
      </div>
    </section>
  );
};

Hero.defaultProps = {
  theme: 'indigo',
};

Hero.propTypes = {
  theme: PropTypes.string.isRequired,
};

export default Hero;
