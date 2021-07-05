import React from 'react';
import PropTypes from 'prop-types';

const Demo = (props) => {
  return (
    <section
      id="demo"
      className={`bg-${props.theme}-100 text-gray-600 body-font`}
    >
      <div className="container px-5 py-8 mx-auto">
        <div className="flex flex-wrap -mx-4 -mb-10 text-center">
          <div className="w-full mb-10 px-4">
            {/* <div className="rounded-lg h-64 overflow-hidden"> */}
            <div className="mx-auto w-10/12 overflow-hidden">
              <div className="aspect-w-16 aspect-h-9 w-full">
                <iframe
                  title="ds"
                  src="https://www.youtube.com/embed/r9jwGansp1E"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
            </div>
            <h2 className="title-font text-2xl font-medium text-gray-900 mt-6 mb-3">
              TooDo in action
            </h2>
            <p className="leading-relaxed text-base">
              Feel the power of TooDo just buy watcching the demo. Want to know
              the power recipe? Head over to Github Source Code. Or even better
              try it out.
            </p>
            <a href="/">
              <button
                className={`flex mx-auto mt-6 text-white bg-${props.theme}-500 border-0 py-2 px-5 focus:outline-none hover:bg-${props.theme}-600 rounded`}
              >
                Feel the power
              </button>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

Demo.defaultProps = {
  theme: 'indigo',
};

Demo.propTypes = {
  theme: PropTypes.string.isRequired,
};

export default Demo;
