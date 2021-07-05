import { useState } from 'react';
import Hero from './components/website/Hero';
import Footer from './components/website/Footer';
import Content from './components/website/Content';
import Header from './components/website/Header';
import Contact from './components/website/Contact';
import Demo from './components/website/Demo';
import NotFound from './components/NotFound';

import Login from './components/dashboard/Login';
import Signup from './components/dashboard/Signup';

import './css/style.css';

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

const App = () => {
  const [loggedIn, setLoggedIn] = useState(false);

  return (
    <Router>
      <div>
        <Header loggedIn={loggedIn} />
        <Switch>
          <Route exact path="/">
            <Hero />
            <Content />
            <Demo />
            <Contact />
          </Route>
          <Route path="/login">
            <Login setLoggedIn={setLoggedIn} />
            <Content />
            <Demo />
            <Contact />
          </Route>
          <Route path="/signup">
            <Signup />
            <Content />
            <Demo />
            <Contact />
          </Route>
          <Route>
            <NotFound />
          </Route>
        </Switch>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
