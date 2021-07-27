import { useState } from 'react';
import Swal from 'sweetalert2';
import Icon from '../../Icons/Icon';
import Task from './Task';

const Tasks = (props) => {
  console.log('TASKS RRENDERED');
  const activeList = props.lists.find(
    (list) => list.id === props.activeList.id
  );

  activeList.tasks.sort((a, b) => a.createdAt - b.createdAt);

  return (
    <>
      {activeList.tasks.map((task) => {
        return (
          <Task
            task={task}
            lists={props.lists}
            setLists={props.setLists}
            key={task.name}
            setActiveList={props.setActiveList}
            activeList={activeList}
          />
        );
      })}
    </>
  );
};

export default Tasks;
