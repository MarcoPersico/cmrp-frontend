import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { AffiliateService } from '../../services/affiliate.service';
import AffiliateProfileContainer from '../AffiliateProfile';
import AffiliateResults from '../AffiliateSearch/components/AffiliateResults';
import Raccoon404 from '../../assests/Images/raccoon';

export default function AffiliateSearchRoutes() {
  const affiliateService = React.useContext(AffiliateService);

  return (
    <Switch>
      <Route path="/dashboard/search/results">
        <AffiliateResults results={affiliateService.results} />
      </Route>
      <Route path="/dashboard/search/selected/:id">
        <AffiliateProfileContainer />
      </Route>
      <Route path="/dashboard/search/not-found">
        <div className="CMRP_AffiliateSearch_notFound">
          <Raccoon404 />
          <p>No se encontraron resultados</p>
        </div>
      </Route>
    </Switch>
  );
}
