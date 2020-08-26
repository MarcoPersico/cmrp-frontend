import React from 'react';
import HttpServiceProvider from './http.service';
import UserServiceProvider from './user.service';
import { ContextUI } from '../context/ui.context';
import AffiliateServiceProvider from './affiliate.service';
import PayRegisterServiceProvider from './payRegister.service';

type Props = {
  children: React.ReactNode,
};

const Services = ({ children }: Props) => {
  const baseUrl = process.env.NODE_ENV === 'development'
    ? 'http://localhost:4000/api/'
    : 'https://cmrp-api-rest.herokuapp.com/api/';
  const UIContext = React.useContext(ContextUI);

  const handleError = (value: string, error: boolean) => (
    UIContext.handleAlert(value, error)
  );

  return (
    <HttpServiceProvider
      onRequestStart={() => UIContext.handleLoading(true)}
      onResponseEnd={() => UIContext.handleLoading(false)}
      onError={handleError}
      baseUrl={baseUrl}
    >
      <UserServiceProvider
        onFailAuth={(reason: string) => UIContext.handleAlert(reason, true)}
      >
        <PayRegisterServiceProvider>
          <AffiliateServiceProvider>
            {children}
          </AffiliateServiceProvider>
        </PayRegisterServiceProvider>
      </UserServiceProvider>
    </HttpServiceProvider>
  );
};

export default Services;
