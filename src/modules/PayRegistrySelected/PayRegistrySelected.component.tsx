import React from 'react';
import { Link } from 'react-router-dom';
import { useReactToPrint } from 'react-to-print';
import { PayRegistrySelectedStyles } from './PayRegistrySelected.styles';
import { PayRegistryAttributes } from '../../../typings/api';
import { Shared } from '../Shared';
import { Icon } from '../../assests/Icons/Icons';

type Props = {
  registries: PayRegistryAttributes[];
  laws: string[];
  isFilterApplied: boolean;
  onFilterApplied: (value: string) => void;
  onSorting: (column: string, sort: string) => void;
  selectedLaw: number;
};

const PayRegistrySelected = ({
  registries,
  laws,
  isFilterApplied,
  onFilterApplied,
  onSorting,
  selectedLaw,
}: Props) => {
  const tableRef = React.useRef<HTMLDivElement>(null);
  const handlePrint = useReactToPrint({
    content: () => tableRef.current,
  });

  return (
    <PayRegistrySelectedStyles>
      <div className="CMRP_PayRegistry_header">
        <h2 className="CMRP_headerTitle">Registro por perido/codigo</h2>
      </div>
      <div>
        <div ref={tableRef}>
          <Shared.Table
            className="CMRP_PayRegistry_tableContainer"
            columns={
              <Shared.TRHeader>
                <th>Codigo</th>
                <Shared.Sortable
                  value="Beneficio"
                  column="benefit"
                  onChange={(sort, column) => onSorting(column, sort)}
                />
                <Shared.Sortable
                  value="Numero"
                  column="number"
                  onChange={(sort, column) => onSorting(column, sort)}
                />
                <Shared.Sortable
                  value="Nombre"
                  column="name"
                  onChange={(sort, column) => onSorting(column, sort)}
                />
                <Shared.Sortable
                  value="Documento"
                  column="identity"
                  onChange={(sort, column) => onSorting(column, sort)}
                />
                <th>CUIL</th>
                <Shared.Sortable
                  value="Importe"
                  column="import"
                  onChange={(sort, column) => onSorting(column, sort)}
                />
              </Shared.TRHeader>
            }
            data={registries.map((col: PayRegistryAttributes, key: number) => (
              <tr className="CMRP_animations_fadeIn" key={col.id}>
                <td>{col.code}</td>
                <td>
                  {col.benefit.split('-')[0]}-
                  <span
                    className={isFilterApplied ? '--highlighted' : ''}
                  >
                    {col.benefit.split('-')[1]}
                  </span>-
                  {col.benefit.split('-')[2]}-
                  {col.benefit.split('-')[3]}
                </td>
                <td>{col.number}</td>
                <td>
                  <Link to={`/dashboard/search/selected/${col.identity}`}>
                    {col.name}
                  </Link>
                </td>
                <td>{col.identity}</td>
                <td>{col.cuil}</td>
                <td>{col.import}</td>
              </tr>
            ))}
          />
        </div>
      </div>
      <Shared.ActionGroup>
        <div className="CMRP_PayRegistry_filter">
          <span>Filtrar por ley</span>
          <div className="CMRP_PayRegistry_filter_containerValue">
            <div>
              <select
                id="lawFilter"
                onChange={(event) => onFilterApplied(event.target.value)}
                className="CMRP_PayRegistry_filter_select"
                value={!isFilterApplied ? 'Seleccione numero de ley' : selectedLaw}
              >
                <option id="default" defaultValue="Seleccione numero de ley">
                  Seleccione numero de ley
                </option>
                {laws.map(
                  ((law) => (
                    <option
                      id={law}
                      key={parseInt(law, 10)}
                    >
                      {law}
                    </option>
                  )),
                )}
              </select>
              {isFilterApplied
                ? (
                  <button
                    type="button"
                    onClick={(event) => onFilterApplied('Seleccione numero de ley')}
                    className="CMRP_animations_fadeIn CMRP_PayRegistry_filter_containerValue_clearFilter"
                  >
                    Limpiar filtro
                  </button>
                ) : null}
            </div>
            <button onClick={handlePrint} type="button" className="CMRP_simple_button">
              <Icon.File />
              Imprimir reporte
            </button>
          </div>
        </div>
      </Shared.ActionGroup>
    </PayRegistrySelectedStyles>
  );
};

export default PayRegistrySelected;