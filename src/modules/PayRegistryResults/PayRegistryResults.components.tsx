import React from 'react';
import { Link } from 'react-router-dom';
import { PayRegistryResultsStyles } from './PayRegistryResults.styles';
import { PayRegistryPerPeriodCodeAttributes } from '../../../typings/api';

type Props = {
  results: PayRegistryPerPeriodCodeAttributes[];
};

const PayRegistryResults = ({ results }: Props) => (
  <PayRegistryResultsStyles>
    <h3>
      <span role="img" aria-label="unicode">📈</span>
      Registros de pago por fecha y codigo
    </h3>
    <div className="CMRP_results">
      {results.length
        ? (
          results.map((result: PayRegistryPerPeriodCodeAttributes) => (
            <Link
              type="button"
              key={result.id}
              className="CMRP_results_card"
              to={`/dashboard/pay-registry/selected/${result.id}`}
            >
              Periodo: {`${result.period.toString().slice(0, 4)}/${result.period.toString().slice(4)}`}&nbsp;
              Codigo: {result.code.toString()}
            </Link>
          ))
        ) : <p>No existen registros ingresados.</p>}
    </div>
  </PayRegistryResultsStyles>
);

export default PayRegistryResults;
