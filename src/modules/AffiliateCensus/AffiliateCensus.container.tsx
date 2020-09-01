/* eslint-disable react-hooks/exhaustive-deps */
import React from 'react';
import AffiliateCensus from './AffiliateCensus.component';
import { AffiliateService, AffiliateCensus as AffiliateCensusType } from '../../services/affiliate.service';
import { Filter } from '../Shared/Filters/Filters.component';

const AffiliateCensusModule = () => {
  const affiliateService = React.useContext(AffiliateService);
  const [affiliates, setAffiliates] = React.useState<AffiliateCensusType[]>([]);
  const [filters, setFilters] = React.useState<Filter[]>([]);
  const [currentSort, setCurrentSort] = React.useState<string | null>('ASC');
  const [columnSort, setColumnSort] = React.useState('name');
  const [selectedLaw, setSelectedLaw] = React.useState(0);
  const [
    selectedDepartments,
    setSelectedDepartments,
  ] = React.useState<string[]>([]);

  const initialFilters: Filter[] = [];
  const unfilteredLaws: string[] = [];
  const unfilteredDepartments: string[] = [];

  React.useEffect(() => {
    affiliateService.getAll(columnSort, currentSort)
      .then((data) => {
        setAffiliates(data);
        return data;
      })
      .then((affiliatesInstance) => getFilters(affiliatesInstance));
  }, []);

  const getFilters = (affiliatesInstance: AffiliateCensusType[]) => {
    affiliatesInstance.map((affiliate) => [
      unfilteredLaws.push(affiliate.law.toString()),
      unfilteredDepartments.push(affiliate.department),
    ]);

    initialFilters.push(
      {
        name: 'law',
        label: 'Ley',
        options: [...new Set(unfilteredLaws)].sort(),
        handler: (event) => {
          event.target.value && event.target.selectedIndex
            ? initialFilters[0].active = true
            : initialFilters[0].active = false;
          setSelectedLaw(parseInt(event.target.value, 10));
        },
        active: false,
      },
      {
        active: false,
        name: 'department',
        label: 'Departamento',
        options: [...new Set(unfilteredDepartments)].sort(),
        multiple: true,
        handler: (event) => {
          const selectedOptions: string[] = [];
          const options: HTMLOptionElement[] = Array
            .prototype
            .slice
            .call(event.target.options);
          options.map((option) => (option.selected
            ? selectedOptions.push(option.value)
            : null));
          selectedOptions.length
            ? initialFilters[1].active = true
            : initialFilters[1].active = false;
          setSelectedDepartments(selectedOptions);
        },
      },
    );
    setFilters(initialFilters);
  };

  const sortAffiliates = (
    column: 'name' | 'affiliate' | 'registeredAt' | 'city' | 'department',
    sort: 'ASC' | 'DESC' | null,
  ) => {
    if (selectedLaw || selectedDepartments.length) {
      applyFilters(null, column, sort);
    } else {
      setColumnSort(column);
      setCurrentSort(sort);
      return affiliateService.getAll(column, sort)
        .then((data) => setAffiliates(data));
    }
    return null;
  };

  const applyFilters = (
    event?: React.SyntheticEvent | null,
    column?: 'name' | 'affiliate' | 'registeredAt' | 'city' | 'department',
    sort?: 'ASC' | 'DESC' | null,
  ) => {
    affiliateService.getAllWithFilters(
      column || columnSort,
      sort || currentSort,
      {
        law: selectedLaw,
        departments: selectedDepartments,
      },
    )
      .then((data) => setAffiliates(data));
  };

  const clearFilters = () => {
    affiliateService.getAll(columnSort, currentSort)
      .then((data) => setAffiliates(data));
  };

  return (
    <AffiliateCensus
      affiliates={affiliates}
      onSort={sortAffiliates}
      filters={filters}
      onFilterApplied={applyFilters}
      onFilterCleared={clearFilters}
    />
  );
};

export default AffiliateCensusModule;
