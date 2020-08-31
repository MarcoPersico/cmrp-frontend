/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/no-array-index-key */
import React from 'react';
import XLSX from 'xlsx';
import NewPayRegistry from './NewPayRegistry.component';
import { PayRegisterService, RegistryData } from '../../services/payRegister.service';
import { Shared } from '../Shared';
import { ContextUI } from '../../context/ui.context';
import { useConfirmation } from '../../services/confirmation.service';

type PayRegistry = {
  '': string;
  _1: string;
  Código: number;
  Beneficio: string;
  Número: string;
  Nombre: string;
  Documento: string;
  CUIL: string;
  Importe: string;
};

const NewPayRegistryContainer = () => {
  const payRegisterService = React.useContext(PayRegisterService);
  const [registryData, setRegistryData] = React.useState<RegistryData>({
    file: new File([], ''),
    code: 0,
    period: '',
  });
  const [previewData, setPreviewData] = React.useState<string>('');
  const UIContext = React.useContext(ContextUI);
  const confirmation = useConfirmation();

  React.useEffect(() => {
    if (registryData.file.name) {
      const reader = new FileReader();

      reader.onloadend = (event) => {
        let jsonObject: string;
        const data = event.target?.result;
        const workbook = XLSX.read(data, {
          type: 'binary',
        });

        workbook.SheetNames.forEach(async (sheetName) => {
          const XLRowObject: PayRegistry[] = XLSX.utils
            .sheet_to_json(workbook.Sheets[sheetName]);
          jsonObject = JSON.stringify(XLRowObject);
          setPreviewData(jsonObject);

          if (XLRowObject[1] && XLRowObject[1].Código === 1040) {
            setRegistryData({ ...registryData, code: 1040 });
          } else if (XLRowObject[1] && XLRowObject[1].Código === 1041) {
            setRegistryData({ ...registryData, code: 1041 });
          } else {
            UIContext.handleAlert(`
            El archivo no es valido.
            Asegururese de que el formato del archivo sea el correcto y
            que el archivo no haya sufrido ninguna modificacion.
            Si el problema persiste intente descargando el archivo desde 
            https://cajajubilaciones.cba.gov.ar/Portal/
          `, true);
            setPreviewData('');
            setRegistryData({
              file: new File([], ''),
              code: 0,
              period: '',
            });
          }
        });
      };

      reader.onerror = (error) => {
        UIContext.handleAlert('El archivo no es valido', true);
      };

      reader.readAsBinaryString(registryData.file);
    }
  }, [registryData.file]);

  const parseData = () => JSON.parse(previewData);

  const handleRegistryFormChange = (value: File | null) => {
    const fileData: File | null = value;
    setPreviewData('');
    setRegistryData({
      file: new File([], ''),
      code: 0,
      period: '',
    });
    if (fileData) {
      const period = getPeriod(fileData.name);
      setRegistryData({
        ...registryData,
        period: period || '',
        file: fileData,
      });
    }
  };

  const getPeriod = (value: string) => {
    try {
      const period = value.split('_')[1];
      const year = period.slice(0, 4);
      const month = period.slice(4);
      return `${year}-${month}`;
    } catch (error) {
      return null;
    }
  };

  const getColumns = (data: PayRegistry[]) => {
    try {
      const obj = data[0];
      const col = Object.keys(obj);
      col.pop();
      col.pop();
      return col;
    } catch (error) {
      return [];
    }
  };

  const handleFormSubmit = () => {
    confirmation({
      catchOnCancel: true,
      title: '⚠️ Atencion',
      description: `¿Confirma crear registro de pago para 
        ${registryData.file.name} con el codigo
        ${registryData.code} y periodo
        ${registryData.period}?
      `,
    })
      .then(() => payRegisterService.createPayRegister(registryData))
      .catch(() => null);
  };

  return (
    <NewPayRegistry
      onRegisterSubmit={handleFormSubmit}
      onFormChange={handleRegistryFormChange}
      registryData={registryData}
      preview={previewData
        ? (
          <div>
            <h3 className="CMRP_NewPayRegistry_header">
              <span role="img" aria-label="unicode">📈</span>
              Previsualizacion de&nbsp;
              <span className="CMRP_NewPayRegistry_header_highlight">{registryData.file.name}</span>
            </h3>
            <Shared.Table
              data={parseData().map((col: PayRegistry, key: number) => (
                key !== 0 ? (
                  <tr key={key}>
                    <td>{col.Código}</td>
                    <td>{col.Beneficio}</td>
                    <td>{col.Número}</td>
                    <td>{col.Nombre}</td>
                    <td>{col.Documento}</td>
                    <td>{col.CUIL}</td>
                    <td>{col.Importe}</td>
                  </tr>
                ) : null
              ))}
              columns={parseData() && getColumns(parseData())
                ? (
                  <Shared.TRHeader>
                    {getColumns(parseData())
                      ? getColumns(parseData())
                        .map((col, key) => <th key={key}>{col}</th>)
                      : <></>}
                  </Shared.TRHeader>
                ) : null}
            />
          </div>
        ) : null}
    />
  );
};

export default NewPayRegistryContainer;
