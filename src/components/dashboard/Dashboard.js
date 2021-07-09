import Home from './home/Home';
import Loading from '../Loading';
import { useEffect, useState } from 'react';
import Swal from 'sweetalert2';

const Dashboard = () => {
  const [lists, setLists] = useState(null);
  const [isPending, setIsPending] = useState(false);
  const [activeList, setActiveList] = useState(null);

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
        let res = await fetch(`${process.env.REACT_APP_BACKEND_URL}/lists`);

        if (!res.ok) throw Error('Request failed!');
        res.data = await res.json();

        setLists(res.data);
      } catch (error) {
        Toast.fire({
          icon: 'warning',
          title: error.message || 'Unexpected error!',
        });
      }
      setIsPending(false);
    }
    main();
  }, []);

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
