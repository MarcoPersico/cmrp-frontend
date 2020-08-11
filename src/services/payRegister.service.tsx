import React from 'react';
import XLSX from 'xlsx';
import { useHistory } from 'react-router-dom';
import { Request, HttpService } from './http.service';
import { ContextUI } from '../context/ui.context';
import { PayRegistryAttributes, PayRegistryPerPeriodCodeAttributes } from '../../typings/api';

export type RegistryData = {
  file: File;
  code: number;
  period: string;
};

const defaultValue = {
  createPayRegister: (file: RegistryData) => null,
  getAllPayRegistry: () => new Promise<PayRegistryPerPeriodCodeAttributes[]>(
    (resolve) => resolve(),
  ),

  getAllPayRegistriesByPeriodCodeId: (id: number) => (
    new Promise<PayRegistryAttributes[]>(
      (resolve) => resolve(),
    )),

  getCurrentSorted: (
    periodCode: number,
    column: string,
    sort: string,
  ) => (
    new Promise<PayRegistryAttributes[]>(
      (resolve) => resolve(),
    )),
};

export const PayRegisterService = React.createContext(defaultValue);

const PayRegisterServiceProvider = (
  { children }: { children: React.ReactNode },
) => {
  const http = React.useContext(HttpService);
  const UIContext = React.useContext(ContextUI);
  const history = useHistory();

  const createPayRegister = (registry: RegistryData) => {
    const reader = new FileReader();
    reader.onloadend = (ev) => {
      let jsonObject: string;
      const data = ev.target?.result;
      const workbook = XLSX.read(data, {
        type: 'binary',
      });

      workbook.SheetNames.forEach(async (sheetName) => {
        const XLRowObject = XLSX.utils
          .sheet_to_json(workbook.Sheets[sheetName]);
        jsonObject = JSON.stringify(XLRowObject);

        const requestConfig: Request = {
          requestType: 'post',
          url: '/pay-registry/add-pay-registry',
          configData: {
            data: {
              registries: jsonObject,
              code: registry.code,
              period: registry.period,
            },
          },
        };
        http.ApiService(requestConfig)
          .then((response) => {
            UIContext.handleAlert('¡Registro generado exitosamente!', true);
            history.push(`/dashboard/pay-registry/selected/${response.data[0].periodCode}`);
          });
      });
    };

    reader.readAsBinaryString(registry.file);
    return null;
  };

  const getAllPayRegistry = async () => {
    const requestConfig: Request = {
      requestType: 'get',
      url: '/pay-registry/get-all-by-period',
    };

    const response = await http.ApiService(requestConfig);
    const { data } = response;

    return data;
  };

  const getAllPayRegistriesByPeriodCodeId = async (id: number) => {
    const requestConfig: Request = {
      requestType: 'get',
      url: `/pay-registry/get-all-by-period-code-id?id=${id}`,
    };

    const response = await http.ApiService(requestConfig);
    const { data } = response;

    return data;
  };

  const getCurrentSorted = async (
    periodCode: number,
    column: string,
    sort: string,
  ) => {
    const requestConfig: Request = {
      requestType: 'post',
      url: '/pay-registry/get-current-by-sort',
      configData: {
        data: {
          periodCode,
          column,
          sort,
        },
      },
    };

    const response = await http.ApiService(requestConfig);
    const { data } = response;

    return data;
  };

  return (
    <PayRegisterService.Provider
      value={{
        createPayRegister,
        getAllPayRegistry,
        getAllPayRegistriesByPeriodCodeId,
        getCurrentSorted,
      }}
    >
      {children}
    </PayRegisterService.Provider>
  );
};

export default PayRegisterServiceProvider;
