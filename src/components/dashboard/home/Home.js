import ListName from './ListName';

import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';
import { useState } from 'react';

import EditListModal from './EditListModal';
// import { useEffect } from 'react';

const Home = ({ lists, setLists }) => {
  console.log('lists', lists);
  const [showEditListModal, setShowEditListModal] = useState(0); // 0:Nothing 1:New -1:Edit

  const [old, setOld] = useState({});

  // fetch lists
  // let listsData = [
  //   {
  //     id: 1,
  //     listName: 'Test todo list',
  //     createdAt: Date.now(),
  //     color: 'yellow',
  //     description: 'test description',
  //   },
  //   {
  //     id: 2,
  //     listName: 'New project- Carnot',
  //     createdAt: Date.now(),
  //     color: 'purple',
  //     description: 'About new project fror carnot education',
  //   },
  //   {
  //     id: 3,
  //     listName: 'test',
  //     createdAt: Date.now(),
  //     color: 'green',
  //     description: 'About new project',
  //   },
  // ];

  const onDragEnd = (result) => {
    // dropped outside the list
    if (!result.destination) return;

    const [start, end] = [result.source.index, result.destination.index];

    if (start === end) return;
    let tempLists = Array.from(lists);
    const [removed] = tempLists.splice(start, 1);
    tempLists.splice(end, 0, removed);

    setLists(tempLists);
  };

  return (
    <>
      <section className="select-none container px-5 py-8">
        <div className="font-bold text-indigo-600">
          <span onClick={(e) => setShowEditListModal(1)}>
            <span>+ </span>
            <span className="cursor-pointer hover:underline">
              Create new list
            </span>
          </span>
        </div>
        {showEditListModal !== 0 && (
          <EditListModal
            old={showEditListModal === -1 ? old : {}}
            setShowEditListModal={setShowEditListModal}
            lists={lists}
            setLists={setLists}
          />
        )}

        {!lists.length && (
          <div>
            <div className="my-4 p-4 bg-indigo-100 rounded inline-block">
              Looks like you don't have any TooDo lists. <br />
              <div className="my-2">
                <span onClick={(e) => setShowEditListModal(1)}>
                  <span
                    className="
              inline-flex items-center bg-indigo-500 border-0 py-1 px-3 focus:outline-none hover:bg-indigo-600 rounded text-white mt-4 md:mt-0
              cursor-pointer"
                  >
                    Create a TooDo
                  </span>
                </span>
              </div>
            </div>
          </div>
        )}

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
                        <ListName
                          setShowEditListModal={setShowEditListModal}
                          lists={lists}
                          setLists={setLists}
                          setOld={setOld}
                          list={list}
                          key={Math.random()}
                        />
                      </div>
                    )}
                  </Draggable>
                ))}
                {provided.placeholder}
              </div>
            )}
          </Droppable>
        </DragDropContext>

        {lists.length > 1 && (
          <div className="text-sm text-green-600 m-2">
            TIP: You can drag items to change order
          </div>
        )}
      </section>
    </>
  );
};

export default Home;
