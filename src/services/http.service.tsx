/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react';
import { useHistory } from 'react-router-dom';
import axios, { AxiosRequestConfig, AxiosError, AxiosResponse } from 'axios';
import qs from 'qs';

// Types
export type Request = {
  requestType: 'get' | 'post' | 'put' | 'delete',
  url: string,
  configData?: AxiosRequestConfig,
};

export type Header = {
  name: string,
  value: string,
  requestType: 'get' | 'post' | 'put' | 'delete',
};

/**
 * Initial State for context
 */
const initialState = {
  ApiService: (config: Request) => (
    new Promise<AxiosResponse<any>>(
      (resolve, reject) => (resolve()),
    )
  ),
};

// Context Init
export const HttpService = React.createContext(initialState);

/**
 * Props for HttpServiceProvider
 */
type Props = {
  children: React.ReactNode,
  onRequestStart: () => void,
  onResponseEnd: () => void,
  onError: (value: string, error: boolean) => void,
  baseUrl: string,
  defaultHeaders?: Header[];
};

/**
 * This context is the http context will format and make interceptions on every request and response
 * will handle every service of the application.
 * @param children of @type Props.
 */
const HttpServiceProvider = ({
  children, onRequestStart, onResponseEnd, onError, baseUrl, defaultHeaders,
}: Props) => {
  const history = useHistory();
  /**
   * Axios init
   */
  const instance = axios.create({
    baseURL: baseUrl,
    paramsSerializer(params) {
      return qs.stringify(params, { indices: false });
    },
  });

  /**
   * Request Interceptor
   */
  instance.interceptors.request.use(
    (config: AxiosRequestConfig) => {
      onRequestStart();
      return config;
    },
    (error: AxiosError) => Promise.reject(error),
  );

  /**
   * Response Interceptor
   */
  instance.interceptors.response.use(
    (response) => {
      onResponseEnd();
      return Promise.resolve(response);
    },
    (error) => {
      if (error.message.includes('401')) {
        onResponseEnd();
        onError('La sesion expiró. Intente iniciar sesion nuevamente.', true);
        localStorage.removeItem('usertoken');
        history.push('/login');
        return Promise.reject(error.message);
      }
      onResponseEnd();
      onError(error.response ? error.response.data : error.message, true);
      return Promise.reject(error);
    },
  );

  /**
   * Default headers
   */
  defaultHeaders?.map((header) => {
    instance.defaults.headers[header.requestType][header.name] = header.value;
    return null;
  });

  /**
   * This function will handle incoming request and make the api call
   * @param config of @type Request
   */
  async function ApiService(config: Request) {
    const reg: RegExp = /pay-registry|affiliate/;
    const token: string = localStorage.getItem('usertoken') || '';
    const data = await instance.request({
      method: config.requestType,
      data: config.configData,
      url: config.url,
      headers: reg.exec(config.url)
        ? { Authorization: token }
        : { Authorization: '' },
    });
    return data;
  }

  return (
    <HttpService.Provider value={{ ApiService }}>
      {children}
    </HttpService.Provider>
  );
};

export default HttpServiceProvider;
