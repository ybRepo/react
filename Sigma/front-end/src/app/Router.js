import React from 'react';
import {Route, Switch} from 'react-router-dom';
import Layout from '../containers/_layout/Layout';
import MainWrapper from './MainWrapper';

import LogIn from '../containers/log_in/LogIn';
import CreditHome from '../containers/credit/CreditHome';
import Application from '../containers/application/Application';
import Register from '../containers/register/Register';
import NotFound404 from '../containers/404/404';
import Account from  '../containers/profile/Profile'

const Router = () => (
  <MainWrapper>
    <main>
      <Switch>
        <Route exact path='/' component={LogIn}/>
        <Route exact path='/log_in' component={LogIn}/>
        <Route exact path='/register' component={Register}/>
        <Route path='/404' component={NotFound404}/>
        <Route path='/' component={wrappedRoutes}/>
      </Switch>
    </main>
  </MainWrapper>
);

const wrappedRoutes = () => (
  <div>
    <Layout/>
    <div className='container__wrap'>
      <Route path='/module' component={Pages}/>
      <Route path='/account' component={Account}/>
    </div>
  </div>
);

const Pages = () => (
  <Switch>
    <Route exact path='/module/credit' component={CreditHome}/>
    <Route path='/module/credit/:id' component={Application}/>
    <Route path='/module/futureDev' component={NotFound404}/>
  </Switch>
);

export default Router;
