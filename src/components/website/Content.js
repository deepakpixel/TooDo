import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

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
              <Link to="/login">
                <button
                  className={`inline-flex text-white bg-${props.theme}-500 border-0 py-1 px-4 focus:outline-none hover:bg-${props.theme}-600 rounded`}
                >
                  Get started
                </button>
              </Link>
              <a
                href="https://github.com/deepakpixel/toodo"
                target="_blank"
                rel="noopener noreferrer"
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
          Getting started with TooDo
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
                  viewBox="0 0 32 32"
                >
                  <line class="cls-1" x1="14" x2="25" y1="9" y2="9" />
                  <path
                    class="cls-2"
                    d="M10,8.94A2.08,2.08,0,0,1,8,11,2.08,2.08,0,0,1,6,8.94a2,2,0,0,1,4,0Z"
                  />
                  <path
                    class="cls-3"
                    d="M10,8.94A2.08,2.08,0,0,1,8,11,2.08,2.08,0,0,1,6,8.94a2,2,0,0,1,4,0Z"
                  />
                  <line class="cls-1" x1="14" x2="25" y1="16" y2="16" />
                  <path
                    class="cls-2"
                    d="M10,15.94A2.08,2.08,0,0,1,8,18a2.08,2.08,0,0,1-2-2.06,2,2,0,0,1,4,0Z"
                  />
                  <line class="cls-1" x1="14" x2="25" y1="23" y2="23" />
                  <path
                    class="cls-2"
                    d="M10,22.94A2.08,2.08,0,0,1,8,25a2.08,2.08,0,0,1-2-2.06,2,2,0,0,1,4,0Z"
                  />
                </svg>
              </div>
              <div className="flex-grow sm:pl-6 mt-6 sm:mt-0">
                <h2 className="font-medium title-font text-gray-900 mb-1 text-xl">
                  Create a TooDo list
                </h2>
                <p className="leading-relaxed">
                  Once you are logged in you can create a new TooDo list and
                  start adding tasks.
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
                  fill="currentColor"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  className="w-12 h-12"
                  viewBox="0 0 500 500"
                >
                  <g xmlns="http://www.w3.org/2000/svg">
                    <g>
                      <path d="M113.6,311c-30.2,0-54.8-24.6-54.8-54.8c0-30.2,24.6-54.8,54.8-54.8s54.8,24.6,54.8,54.8C168.4,286.5,143.8,311,113.6,311    z M113.6,228.9c-15.1,0-27.4,12.3-27.4,27.4c0,15.1,12.3,27.4,27.4,27.4s27.4-12.3,27.4-27.4C141,241.2,128.7,228.9,113.6,228.9z" />
                    </g>
                    <g>
                      <path d="M346.3,365.8h-27.4c0-37.7-30.7-68.4-68.4-68.4s-68.4,30.7-68.4,68.4h-27.4c0-52.8,43-95.8,95.8-95.8    S346.3,313,346.3,365.8z" />
                    </g>
                    <g>
                      <path d="M387.4,311c-30.2,0-54.8-24.6-54.8-54.8c0-30.2,24.6-54.8,54.8-54.8c30.2,0,54.8,24.6,54.8,54.8    C442.1,286.5,417.6,311,387.4,311z M387.4,228.9c-15.1,0-27.4,12.3-27.4,27.4c0,15.1,12.3,27.4,27.4,27.4    c15.1,0,27.4-12.3,27.4-27.4C414.8,241.2,402.5,228.9,387.4,228.9z" />
                    </g>
                    <g>
                      <path d="M250.5,297.4c-37.7,0-68.4-30.7-68.4-68.4s30.7-68.4,68.4-68.4s68.4,30.7,68.4,68.4S288.2,297.4,250.5,297.4z     M250.5,187.9c-22.6,0-41.1,18.4-41.1,41.1s18.4,41.1,41.1,41.1s41.1-18.4,41.1-41.1S273.1,187.9,250.5,187.9z" />
                    </g>
                    <g>
                      <path d="M346.3,365.8h-27.4v-13.7c0-37.7,30.7-68.4,68.4-68.4s68.4,30.7,68.4,68.4h-27.4c0-22.6-18.4-41.1-41.1-41.1    s-41.1,18.4-41.1,41.1V365.8z" />
                    </g>
                    <g>
                      <path d="M182.1,365.8h-27.4v-13.7c0-22.6-18.4-41.1-41.1-41.1s-41.1,18.4-41.1,41.1H45.2c0-37.7,30.7-68.4,68.4-68.4    s68.4,30.7,68.4,68.4V365.8z" />
                    </g>
                  </g>
                </svg>
              </div>
              <div className="flex-grow sm:pl-6 mt-6 sm:mt-0">
                <h2 className="font-medium title-font text-gray-900 mb-1 text-xl">
                  Invite team
                </h2>
                <p className="leading-relaxed">
                  Invite people and start wotking together. We will sync your
                  tasks with your team so that you don't miss on anything.
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
