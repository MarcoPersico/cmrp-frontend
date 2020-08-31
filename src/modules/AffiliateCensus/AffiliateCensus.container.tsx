/* eslint-disable react-hooks/exhaustive-deps */
import React from 'react';
import AffiliateCensus from './AffiliateCensus.component';
import { AffiliateService, AffiliateCensus as AffiliateCensusType } from '../../services/affiliate.service';

const AffiliateCensusModule = () => {
  const affiliateService = React.useContext(AffiliateService);
  const [affiliates, setAffiliates] = React.useState<AffiliateCensusType[]>([]);

  React.useEffect(() => {
    affiliateService.getAll('name', 'ASC').then((data) => setAffiliates(data));
  }, []);

  const sortAffiliates = (
    column: 'name' | 'affiliate' | 'registeredAt' | 'city' | 'department',
    sort: 'ASC' | 'DESC' | null,
  ) => (
    affiliateService.getAll(column, sort)
      .then((data) => setAffiliates(data))
  );

  return (
    <AffiliateCensus affiliates={affiliates} onSort={sortAffiliates} />
  );
};

export default AffiliateCensusModule;
