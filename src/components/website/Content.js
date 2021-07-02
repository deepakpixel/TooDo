import React from 'react';
import PropTypes from 'prop-types';

const Content = (props) => {
  return (
    <>
      <section className={`text-gray-600 body-font bg-${props.theme}-100`}>
        <div className="container px-5 py-8 mx-auto flex flex-wrap">
          <h2 className="sm:text-3xl text-2xl text-gray-900 font-medium title-font mb-2 md:w-2/5">
            Kickstarter Your Productivity with TooDo list
          </h2>
          <div className="md:w-3/5 md:pl-6">
            <p className="leading-relaxed text-base">
              TooDo list is designed to be productive in order to get your task
              done. You can go ahead and try out this one of its kind to-do
              list. Source code is also available on github.
            </p>
            <div className="flex md:mt-4 mt-6">
              <button
                className={`inline-flex text-white bg-${props.theme}-500 border-0 py-1 px-4 focus:outline-none hover:bg-${props.theme}-600 rounded`}
              >
                Get started
              </button>
              <a
                href="https://github.com/"
                className={`text-${props.theme}-500 inline-flex items-center ml-4`}
              >
                Show recipe on Github
                <svg
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  className="w-4 h-4 ml-2"
                  viewBox="0 0 24 24"
                >
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="text-gray-600 body-font">
        <h2 className=" text-center	 sm:text-3xl text-2xl text-gray-900 font-medium title-font px-5 mt-10">
          Steps to become productive
        </h2>
        <div className="container px-5 py-8 mx-auto flex flex-wrap">
          <div className="flex relative pt-10 pb-20 sm:items-center md:w-2/3 mx-auto">
            <div className="h-full w-6 absolute inset-0 flex items-center justify-center">
              <div className="h-full w-1 bg-gray-200 pointer-events-none"></div>
            </div>
            <div
              className={`flex-shrink-0 w-6 h-6 rounded-full mt-10 sm:mt-0 inline-flex items-center justify-center bg-${props.theme}-500 text-white relative z-10 title-font font-medium text-sm`}
            >
              1
            </div>
            <div className="flex-grow md:pl-8 pl-6 flex sm:items-center items-start flex-col sm:flex-row">
              <div
                className={`flex-shrink-0 w-24 h-24 bg-${props.theme}-100 text-${props.theme}-500 rounded-full inline-flex items-center justify-center`}
              >
                <svg
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  className="w-12 h-12"
                  viewBox="0 0 24 24"
                >
                  <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2" />
                  <circle cx="12" cy="7" r="4" />
                </svg>
              </div>
              <div className="flex-grow sm:pl-6 mt-6 sm:mt-0">
                <h2 className="font-medium title-font text-gray-900 mb-1 text-xl">
                  Create account
                </h2>
                <p className="leading-relaxed">
                  You will be able to track your tasks from anywhere just by
                  logging your account.
                </p>
              </div>
            </div>
          </div>
          <div className="flex relative pb-20 sm:items-center md:w-2/3 mx-auto">
            <div className="h-full w-6 absolute inset-0 flex items-center justify-center">
              <div className="h-full w-1 bg-gray-200 pointer-events-none"></div>
            </div>
            <div
              className={`flex-shrink-0 w-6 h-6 rounded-full mt-10 sm:mt-0 inline-flex items-center justify-center bg-${props.theme}-500 text-white relative z-10 title-font font-medium text-sm`}
            >
              2
            </div>
            <div className="flex-grow md:pl-8 pl-6 flex sm:items-center items-start flex-col sm:flex-row">
              <div
                className={`flex-shrink-0 w-24 h-24 bg-${props.theme}-100 text-${props.theme}-500 rounded-full inline-flex items-center justify-center`}
              >
                <svg
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  className="w-12 h-12"
                  viewBox="0 0 24 24"
                >
                  <circle cx="12" cy="5" r="3" />
                  <path d="M12 22V8M5 12H2a10 10 0 0020 0h-3" />
                </svg>
              </div>
              <div className="flex-grow sm:pl-6 mt-6 sm:mt-0">
                <h2 className="font-medium title-font text-gray-900 mb-1 text-xl">
                  Create a TooDo list
                </h2>
                <p className="leading-relaxed">
                  Once you are logged in you can create a new TooDo list and
                  then you can invite your team.
                </p>
              </div>
            </div>
          </div>
          <div className="flex relative pb-20 sm:items-center md:w-2/3 mx-auto">
            <div className="h-full w-6 absolute inset-0 flex items-center justify-center">
              <div className="h-full w-1 bg-gray-200 pointer-events-none"></div>
            </div>
            <div
              className={`flex-shrink-0 w-6 h-6 rounded-full mt-10 sm:mt-0 inline-flex items-center justify-center bg-${props.theme}-500 text-white relative z-10 title-font font-medium text-sm`}
            >
              3
            </div>
            <div className="flex-grow md:pl-8 pl-6 flex sm:items-center items-start flex-col sm:flex-row">
              <div
                className={`flex-shrink-0 w-24 h-24 bg-${props.theme}-100 text-${props.theme}-500 rounded-full inline-flex items-center justify-center`}
              >
                <svg
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  className="w-12 h-12"
                  viewBox="0 0 24 24"
                >
                  <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
                </svg>
              </div>
              <div className="flex-grow sm:pl-6 mt-6 sm:mt-0">
                <h2 className="font-medium title-font text-gray-900 mb-1 text-xl">
                  Time to rock
                </h2>
                <p className="leading-relaxed">
                  Yupp! That's it, you can now manage your tasks and we will
                  sync your tasks with your team so that you don't miss on
                  anything.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

Content.defaultProps = {
  theme: 'indigo',
};

Content.propTypes = {
  theme: PropTypes.string.isRequired,
};

export default Content;
