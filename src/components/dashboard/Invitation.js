import { React, useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Link, useHistory, useLocation } from 'react-router-dom';
import Swal from 'sweetalert2';
import { useAuth } from '../../contexts/AuthContext';
import Loading from '../Loading';
import methods from '../../utils/methods';
import Icon from '../../components/Icons/Icon';

const Login = (props) => {
  const { currentUser } = useAuth();
  const url = useLocation().pathname + useLocation().search;
  const query = new URLSearchParams(useLocation().search);
  const listId = query.get('list');

  const [loading, setLoading] = useState(true);
  const [updating, setUpdating] = useState(false);
  const [err, setErr] = useState('');
  const [toodo, setToodo] = useState({});

  useEffect(() => {
    const validateToodo = async () => {
      if (!listId) {
        setErr('This invitation link is not valid');
        return setLoading(false);
      }
      const list = await methods.findToodo(listId);
      if (!list) {
        setErr('This invitation link is not valid');
      } else {
        setToodo(list);
      }
      setLoading(false);
    };
    validateToodo();
  }, [listId]);

  let history = useHistory();

  let acceptInvitation = async () => {
    if (!currentUser) return history.push('/login?next=' + url);
    try {
      setUpdating(true);
      await methods.joinToodo(currentUser, listId);
      history.push('/dashboard');
    } catch (error) {
      Swal.fire('Error Occured!', error.message, 'warning');
      setUpdating(false);
    }
  };

  return (
    <>
      {loading && (
        <div className="flex justify-center items-center p-10 text-center">
          <Loading inline={true} />
        </div>
      )}

      {err && (
        <>
          <div className="flex justify-center items-center p-2 mt-10 text-center text-red-700">
            <Icon type="info" />
          </div>
          <div>
            <div className="text-2xl font-medium title-font text-gray-900 text-center">
              <div className="text-red-700">{err}</div>
              <div className="mt-10">
                <button className=" inline-block text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg mt-10 sm:mt-0">
                  {currentUser ? (
                    <Link to="/dashboard">Dashboard</Link>
                  ) : (
                    <Link to="/Login">Login</Link>
                  )}
                </button>
              </div>
            </div>
          </div>
        </>
      )}

      {toodo.name && (
        <section className="text-gray-600 body-font">
          <div className="container px-5 py-24 mx-auto">
            <div className="lg:w-2/3 flex flex-col sm:flex-row sm:items-center items-start mx-auto">
              <h1 className="flex-grow sm:pr-16 text-2xl font-medium title-font text-gray-900">
                You are invited to join a TooDo list{' '}
                <span className="text-indigo-600">"{toodo.name}"</span>.
              </h1>
              <Link
                to="dashboard"
                className="flex-shrink-0 text-grey-700 bg-white border-0 py-2 px-8 focus:outline-none hover:text-indigo-600 rounded text-lg mt-10 sm:mt-0"
              >
                Maybe later
              </Link>
              <button
                onClick={acceptInvitation}
                className="flex-shrink-0 text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg mt-10 sm:mt-0"
              >
                {updating && <Loading inline={true} height="24" width="24" />}{' '}
                Accept{' '}
                {!currentUser && (
                  <span className="text-sm">(Requires Login)</span>
                )}
              </button>
            </div>
          </div>
        </section>
      )}
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
