// import { useState } from 'react';
import Hero from './components/website/Hero';
import Footer from './components/website/Footer';
import Content from './components/website/Content';
import Header from './components/website/Header';
import Contact from './components/website/Contact';
import './css/style.css';

const App = () => {
  // const [loggedIn, setLoggedIn] = useState(false);
  return (
    <div>
      <Header />
      <Hero />
      <Content />
      <Contact />
      <Footer />
    </div>
  );
};

export default App;
