import React from 'react';

import { AffiliateSearchStyles } from './AffiliateSearch.styles';

type Props = {
  children: React.ReactNode,
};

const AffiliateSearch = ({ children }: Props) => (
  <AffiliateSearchStyles id="container">
    {children}
  </AffiliateSearchStyles>
);

export default AffiliateSearch;
