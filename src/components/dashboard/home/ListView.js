import { useState, useRef } from 'react';
import Swal from 'sweetalert2';

import { useEffect } from 'react';
import { useAuth } from '../../../contexts/AuthContext';
import Loading from '../../Loading';
import Icon from './../../Icons/Icon';
import Tasks from './Tasks';
import methods from '../../../utils/methods';
import app from '../../../config/firebase';

const ListView = (props) => {
  const { currentUser } = useAuth();
  useEffect(() => {
    const unsubscribe = app
      .firestore()
      .collection('toodos')
      .doc(props.activeList.id)
      .onSnapshot(async (querySnapshot) => {
        // var cities = [];
        // querySnapshot.forEach((doc) => {
        //   cities.push(doc.data().name);
        console.log(querySnapshot.data());
        let toodos = await methods.fetchLists(currentUser.uid);
        setTimeout(() => {
          props.setLists(toodos);
          let index = toodos.findIndex((t) => t.id === props.activeList.id);
          props.setActiveList(toodos[index]);
        }, 100);
        // });
        // console.log('Current cities in CA: ', cities.join(', '));
      });
    return (e) => unsubscribe();
  }, [currentUser.uid]);

  const newTaskRef = useRef();

  const [showCreateTask, setShowCreateTask] = useState(false);
  const [addingTask, setAddingTask] = useState(false);

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

  const addTask = async (e) => {
    try {
      if (!newTaskRef.current.value.trim()) throw Error('Empty task name!');
      // if task already exists
      const checkTasks = (obj) => obj.name === newTaskRef.current.value.trim();

      if (props.activeList.tasks && props.activeList.tasks.some(checkTasks))
        throw Error('Task already exists!');

      setAddingTask(true);
      let newTask = {
        name: newTaskRef.current.value,
        createdAt: Date.now(),
        updatedAt: Date.now(),
        createdBy: currentUser.uid,
        updatedBy: currentUser.uid,
        isDone: false,
      };

      await methods.addTask(newTask, props.activeList.id);

      // change locally

      let tempLists = props.lists;
      let index = tempLists.findIndex((x) => x.id === props.activeList.id);
      if (index === -1) throw Error('Something went wrong!');

      tempLists[index].tasks.push(newTask);

      props.setLists(tempLists);

      // props.setLists(tempLists);
      // props.setShowEditListModal(0);
      // props.setActiveList({});
      Toast.fire({
        icon: 'success',
        title: 'Task added!',
      });
    } catch (error) {
      Toast.fire({
        icon: 'warning',
        title: error.message || 'Unexpected error!',
      });
    }
    setAddingTask(false);
    setShowCreateTask(false);
  };
  const suggestTask = () => {
    let tasks = [
      'Drink water 🥛',
      'Play Chess ♟',
      'Do exercise 🏃‍♂️',
      'Take a walk 🚶‍♂️',
      'Organize desk 🖥',
      'Read book 📖',
    ];
    if (tasks.indexOf(newTaskRef.current.value) !== -1) {
      tasks = tasks.filter((task) => task !== newTaskRef.current.value);
    }
    newTaskRef.current.value = tasks[Math.floor(Math.random() * tasks.length)];
  };

  return (
    <aside
      className={`absolute inset-0 sm:static min-w-1/2 flex-grow bg-${props.activeList.theme}-100 overflow-auto select-none pb-28 overflow-auto no-scrollbar`}
    >
      <div
        className={`text-${props.activeList.theme}-900 bg-${props.activeList.theme}-200 p-4 shadow`}
      >
        <span
          className=""
          onClick={(e) => {
            props.setActiveList({});
          }}
        >
          <span>
            <Icon type="arrow" />
          </span>
          <span className="cursor-pointer hover:underline">Go back</span>
        </span>
        <div>
          <span
            onClick={(e) => {
              props.setActiveList({});
            }}
            className="hover:underline cursor-pointer"
          >
            {/* My Lists / */}
          </span>{' '}
          <span className="text-3xl">{props.activeList.name}</span>
        </div>
      </div>

      {showCreateTask && (
        <div className="transition-all z-50 fixed inset-0 flex justify-center h-screen items-center bg-gray-200  bg-opacity-50">
          <div className="animate-slide-up p-6 bg-white rounded">
            <input
              ref={newTaskRef}
              tabIndex="1"
              type="text"
              placeholder="New task"
              className={`focus:border-${props.activeList.theme}-800 border-${props.activeList.theme}-400 border-2 w-full text-xl font-semibold shadow-sm bg-transparent outline-none p-2 rounded mb-2 bg-${props.activeList.theme}-50 text-gray-900 placeholder-${props.activeList.theme}-400`}
              autoFocus
            />
            <p className="text-xs ">
              Forgot something?{' '}
              <span
                className="font-bold hover:underline cursor-pointer"
                onClick={suggestTask}
              >
                Click here
              </span>
            </p>
            <div className="flex justify-end my-2">
              <span>
                {addingTask && <Loading inline={true} height="24" width="24" />}
                <button
                  tabIndex="2"
                  onClick={addTask}
                  className={`inline-flex items-center bg-${props.activeList.theme}-500 border-0 py-1 px-3 focus:outline-none
                focus:bg-${props.activeList.theme}-600
                hover:bg-${props.activeList.theme}-600 rounded text-white  mx-2
              cursor-pointer`}
                >
                  Add task
                </button>
              </span>
              <button
                tabIndex="3"
                className={`inline-flex items-center text-${props.activeList.theme}-500 border-0 py-1 px-3 focus:outline-none 
                focus:bg-${props.activeList.theme}-100
                hover:bg-${props.activeList.theme}-100 rounded bg-white
              cursor-pointer border`}
                onClick={(e) => {
                  setShowCreateTask(false);
                }}
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}

      <div className="p-4">
        <div className={`font-bold text-${props.activeList.theme}-700`}>
          <span onClick={(e) => setShowCreateTask(true)}>
            <span>+ </span>
            <span className="cursor-pointer hover:underline">New task</span>
          </span>
        </div>

        {props.activeList.tasks.length ? (
          <Tasks
            lists={props.lists}
            setLists={props.setLists}
            // tasks={props.activeList.tasks}
            activeList={props.activeList}
            setActiveList={props.setActiveList}
          />
        ) : (
          <div className="p-4 rounded inline-block text-center">
            <p className="font-bold text-black text-opacity-50">
              Don't you wish this list should remain empty? Alas!
            </p>
            <div className="my-2">
              <span
                onClick={(e) => {
                  setShowCreateTask(true);
                }}
              >
                <div>
                  <span
                    className={`inline-flex items-center bg-${props.activeList.theme}-500 border-0 py-1 px-3 focus:outline-none hover:bg-${props.activeList.theme}-600 rounded text-white mt-4
              cursor-pointer`}
                  >
                    + Add task
                  </span>
                </div>
              </span>
            </div>
          </div>
        )}
      </div>
    </aside>
  );
};

export default ListView;
