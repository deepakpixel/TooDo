import app from '../config/firebase';
import firebase from 'firebase/app';

const methods = {
  generateUsername() {
    const firstName = [
      'jubilant',
      'fluffy',
      'furry',
      'musical',
      'congenial',
      'shiny',
      'improved',
    ];
    const lastName = [
      'spork',
      'waddle',
      'guacamole',
      'sniffle',
      'journey',
      'funicular',
      'journey',
    ];

    return (
      firstName[parseInt(Math.random() * firstName.length)] +
      '-' +
      lastName[parseInt(Math.random() * lastName.length)]
    );
  },
  fetchLists: async (uid) => {
    const Toodo = app.firestore().collection('toodos');
    const User = app.firestore().collection('users');
    let toodos = await User.doc(uid).get();
    toodos = toodos.data().toodos;

    let queue = [];
    toodos.forEach((toodo) => {
      queue.push(Toodo.doc(toodo).get());
    });
    queue = await Promise.all(queue);
    toodos = queue.map((q, index) => {
      return { ...q.data(), id: toodos[index] };
    });
    return toodos;
  },
  createList: async (newList, currentUser) => {
    const Toodo = app.firestore().collection('toodos');
    const User = app.firestore().collection('users');

    newList = await Toodo.add({
      ...newList,
      owner: currentUser.uid,
      tasks: [],
    });
    let id = newList.id;

    await User.doc(currentUser.uid).update({
      toodos: firebase.firestore.FieldValue.arrayUnion(id),
    });
    newList = await newList.get();
    return { ...newList.data(), id };
  },
  updateList: async (updatedList) => {
    const Toodo = app.firestore().collection('toodos');
    await Toodo.doc(updatedList.id).update(updatedList);
  },
  deleteList: async (listId, currentUser) => {
    // const Toodo = app.firestore().collection('toodos');
    const User = app.firestore().collection('users');
    User.doc(currentUser.uid).update({
      toodos: firebase.firestore.FieldValue.arrayRemove(listId),
    });
    // if ((await Toodo.doc(listId).get()).data().owner === currentUser.uid) {
    //   await Toodo.doc(listId).delete();
    // }
  },
  addTask: async (newTask, listId) => {
    const Toodo = app.firestore().collection('toodos');
    await Toodo.doc(listId).update({
      tasks: firebase.firestore.FieldValue.arrayUnion(newTask),
    });
  },
  markTask: async (updatedTask, listId) => {
    const Toodo = app.firestore().collection('toodos');
    // let tasks = (await Toodo.doc(listId).get()).data().tasks;
    // await Toodo.doc(listId).update({
    //   tasks: {
    //     ...tasks.filter((t) => t.name !== updatedTask.name),
    //     ...updatedTask,
    //   },
    // });
    await Toodo.doc(listId).update({
      tasks: firebase.firestore.FieldValue.arrayRemove({
        ...updatedTask,
      }),
    });
    await Toodo.doc(listId).update({
      tasks: firebase.firestore.FieldValue.arrayUnion({
        ...updatedTask,
        isDone: !updatedTask.isDone,
      }),
    });
  },
  deleteTask: async (task, listId) => {
    const Toodo = app.firestore().collection('toodos');
    let tasks = (await Toodo.doc(listId).get()).data().tasks;
    await Toodo.doc(listId).update({
      tasks: tasks.filter((t) => t.name !== task.name),
    });
  },
  findToodo: async (id) => {
    const Toodo = app.firestore().collection('toodos');
    return (await Toodo.doc(id).get()).data();
  },
  joinToodo: async (currentUser, listId) => {
    const User = app.firestore().collection('users');
    await User.doc(currentUser.uid).update({
      toodos: firebase.firestore.FieldValue.arrayUnion(listId),
    });
  },
};

export default methods;
