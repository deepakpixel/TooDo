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
import Invitation from './components/dashboard/Invitation';

import PrivateRoute from './components/PrivateRoute';
import PublicRoute from './components/PublicRoute';

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
              <Content />
              <Demo />
              <Contact />
              <Footer />
            </Route>

            <Route path="/invitation" component={Invitation} />
            <PublicRoute path="/login" component={Login} />
            <PublicRoute path="/signup" component={Signup} />
            <PrivateRoute path="/dashboard" component={Dashboard} />

            <Route>
              <NotFound />
            </Route>
          </Switch>
        </AuthProvider>
      </div>
    </Router>
  );
};

export default App;
