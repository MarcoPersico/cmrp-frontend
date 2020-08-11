import React from 'react';
import {
  Switch, Route, Redirect,
} from 'react-router-dom';
import LoginModule from '../Login';
import { UserService } from '../../services/user.service';
import HeaderModule from '../Header';
import AffiliateSearchModule from '../AffiliateSearch';
import NewAffiliateModule from '../NewAffiliate';
import PayRegistryRoutes from './PayRegistry.routing';

const Routing = () => {
  const userService = React.useContext(UserService);
  const { isAuth } = userService;
  return (
    <>
      {isAuth
        ? <HeaderModule />
        : null}
      <Switch>
        <Route path="/login">
          {isAuth
            ? <Redirect to="/" />
            : <LoginModule />}
        </Route>
        <Route path="/dashboard/add">
          {isAuth
            ? <NewAffiliateModule />
            : <Redirect to="/" />}
        </Route>
        <Route path="/dashboard/search">
          {isAuth
            ? <AffiliateSearchModule />
            : <Redirect to="/" />}
        </Route>
        <Route path="/dashboard/pay-registry">
          {isAuth
            ? <PayRegistryRoutes />
            : <Redirect to="/" />}
        </Route>
        <Route path="/dashboard">
          {isAuth
            ? null
            : <Redirect to="/" />}
        </Route>
        <Route>
          {isAuth
            ? <Redirect to="/dashboard" />
            : <Redirect to="/login" />}
        </Route>
      </Switch>
    </>
  );
};

export default Routing;
