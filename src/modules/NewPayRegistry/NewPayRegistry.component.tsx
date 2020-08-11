import React from 'react';
import { NewPayRegistryStyles } from './NewPayRegistry.styles';
import { Shared } from '../Shared';
import { RegistryData } from '../../services/payRegister.service';

type Props = {
  onRegisterSubmit: () => void;
  onFormChange: (value: File | null) => void;
  preview: React.ReactNode;
  registryData: RegistryData;
};

const NewPayRegistry = ({
  onRegisterSubmit,
  onFormChange,
  preview,
  registryData,
}: Props) => (
  <NewPayRegistryStyles>
    <h2 className="CMRP_headerTitle">Generar Registros de Pago</h2>
    <form
      className="CMRP_NewPayRegistry_form"
      onSubmit={(event) => {
        event.preventDefault();
        onRegisterSubmit();
      }}
    >
      <Shared.Card>
        <div className="CMRP_NewPayRegistry_formBody">
          <Shared.InputFile
            label="Subir Archivo (solo archivos de tipo .xls y .xlsx)"
            id="payRegistry"
            onChange={(value) => (
              value ? onFormChange(value) : onFormChange(null)
            )}
            extensions={['xls', 'xlsx']}
            className="CMRP_NewPayRegistry_inputFile file"
            required
          />
          <Shared.Input
            label="Periodo (mes de aaaa)"
            type="month"
            value={registryData.period}
            className="CMRP_NewPayRegistry_formBody_date period"
            required
            pattern="[0-9]{4}-[0-9]{2}"
            readonly
          />
          <Shared.Input
            label="Codigo"
            type="number"
            placeholder="Codigo (1040/1041)"
            value={registryData.code || ''}
            className="CMRP_NewPayRegistry_formBody_date code"
            required
            readonly
          />
        </div>
      </Shared.Card>
      <div className="CMRP_NewPayRegistry_actionContainer">
        <button
          className="CMRP_simple_button"
          type="submit"
          disabled={!(registryData.code
            && registryData.period
            && registryData.file.name)}
        >
          Generar Registro
        </button>
      </div>
      <div>
        {preview}
      </div>
    </form>
  </NewPayRegistryStyles>
);

export default NewPayRegistry;
