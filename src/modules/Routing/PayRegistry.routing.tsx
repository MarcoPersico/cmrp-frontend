import React from 'react';
import { Route, Switch } from 'react-router-dom';
import NewPayRegistryModule from '../NewPayRegistry';
import PayRegistryResultsModule from '../PayRegistryResults';
import PayRegistrySelectedModule from '../PayRegistrySelected';

export default function PayRegistryRoutes() {
  return (
    <Switch>
      <Route path="/dashboard/pay-registry/results">
        <PayRegistryResultsModule />
      </Route>
      <Route path="/dashboard/pay-registry/selected/:id">
        <PayRegistrySelectedModule />
      </Route>
      <Route path="/dashboard/pay-registry/generate-pay-register">
        <NewPayRegistryModule />
      </Route>
    </Switch>
  );
}
