import React, { ReactNode } from 'react';

const initialState = {
  uiLoading: false,
  handleLoading: (value: boolean) => { },
  handleAlert: (value: string, onAlert: boolean) => { },
  alert: '',
  alertHappen: false,
  darkThemeVisible: false,
  handleTheme: (value: boolean) => { },
};

export const ContextUI = React.createContext(initialState);

type Props = {
  children: ReactNode,
};

const ContextUIPorvider = ({ children }: Props) => {
  const [uiLoading, setUiLoading] = React.useState(false);

  function handleLoading(value: boolean) {
    return setUiLoading(value);
  }

  const [alert, setAlert] = React.useState('');
  const [alertHappen, setAlertHappen] = React.useState(false);

  function handleAlert(value: string, onError: boolean) {
    return (setAlert(value), setAlertHappen(onError));
  }

  const [darkThemeVisible, setDarkThemeVisible] = React.useState(
    localStorage.darktheme
      ? JSON.parse(localStorage.darktheme)
      : false,
  );

  function handleTheme(value: boolean) {
    localStorage.setItem('darktheme', value.toString());
    return setDarkThemeVisible(value);
  }

  return (
    <ContextUI.Provider
      value={{
        handleLoading,
        uiLoading,
        handleAlert,
        alert,
        alertHappen,
        handleTheme,
        darkThemeVisible,
      }}
    >
      {children}
    </ContextUI.Provider>
  );
};

export default ContextUIPorvider;
