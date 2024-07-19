import { useState } from 'react';
import Swal from 'sweetalert2';
import Loading from '../../Loading';

import methods from '../../../utils/methods';
import { useAuth } from '../../../contexts/AuthContext';
import Icon from '../../Icons/Icon';
const ListName = (props) => {
  const { currentUser } = useAuth();

  const [loading, setLoading] = useState(false);
  const [shareModal, setShareModal] = useState(false);

  const Toast = Swal.mixin({
    toast: true,
    position: 'bottom-end',
    showConfirmButton: false,
    timer: 3000,
    timerProgressBar: true,
    didOpen: (toast) => {
      toast.addEventListener('mouseenter', Swal.stopTimer);
      toast.addEventListener('mouseleave', Swal.resumeTimer);
    },
  });

  const deleteList = async (list) => {
    try {
      setLoading(true);
      let tempLists = props.lists.filter((l) => l.id !== list.id);

      await methods.deleteList(list.id, currentUser);

      props.setActiveList({});
      props.setLists(tempLists);
      props.setShowEditListModal(0);
      Toast.fire({
        icon: 'success',
        title: 'List deleted!',
      });
    } catch (error) {
      Toast.fire({
        icon: 'warning',
        title: error.message || 'Unexpected error!',
      });
      setLoading(false);
    }
  };

  const monthNames = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ];

  // const colors = ['green', 'blue', 'indigo', 'yellow', 'purple', 'pink'];
  // let color = Math.floor(Math.random() * (colors.length - 1));

  let date = new Date(props.list.createdAt);
  let dateString = `${
    monthNames[date.getMonth()]
  } ${date.getDate()}, ${date.getFullYear()} ${date.toLocaleString('en-US', {
    hour: 'numeric',
    minute: 'numeric',
    hour12: true,
  })}`;
  return (
    <>
      {shareModal && (
        <div className="transition-all z-50 fixed inset-0 flex justify-center h-screen items-center bg-gray-200  bg-opacity-50">
          <div className="m-10 sm:w-1/2 animate-slide-up p-6 bg-white rounded">
            <p className={`text-${props.list.theme}-800 mb-2`}>
              Anyone with this link can join this TooDo list
            </p>
            <p
              className={`break-all resize-none no-scrollbar focus:border-${props.list.theme}-800 border-${props.list.theme}-400 border-2 w-full font-semibold shadow-sm bg-transparent outline-none p-1 rounded mb-2 bg-${props.list.theme}-50 text-gray-900 placeholder-${props.list.theme}-400`}
            >
              {'http://toodo.deepak.wiki/invitation?list=' + props.list.id}
            </p>
            <p
              onClick={async (e) => {
                try {
                  await navigator.clipboard.writeText(
                    'http://toodo.deepak.wiki/invitation?list=' +
                      props.list.id
                  );
                  Toast.fire({
                    icon: 'success',
                    title: 'Copied to clipboard!',
                  });
                } catch (error) {
                  Toast.fire({
                    icon: 'warning',
                    title: 'Unable to copy!',
                  });
                }
              }}
              className="text-xs font-bold hover:underline cursor-pointer "
            >
              Copy to clipboard
            </p>
            <div className="flex justify-end my-2">
              <button
                tabIndex="3"
                className={`inline-flex items-center text-${props.list.theme}-500 border-0 py-1 px-3 focus:outline-none 
                focus:bg-${props.list.theme}-100
                hover:bg-${props.list.theme}-100 rounded bg-white
              cursor-pointer border`}
                onClick={(e) => {
                  setShareModal(false);
                }}
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
      <div className="flex items-center">
        <div
          onClick={(e) => props.setActiveList(props.list)}
          className={`cursor-pointer transition-colors inline-block text-white hover:bg-${props.list.theme}-900 bg-${props.list.theme}-600 shadow-lg rounded-xl px-4 py-2 mt-2`}
        >
          <div className="font-medium text-xl">{props.list.name}</div>
          <div className="text-sm">{props.list.description}</div>
          <div className="text-xs text-white">
            <i>{dateString}</i>
          </div>
        </div>
        <div className="flex justify-center items-center ">
          <div className="flex flex-row rounded-full bg-gray-100 ml-4 px-1 cursor-pointer">
            <div
              onClick={(e) => {
                props.setOld(props.list);
                props.setActiveList({});
                props.setShowEditListModal(-1);
              }}
              className="p-1 text-gray-500 hover:text-gray-900"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 24 24"
                width="24px"
                height="24px"
                className=" inline-block"
              >
                <path d="M 18.414062 2 C 18.158062 2 17.902031 2.0979687 17.707031 2.2929688 L 15.707031 4.2929688 L 14.292969 5.7070312 L 3 17 L 3 21 L 7 21 L 21.707031 6.2929688 C 22.098031 5.9019687 22.098031 5.2689063 21.707031 4.8789062 L 19.121094 2.2929688 C 18.926094 2.0979687 18.670063 2 18.414062 2 z M 18.414062 4.4140625 L 19.585938 5.5859375 L 18.292969 6.8789062 L 17.121094 5.7070312 L 18.414062 4.4140625 z M 15.707031 7.1210938 L 16.878906 8.2929688 L 6.171875 19 L 5 19 L 5 17.828125 L 15.707031 7.1210938 z" />
              </svg>
            </div>

            <div
              onClick={(e) => {
                deleteList(props.list);
              }}
              className="p-1 text-red-300 hover:text-red-700"
            >
              {loading ? (
                <Loading height={24} width={24} inline={true} />
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  width="24px"
                  height="24px"
                  className=" inline-block"
                >
                  <path d="M 10 2 L 9 3 L 4 3 L 4 5 L 5 5 L 5 20 C 5 20.522222 5.1913289 21.05461 5.5683594 21.431641 C 5.9453899 21.808671 6.4777778 22 7 22 L 17 22 C 17.522222 22 18.05461 21.808671 18.431641 21.431641 C 18.808671 21.05461 19 20.522222 19 20 L 19 5 L 20 5 L 20 3 L 15 3 L 14 2 L 10 2 z M 7 5 L 17 5 L 17 20 L 7 20 L 7 5 z M 9 7 L 9 18 L 11 18 L 11 7 L 9 7 z M 13 7 L 13 18 L 15 18 L 15 7 L 13 7 z" />
                </svg>
              )}
            </div>
          </div>
          <span
            onClick={(e) => {
              setShareModal(true);
            }}
            className="ml-1 cursor-pointer hover:text-blue-700 rounded-full hover:bg-gray-200 p-1"
          >
            <Icon type="share" />
          </span>
        </div>
      </div>
    </>
  );
};

export default ListName;
