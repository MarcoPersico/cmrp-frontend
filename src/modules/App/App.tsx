import React from 'react';
import { ThemeProvider } from 'styled-components';

import { GlobalStyles } from '../../assests/Global/Global.styles';
import { DarkTheme, LightTheme } from '../../assests/Theme/Theme';
import { ContextUI } from '../../context/ui.context';
import { Shared } from '../Shared';
import AppRouting from '../Routing';
import { ConfirmationServiceProvider } from '../../services/confirmation.service';

const App = () => {
  const UIContext = React.useContext(ContextUI);

  return (
    <ThemeProvider
      theme={UIContext.darkThemeVisible ? DarkTheme : LightTheme}
    >
      <GlobalStyles />
      <ConfirmationServiceProvider>
        <AppRouting />
        {
          UIContext.uiLoading
            ? <Shared.Spinner /> : null
        }
        {
          UIContext.alertHappen
            ? <Shared.Alert message={UIContext.alert} onClick={() => UIContext.handleAlert('', false)} /> : null
        }
      </ConfirmationServiceProvider>
    </ThemeProvider>
  );
};

export default App;
