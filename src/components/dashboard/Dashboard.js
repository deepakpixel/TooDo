import ListName from './home/ListName';

import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';
import { useState } from 'react';

const Dashboard = () => {
  // fetch lists
  let listsData = [
    {
      id: 1,
      listName: 'Test todo list',
      createdAt: Date.now(),
      color: 'yellow',
    },
    {
      id: 2,
      listName: 'New project- Carnot',
      createdAt: Date.now(),
      color: 'purple',
    },
    { id: 3, listName: 'test', createdAt: Date.now(), color: 'green' },
  ];

  const [lists, setLists] = useState(listsData);

  const onDragEnd = (result) => {
    // dropped outside the list
    if (!result.destination) return;

    const [start, end] = [result.source.index, result.destination.index];

    if (start === end) return;
    let tempLists = Array.from(lists);
    const [removed] = tempLists.splice(start, 1);
    tempLists.splice(end, 0, removed);

    setLists(tempLists);
    console.log(tempLists);
  };

  return (
    <>
      <section className="select-none container px-5 py-8">
        <DragDropContext onDragEnd={onDragEnd}>
          <Droppable droppableId="droppable">
            {(provided) => (
              <div {...provided.droppableProps} ref={provided.innerRef}>
                {lists.map((list, index) => (
                  <Draggable
                    key={list.id}
                    draggableId={list.id.toString()}
                    index={index}
                  >
                    {(provided) => (
                      <div
                        ref={provided.innerRef}
                        {...provided.draggableProps}
                        {...provided.dragHandleProps}
                      >
                        <ListName list={list} key={Math.random()} />
                      </div>
                    )}
                  </Draggable>
                ))}
                {provided.placeholder}
              </div>
            )}
          </Droppable>
        </DragDropContext>
      </section>
    </>
  );
};

export default Dashboard;
