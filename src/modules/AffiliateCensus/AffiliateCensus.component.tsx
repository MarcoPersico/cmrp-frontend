import React from 'react';
import { Link } from 'react-router-dom';
import { AffiliateCensusStyles } from './AffiliateCensus.styles';
import { Shared } from '../Shared';
import { AffiliateCensus as AffiliateCensusType } from '../../services/affiliate.service';
import { Filter } from '../Shared/Filters/Filters.component';
import { Icon } from '../../assests/Icons/Icons';

type Props = {
  affiliates: AffiliateCensusType[];
  filters: Filter[];
  onSort: (
    column: 'name' | 'affiliate' | 'registeredAt' | 'city' | 'department',
    sort: 'ASC' | 'DESC' | null,
  ) => void;
  onFilterApplied: () => void;
  onFilterCleared: () => void;
};

const AffiliateCensus = ({
  affiliates, onSort, filters, onFilterApplied, onFilterCleared,
}: Props) => (
  <AffiliateCensusStyles>
    <div className="CMRP_AffiliateCensus_header">
      <h2 className="CMRP_headerTitle">Padron de Afiliados</h2>
    </div>
    <div className="CMRP_AffiliateCensus_body">
      <Shared.Table
        columns={
          <>
            <Shared.TRHeader startingSort={1}>
              <Shared.Sortable
                key={1}
                value="Nombre y Apellido"
                onChange={(value, column) => (
                  column === 'name'
                    && (value === 'ASC'
                      || value === 'DESC'
                      || value === '')
                    ? onSort(column, value || null)
                    : null)}
                column="name"
              />
              <th>Ley/Carnet</th>
              <th>Documento</th>
              <th>Direccion</th>
              <th>Barrio</th>
              <Shared.Sortable
                key={2}
                value="Localidad"
                onChange={(value, column) => (
                  column === 'city'
                    && (value === 'ASC'
                      || value === 'DESC'
                      || value === '')
                    ? onSort(column, value || null)
                    : null)}
                column="city"
              />
              <Shared.Sortable
                key={3}
                value="Departamento"
                onChange={(value, column) => (
                  column === 'department'
                    && (value === 'ASC'
                      || value === 'DESC'
                      || value === '')
                    ? onSort(column, value || null)
                    : null)}
                column="department"
              />
              <th>Telefono</th>
              <th>Estado</th>
            </Shared.TRHeader>
          </>
        }
        data={affiliates.map((affiliate) => (
          <tr className="CMRP_animations_fadeIn" key={affiliate.id}>
            <td>
              <Link to={`/dashboard/affiliate-search/selected/${affiliate.affiliate}`}>
                {affiliate.name}
              </Link>
            </td>
            <td>{affiliate.law}/{affiliate.license}</td>
            <td>{affiliate.identity}</td>
            <td>{affiliate.address}</td>
            <td>{affiliate.district}</td>
            <td>{affiliate.city}</td>
            <td>{affiliate.department}</td>
            <td>{affiliate.contact?.number}</td>
            <td>
              <span className={affiliate.active ? '-active' : '-inactive'}>
                {affiliate.active ? 'ALTA' : 'BAJA'}
              </span>
            </td>
          </tr>
        ))}
      />
    </div>
    <Shared.ActionGroup
      className="CMRP_AffiliateCensus_actionGroup"
      closeCaption={
        <div className="CMRP_AffiliateCensus_actionGroup_caption">
          <Icon.Options />
          <p>Filtros</p>
        </div>
      }
    >
      <div className="CMRP_AffiliateCensus_filterContainer">
        <div className="CMRP_AffiliateCensus_filterContainer_filters">
          <Shared.Filters
            filters={filters}
            onAction={onFilterApplied}
            onActionClear={onFilterCleared}
          />
        </div>
      </div>
    </Shared.ActionGroup>
  </AffiliateCensusStyles>
);

export default AffiliateCensus;
