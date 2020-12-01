import React, { FunctionComponent } from 'react';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import { ModuleProvider, UtilityProvider } from 'hooks';
import { CssBaseline } from '@material-ui/core';
import { PageSwitch } from 'pages/PageSwitch';

export const App: FunctionComponent = () => {
  const theme = createMuiTheme({
    palette: {
      type: 'light',
    },
  });
  return (
    <UtilityProvider>
      <ModuleProvider>
        <MuiThemeProvider theme={theme}> 
          <CssBaseline />
          <PageSwitch />
        </MuiThemeProvider>
      </ModuleProvider>
    </UtilityProvider>
  );
};
