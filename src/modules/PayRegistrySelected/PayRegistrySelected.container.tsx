/* eslint-disable react-hooks/exhaustive-deps */
import React from 'react';
import { useParams, Redirect } from 'react-router-dom';
import PayRegistrySelected from './PayRegistrySelected.component';
import { PayRegisterService } from '../../services/payRegister.service';
import { PayRegistryAttributes } from '../../../typings/api';

type RegistrySelectedParam = { id: string };

const PayRegistrySelectedContainer = () => {
  const params = useParams<RegistrySelectedParam>();
  const payRegistryService = React.useContext(PayRegisterService);
  const [exists, setExists] = React.useState<boolean>(true);
  const [laws, setLaws] = React.useState<string[]>([]);
  const [isFilterApplied, setIsFilterApplied] = React.useState<boolean>(false);
  const [payRegistry, setPayRegistry] = React
    .useState<PayRegistryAttributes[]>([]);
  const [filterPayRegistry, setFilterPayRegistry] = React
    .useState<PayRegistryAttributes[]>([]);
  const [selectedLaw, setSelectedLaw] = React.useState<number>(0);

  React.useEffect(() => {
    const registryId = parseInt(params.id, 10);
    payRegistryService.getAllPayRegistriesByPeriodCodeId(registryId)
      .then((data) => {
        if (data.length) {
          setPayRegistry(data);
          setFilterPayRegistry(data);
          setLaws(getLaws(data));
        } else setExists(false);
      });
  }, []);

  const getLaws = (data: PayRegistryAttributes[]) => {
    const lawsArray: string[] = [];
    data.map((registry) => lawsArray.push(registry.benefit.split('-')[1]));

    return [...new Set(lawsArray)].sort();
  };

  const filterByLaw = (value: string, data?: PayRegistryAttributes[]) => {
    if (value === 'Seleccione numero de ley') {
      setIsFilterApplied(false);
      setFilterPayRegistry(data || payRegistry);
    } else {
      setSelectedLaw(parseInt(value, 10));
      let filteredRegistries: PayRegistryAttributes[];
      if (data) {
        filteredRegistries = data.filter(
          (registry) => registry.benefit.split('-')[1] === value,
        );
      } else {
        filteredRegistries = payRegistry.filter(
          (registry) => registry.benefit.split('-')[1] === value,
        );
      }
      setIsFilterApplied(true);
      setFilterPayRegistry(filteredRegistries);
    }
  };

  return (
    exists
      ? (
        <PayRegistrySelected
          registries={filterPayRegistry}
          laws={laws}
          isFilterApplied={isFilterApplied}
          onFilterApplied={filterByLaw}
          selectedLaw={selectedLaw}
          onSorting={(column, sort) => (filterPayRegistry.length > 1
            ? (payRegistryService
              .getCurrentSorted(parseInt(params.id, 10), column, sort)
              .then((data) => {
                setPayRegistry(data);
                if (selectedLaw && isFilterApplied) {
                  filterByLaw(selectedLaw.toString(), data);
                } else filterByLaw('Seleccione numero de ley', data);
              })
            ) : null)}
        />
      ) : <Redirect to="/dashboard/pay-registry/not-found" />
  );
};

export default PayRegistrySelectedContainer;
