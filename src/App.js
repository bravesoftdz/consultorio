import React, { Fragment, Suspense, useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import './App.css';

import Login from './views/Login';
import Dashboard from './views/Dashboard'
import Services from './views/Services'
import Consultory from './views/Consultory';
import Trainings from './views/Trainings'
import Health from './views/Health';
import Contact from './views/Contact';
import AOS from 'aos'

// Redux
import { Provider } from 'react-redux'
import store from './redux/store'
import setAuthToken from './utils/setAuthToken'

// Actions 
import { authMe } from './redux/actions/auth'

let token = localStorage.getItem('token')

if (token) {
  setAuthToken(token);
}

const App = () => {

  useEffect(() => {
    store.dispatch(authMe())
    AOS.init({
      duration: 2000,
      once: true
    });
  }, [])


  window.addEventListener('load', AOS.refresh);

  const Home = React.lazy(() => import('./views/Home'))

  return (
    <div className="App">
      <Fragment>
        <Provider store={store}>
          <Suspense fallback={
            <div className="content" id="content">
              <div className="cube-wrapper">
                    <img width="100px" src={require('./images/logo.png')} />
                <span className="loading" data-name="Loading">Cargando</span>
              </div>
            </div>
          }
          >
            <Router>
              <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/admin" component={Login} />
                <Route exact path="/servicios" component={Services} />
                <Route exact path="/servicios/consultoría" component={Consultory} />
                <Route exact path="/servicios/asesoría-consultoría-sistemas-de-salud-ocupacional" component={Health} />
                <Route exact path="/servicios/capacitaciones" component={Trainings} />
                <Route exact path="/contacto" component={Contact} />
                <Dashboard />
              </Switch>
            </Router>
          </Suspense>
        </Provider>
      </Fragment>
    </div>
  );
}

export default App;
