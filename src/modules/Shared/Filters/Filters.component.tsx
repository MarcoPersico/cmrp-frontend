import React from 'react';
import { FiltersStyles } from './Filters.styles';

export type Filter = {
  name: string;
  label: string;
  options: string[];
  multiple?: boolean;
  handler: (event: React.ChangeEvent<HTMLSelectElement>) => void;
  active: boolean;
};

type Props = {
  filters: Filter[];
  onAction: () => void;
  onActionClear: () => void;
};

const Filters = ({ filters, onAction, onActionClear }: Props) => (
  <FiltersStyles>
    {filters.map((filter: Filter) => (
      <div className="CMRP_Filters_single" key={filter.name}>
        <span>{filter.label}</span>
        <select
          onChange={(event) => filter.handler(event)}
          multiple={filter.multiple}
          className="CMRP_Filters_single_dropdown"
        >
          {filter.multiple
            ? null
            : <option>Seleccione {filter.label}</option>}
          {filter.options.map((option: string | number) => (
            <option id={option ? option.toString() : 'NotId'} key={option}>{option}</option>))}
        </select>
      </div>
    ))}
    {filters.some((filter) => filter.active)
      ? (
        <div className="CMRP_Filters_action CMRP_animations_fadeIn">
          <button
            className="CMRP_simple_button"
            type="button"
            onClick={onAction}
          >
            Aplicar Filtros
          </button>
          <button
            className="CMRP_primery_simple"
            type="button"
            onClick={onActionClear}
          >
            Limpiar Filtros
          </button>
        </div>
      ) : null}
  </FiltersStyles>
);

export default Filters;
