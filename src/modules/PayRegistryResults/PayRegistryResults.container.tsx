/* eslint-disable react-hooks/exhaustive-deps */
import React from 'react';
import { PayRegisterService } from '../../services/payRegister.service';
import { PayRegistryPerPeriodCodeAttributes } from '../../../typings/api';
import PayRegistryResults from './PayRegistryResults.components';

const PayRegistryResultsContainer = () => {
  const payRegistryService = React.useContext(PayRegisterService);
  const [results, setResults] = React
    .useState<PayRegistryPerPeriodCodeAttributes[]>([]);

  React.useEffect(() => {
    payRegistryService.getAllPayRegistry()
      .then((data) => setResults(data));
  }, []);

  return <PayRegistryResults results={results} />;
};

export default PayRegistryResultsContainer;
