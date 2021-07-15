// import { useState } from 'react';
import Hero from './components/website/Hero';
import Footer from './components/website/Footer';
import Content from './components/website/Content';
import Header from './components/website/Header';
import Contact from './components/website/Contact';
import Demo from './components/website/Demo';
import NotFound from './components/NotFound';

import { AuthProvider } from './contexts/AuthContext';
import Login from './components/dashboard/Login';
import Signup from './components/dashboard/Signup';
import Dashboard from './components/dashboard/Dashboard';

import PrivateRoute from './components/privateRoute';
import PublicRoute from './components/publicRoute';

import './css/style.css';

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

const App = () => {
  // const [loggedIn, setLoggedIn] = useState(false);

  return (
    <Router>
      <div>
        <AuthProvider>
          <Header />
          <Switch>
            <Route exact path="/">
              <Hero />
            </Route>

            <PublicRoute path="/login" component={Login} />
            <PublicRoute path="/signup" component={Signup} />
            <PrivateRoute path="/dashboard" component={Dashboard} />

            <Route>
              <NotFound />
            </Route>
          </Switch>

          <Content />
          <Demo />
          <Contact />
          <Footer />
        </AuthProvider>
      </div>
    </Router>
  );
};

export default App;
