import { useEffect, useState } from 'react';
import Swal from 'sweetalert2';
import app from '../../config/firebase';

import { useAuth } from '../../contexts/AuthContext';
import methods from '../../utils/methods';

import Home from './home/Home';
import Loading from '../Loading';

const Dashboard = () => {
  const [lists, setLists] = useState(null);
  const [isPending, setIsPending] = useState(false);
  // const [activeList, setActiveList] = useState(null);

  const { currentUser } = useAuth();
  useEffect(() => {
    const unsubscribe = app
      .firestore()
      .collection('users')
      .doc(currentUser.uid)
      .onSnapshot(async (querySnapshot) => {
        let toodos = await methods.fetchLists(currentUser.uid);
        setLists(toodos);
      });
    return (e) => unsubscribe();
  }, [currentUser.uid]);

  useEffect(() => {
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

    async function main() {
      setIsPending(true);
      try {
        let toodos = await methods.fetchLists(currentUser.uid);
        setLists(toodos);
      } catch (error) {
        Toast.fire({
          icon: 'warning',
          title: error.message || 'Unexpected error!',
        });
      }
      setIsPending(false);
    }
    main();
  }, [currentUser]);

  // useEffect(() => {
  //   if (lists == null) return;
  //   // Save to localstorage
  //   window.localStorage.setItem('lists', JSON.stringify(lists));
  //   return () => {
  //     // cleanup function
  //   };
  // }, [lists]);

  return (
    <div className="min-h-screen">
      {isPending && <Loading />}
      {lists && <Home lists={lists} setLists={setLists} />}
    </div>
  );
};

export default Dashboard;
