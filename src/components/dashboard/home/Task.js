import { useState } from 'react';
import Swal from 'sweetalert2';
import Icon from './../../Icons/Icon';
import methods from '../../../utils/methods';
import Loading from '../../Loading';

const Task = (props) => {
  const [updating, setUpdating] = useState(false);
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

  const [isDone, setIsDone] = useState(props.task.isDone || false);
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
  let date = new Date(props.task.createdAt);
  const dateString = () =>
    `${
      monthNames[date.getMonth()]
    } ${date.getDate()}, ${date.getFullYear()} ${date.toLocaleString('en-US', {
      hour: 'numeric',
      minute: 'numeric',
      hour12: true,
    })}`;

  const markTask = async () => {
    try {
      // update on server
      let tempLists = props.lists;
      let index = tempLists.findIndex((x) => x.id === props.activeList.id);
      if (index === -1) throw Error('List data not found!');

      let index2 = tempLists[index].tasks.findIndex(
        (x) => x.name === props.task.name
      );
      if (index2 === -1) throw Error('Task data not found!');

      setUpdating(true);
      await methods.markTask(
        tempLists[index].tasks[index2],
        props.activeList.id
      );
      // mark local done

      tempLists[index].tasks[index2].isDone = !props.task.isDone;

      props.setLists(tempLists);
      setIsDone(!isDone);
    } catch (error) {
      Toast.fire({
        icon: 'warning',
        title: error.message || 'Unexpected error!',
      });
    }
    setUpdating(false);
  };

  const deleteTask = async (task) => {
    try {
      // update on server
      let tempLists = props.lists;

      let index = tempLists.findIndex((x) => x.id === props.activeList.id);
      if (index === -1) throw Error('List data not found!');

      let index2 = tempLists[index].tasks.findIndex(
        (x) => x.name === props.task.name
      );
      if (index2 === -1) throw Error('Task data not found!');

      setUpdating(true);
      await methods.deleteTask(props.task, props.activeList.id);

      // mark local done
      // temporary comment to see wheather auto update works
      // delete tempLists[index].tasks[index2];
      // tempLists[index].tasks = tempLists[index].tasks.filter(Boolean);

      setUpdating(false);
      // props.setActiveList(tempLists[index]);
      // temporary comment to see wheather auto update works
      // props.setActiveList({ ...props.activeList, localUpdated: Date.now() }); //Because the state was not updating after deletion for some reason thats wht Date.now(), works like force update
      props.setLists(tempLists);
    } catch (error) {
      Toast.fire({
        icon: 'warning',
        title: error.message || 'Unexpected error!',
      });
      setUpdating(false);
    }
  };

  return (
    <div className="flex items-center inline-block mt-2 relative">
      <div className={`inline-block shadow-lg rounded-xl px-4 bg-white`}>
        <label className="flex items-center">
          <input
            type="checkbox"
            id="task-id"
            checked={props.task.isDone}
            onChange={markTask}
          />
          <p className="p-2">{props.task.name}</p>
          {updating && <Loading inline={true} height="24" width="24" />}
        </label>
      </div>
      <span
        className="m-2 hover:text-indigo-400 text-indigo-900 cursor-pointer"
        onClick={(e) =>
          Swal.fire({
            titleText: 'Task Details',
            html: `
            <p><strong>Last updated:</strong>${dateString(
              props.task.updatedAt
            )}</p>
            <p><strong>Created at:</strong>${dateString(
              props.task.createdAt
            )}</p>
            <div class="text-xs bg-yellow-100 rounded mt-4 p-1">
              <div >
                <strong>Created by:</strong> ${
                  props.task.createdBy
                } <span class="hidden">at ${dateString(
              props.task.createdAt
            )}</span>
              </div>
              <div>
              <strong>Last edited by:</strong> ${
                props.task.updatedBy
              } <span class="hidden">at ${dateString(
              props.task.updatedAt
            )}</span>
              </div>
            </div>
            `,
            confirmButtonText: 'Ok, Got it!',
          })
        }
      >
        <Icon type="info" />
        {/* <span className="text-xs absolute left-0 min-w-max top-full">
          Last updated: {dateString(props.task.updatedAt)}
        </span> */}
      </span>
      <span
        className="text-red-300 hover:text-red-700 cursor-pointer"
        onClick={deleteTask}
      >
        <Icon type="trash" />
      </span>
    </div>
  );
};

export default Task;
