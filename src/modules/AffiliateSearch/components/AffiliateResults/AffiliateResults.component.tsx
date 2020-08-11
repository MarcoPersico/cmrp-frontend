import React from 'react';
import { Link } from 'react-router-dom';
import { AffiliateResultsStyles } from './AffiliateResults.styles';
import { AffiliateSimple } from '../../../../services/affiliate.service';

type Props = {
  results: AffiliateSimple[],
};

const AffiliateResults = ({ results }: Props) => (
  <AffiliateResultsStyles className="CMRP_animations_fadeIn">
    <p>{results.length} resultados encontrados.</p>
    {results.map((result) => (
      <Link
        type="button"
        key={result.affiliate}
        className="CMRP_results_card"
        to={`/dashboard/search/selected/${result.affiliate}`}
      >
        {result.name}
      </Link>
    ))}
  </AffiliateResultsStyles>
);

export default AffiliateResults;
