import { useState, useEffect } from 'react';
import Swal from 'sweetalert2';

import Loading from '../../Loading';
import methods from '../../../utils/methods';
import { useAuth } from '../../../contexts/AuthContext';

const EditListModal = (props) => {
  const colors = ['indigo', 'yellow', 'red', 'purple', 'pink', 'blue', 'green'];
  let color = Math.floor(Math.random() * colors.length);

  const [theme, setTheme] = useState(props.old.theme || colors[color]);
  const [listName, setListName] = useState(props.old.name || '');
  const [description, setDescription] = useState(props.old.description || '');
  const [loading, setLoading] = useState(false);

  const { currentUser } = useAuth();

  useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === 'Escape' || e.key === 'Esc') props.setShowEditListModal(0);
    };

    window.addEventListener('keyup', handleEsc);
    return () => {
      window.removeEventListener('keyup', handleEsc);
    };
  }, [props]);

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

  const handleListSave = async (e) => {
    try {
      setLoading(true);

      if (!listName.trim()) {
        throw Error('Name your list');
      }

      if (props.old.id) {
        // Update item
        // let tempLists = Array.from(props.lists);
        let tempLists = props.lists;
        let index = tempLists.findIndex((x) => x.id === props.old.id);
        if (index === -1) throw Error('Something went wrong!');

        let updatedList = {
          name: listName.trim(),
          description: description.trim() || 'No description',
          theme: theme,
          createdAt: Date.now(),
          id: props.old.id,
        };

        await methods.updateList(updatedList);

        tempLists[index] = { ...tempLists[index], ...updatedList };

        props.setLists(tempLists);
        props.setShowEditListModal(0);

        Toast.fire({
          icon: 'success',
          title: 'List updated!',
        });
      } else {
        // create new list
        let newList = {
          name: listName.trim(),
          description: description.trim() || 'No description',
          theme: theme,
          createdAt: Date.now(),
        };

        newList = await methods.createList(newList, currentUser);

        props.setLists([...props.lists, newList]);
        props.setShowEditListModal(0);

        Toast.fire({
          icon: 'success',
          title: 'New list created!',
        });
      }
    } catch (error) {
      Toast.fire({
        icon: 'warning',
        title: error.message || 'Unexpected error!',
      });
      setLoading(false);
    }
  };
  return (
    <section className="z-50 fixed inset-0 flex justify-center h-screen items-center bg-gray-200  bg-opacity-50">
      <div className=" flex flex-col w-11/12 sm:w-5/6 lg:w-1/2 max-w-2xl mx-auto rounded-lg border border-gray-300 shadow-xl">
        <div className="flex flex-row justify-between p-4 bg-white border-b border-gray-200 rounded-tl-lg rounded-tr-lg">
          <p className="font-semibold font-medium text-gray-800">
            {props.old.id ? 'Update' : 'Create new'} list
          </p>
          <svg
            className={`w-6 h-6 cursor-pointer hover:bg-${theme}-500 rounded`}
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
            onClick={(e) => props.setShowEditListModal(0)}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M6 18L18 6M6 6l12 12"
            ></path>
          </svg>
        </div>
        <div className="flex flex-col px-6 py-5 bg-gray-50">
          <p className=" font-semibold text-gray-700">List name</p>
          <input
            maxLength="32"
            value={listName}
            autoFocus
            tabIndex="1"
            type="text"
            placeholder="List name"
            className={`text-xl font-semibold shadow-sm resize-none
            bg-transparent outline-none 
            p-2 rounded-xl mb-2
            inline
            bg-${theme}-100 text-gray-900 placeholder-gray-400`}
            id=""
            onChange={(e) => {
              setListName(e.target.value);
            }}
          />

          <div className="switcher  h8 space-x-2">
            <button
              data-theme="indigo"
              onClick={(e) => setTheme(e.target.dataset.theme)}
              className={`theme-button bg-indigo-500 ${
                theme === 'indigo' ? 'is-active' : ''
              }`}
            ></button>
            <button
              data-theme="yellow"
              onClick={(e) => setTheme(e.target.dataset.theme)}
              className={`theme-button bg-yellow-500 ${
                theme === 'yellow' ? 'is-active' : ''
              }`}
            ></button>
            <button
              data-theme="red"
              onClick={(e) => setTheme(e.target.dataset.theme)}
              className={`theme-button bg-red-500 ${
                theme === 'red' ? 'is-active' : ''
              }`}
            ></button>
            <button
              data-theme="purple"
              onClick={(e) => setTheme(e.target.dataset.theme)}
              className={`theme-button bg-purple-500 ${
                theme === 'purple' ? 'is-active' : ''
              }`}
            ></button>
            <button
              data-theme="pink"
              onClick={(e) => setTheme(e.target.dataset.theme)}
              className={`theme-button bg-pink-500 ${
                theme === 'pink' ? 'is-active' : ''
              }`}
            ></button>
            <button
              data-theme="blue"
              onClick={(e) => setTheme(e.target.dataset.theme)}
              className={`theme-button bg-blue-500 ${
                theme === 'blue' ? 'is-active' : ''
              }`}
            ></button>
            <button
              data-theme="green"
              onClick={(e) => setTheme(e.target.dataset.theme)}
              className={`theme-button bg-green-500 ${
                theme === 'green' ? 'is-active' : ''
              }`}
            ></button>
          </div>

          <p className="mb-2 font-semibold text-gray-700">Description</p>
          <textarea
            maxLength="10"
            onFocus={(e) =>
              e.target.setSelectionRange(
                e.target.value.length,
                e.target.value.length
              )
            }
            value={description}
            tabIndex="2"
            type="text"
            name=""
            placeholder="This to-do list is about..."
            className={`p-2 mb-5 bg-white border border-gray-200 rounded shadow-sm h-20 resize-none outline-none focus:ring 
                        bg-${theme}-100 text-gray-900 placeholder-gray-400`}
            id=""
            onChange={(e) => {
              setDescription(e.target.value);
            }}
          ></textarea>
        </div>
        <div className="flex flex-row items-center justify-between p-5 bg-white border-t border-gray-200 rounded-bl-lg rounded-br-lg">
          <button
            tabIndex="4"
            onClick={(e) => props.setShowEditListModal(0)}
            className="px-4 py-2 font-semibold text-gray-600 hover:text-gray-900"
          >
            Cancel
          </button>
          <div>
            <span className="p-2">{loading && <Loading inline={true} />}</span>
            <button
              tabIndex="3"
              onClick={handleListSave}
              className={`px-4 py-2 text-white font-semibold bg-${theme}-500 rounded disabled:cursor-wait`}
              disabled={loading}
            >
              Save
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EditListModal;
