import { useEffect } from 'react';

const NotFound = (props) => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);
  return (
    <section className="max-w-4xl px-8 py-24">
      <h1 className="text-gray-500 text-9xl">
        404 <span className="text-6xl">Page not found</span>
      </h1>
      <h2 className="text-7xl">
        You enjoy surfing until I find out where it's hiding on the web.
      </h2>
    </section>
  );
};

export default NotFound;
