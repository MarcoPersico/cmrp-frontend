import React from 'react';
import { Link } from 'react-router-dom';
import { AffiliateCensusStyles } from './AffiliateCensus.styles';
import { Shared } from '../Shared';
import { AffiliateCensus as AffiliateCensusType } from '../../services/affiliate.service';

type Props = {
  affiliates: AffiliateCensusType[];
  onSort: (
    column: 'name' | 'affiliate' | 'registeredAt' | 'city' | 'department',
    sort: 'ASC' | 'DESC' | null,
  ) => void
};

const AffiliateCensus = ({ affiliates, onSort }: Props) => (
  <AffiliateCensusStyles>
    <div className="CMRP_AffiliateCensus_header">
      <h2 className="CMRP_headerTitle">Padron de Afiliados</h2>
    </div>
    <div className="CMRP_AffiliateCensus_body">
      <Shared.Table
        columns={
          <>
            <Shared.TRHeader startingSort={2}>
              <Shared.Sortable
                key={1}
                value="Codigo de Afiliado"
                onChange={(value, column) => (
                  column === 'affiliate'
                    && (value === 'ASC'
                      || value === 'DESC'
                      || value === '')
                    ? onSort(column, value || null)
                    : null)}
                column="affiliate"
              />
              <Shared.Sortable
                key={2}
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
              <th>Fecha de Nacimiento</th>
              <Shared.Sortable
                key={3}
                value="Fecha de Afiliacion"
                onChange={(value, column) => (
                  column === 'registeredAt'
                    && (value === 'ASC'
                      || value === 'DESC'
                      || value === '')
                    ? onSort(column, value || null)
                    : null)}
                column="registeredAt"
              />
              <th>Documento</th>
              <Shared.Sortable
                key={4}
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
                key={5}
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
              <th>Estado</th>
            </Shared.TRHeader>
          </>
        }
        data={affiliates.map((affiliate) => (
          <tr className="CMRP_animations_fadeIn" key={affiliate.id}>
            <td>{affiliate.affiliate}</td>
            <td>
              <Link to={`/dashboard/affiliate-search/selected/${affiliate.affiliate}`}>
                {affiliate.name}
              </Link>
            </td>
            <td>{affiliate.law}/{affiliate.license}</td>
            <td>{affiliate.birthday}</td>
            <td>{affiliate.registeredAt}</td>
            <td>{affiliate.identity}</td>
            <td>{affiliate.city}</td>
            <td>{affiliate.department}</td>
            <td>
              <span className={affiliate.active ? '-active' : '-inactive'}>
                {affiliate.active ? 'ALTA' : 'BAJA'}
              </span>
            </td>
          </tr>
        ))}
      />
    </div>
    {/* <Shared.ActionGroup /> */}
  </AffiliateCensusStyles>
);

export default AffiliateCensus;
