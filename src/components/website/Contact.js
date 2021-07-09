import { useState, React } from 'react';
import PropTypes from 'prop-types';
import Swal from 'sweetalert2';

const Content = (props) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [empty, setEmpty] = useState({
    name: false,
    email: false,
    message: false,
  });

  const contactMe = (e) => {
    e.preventDefault();

    let tempState = empty;
    if (!name.length) {
      tempState = { ...tempState, name: true };
      console.log('error in name new state ', tempState);
    } else tempState = { ...tempState, name: false };
    if (
      !email.length ||
      !/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(
        email
      )
    ) {
      tempState = { ...tempState, email: true };
    } else tempState = { ...tempState, email: false };
    if (!message) {
      tempState = { ...tempState, message: true };
    } else tempState = { ...tempState, message: false };

    setEmpty(tempState);

    for (let key in tempState) {
      if (tempState[key]) {
        Swal.fire(
          'Oops! Invalid details',
          'Please check the details again',
          'warning'
        );
        return;
      }
    }

    window.location.href = `mailto:deepakjangra.july@gmail.com?&subject=Let's talk about something interesting!&body= %0A
    Name:${name}%0A
    Email:${email}%0A
    Message:${message}
    `;

    // console.log(name.length);
  };
  return (
    <>
      <section className="text-gray-600 body-font relative">
        <div className="container px-5 py-8 mx-auto">
          <div className="flex flex-col text-center w-full mb-5">
            <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">
              Get in touch
            </h1>
            <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
              or simply drop me an email at{' '}
              <a
                className={`text-${props.theme}-500`}
                href="mailto:deepakjangra.july@gmail.com"
              >
                deepakjangra.july@gmail.com
              </a>
            </p>
          </div>
          <div className="lg:w-1/2 md:w-2/3 mx-auto">
            <div className="flex flex-wrap -m-2">
              <div className="p-2 w-1/2">
                <div className="relative">
                  <label
                    htmlFor="name"
                    className="leading-7 text-sm text-gray-600"
                  >
                    Name
                  </label>
                  <input
                    onChange={(e) => setName(e.target.value)}
                    type="text"
                    id="name"
                    name="name"
                    className={`
                    ${
                      empty['name']
                        ? 'border-2 border-red-500 border-opacity-100'
                        : 'border-2 border-gray-300'
                    } w-full bg-gray-100 bg-opacity-50 rounded focus:border-${
                      props.theme
                    }-500 focus:bg-white focus:ring-${
                      props.theme
                    }-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out`}
                  />
                </div>
              </div>
              <div className="p-2 w-1/2">
                <div className="relative">
                  <label
                    htmlFor="email"
                    className="leading-7 text-sm text-gray-600"
                  >
                    Email
                  </label>
                  <input
                    onChange={(e) => {
                      setEmail(e.target.value);
                    }}
                    type="email"
                    id="email"
                    name="email"
                    className={`${
                      empty['email']
                        ? 'border-2 border-red-500 border-opacity-100'
                        : 'border-2 border-gray-300'
                    } w-full bg-gray-100 bg-opacity-50 rounded focus:border-${
                      props.theme
                    }-500 focus:bg-white focus:ring-${
                      props.theme
                    }-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out`}
                  />
                </div>
              </div>
              <div className="p-2 w-full">
                <div className="relative">
                  <label
                    htmlFor="message"
                    className="leading-7 text-sm text-gray-600"
                  >
                    Message
                  </label>
                  <textarea
                    onChange={(e) => setMessage(e.target.value)}
                    id="message"
                    name="message"
                    className={`
                    ${
                      empty['message']
                        ? 'border-2 border-red-500 border-opacity-100'
                        : 'border-2 border-gray-300'
                    } w-full bg-gray-100 bg-opacity-50 rounded focus:border-${
                      props.theme
                    }-500 focus:bg-white focus:ring-${
                      props.theme
                    }-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out`}
                  ></textarea>
                </div>
              </div>
              <div className="p-2 w-full">
                <button
                  onClick={contactMe}
                  className={`flex mx-auto text-white bg-${props.theme}-500 border-0 py-2 px-8 focus:outline-none hover:bg-${props.theme}-600 rounded text-lg`}
                >
                  Button
                </button>
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
