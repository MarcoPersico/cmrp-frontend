import React from 'react';
import { Shared } from '../Shared';
import AffiliateSearch from './components/AffiliateSearch';
import AffiliateSearchRoutes from '../Routing/AffiliateNavigation.routing';
import { AffiliateService } from '../../services/affiliate.service';

const AffiliateSearchContainer = () => {
  const affiliateService = React.useContext(AffiliateService);
  const [searchValue, setSearchValue] = React.useState(affiliateService.query);

  return (
    <AffiliateSearch>
      <div className="CMRP_AffiliateSearch_searcher">
        <Shared.Searchbar
          value={searchValue}
          placeholder="Buscar por DNI, Numero de Socio, Ley/Carnet o Nombre"
          onSubmit={(event) => {
            event.preventDefault();
            affiliateService.onSearchSubmit(searchValue);
          }}
          onChange={(value: string) => setSearchValue(value)}
          className="CMRP_AffiliateSearch_searchbar"
        />
      </div>
      <AffiliateSearchRoutes />
    </AffiliateSearch>
  );
};

export default AffiliateSearchContainer;
