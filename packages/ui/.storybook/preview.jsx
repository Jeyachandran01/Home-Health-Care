import React, { useMemo } from 'react';
import { withRouter } from 'storybook-addon-react-router-v6';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { lightTheme, theme, darkTheme } from '@core/theme';
import '@fontsource/poppins/400.css';
import '@fontsource/poppins/500.css';
import '@fontsource/poppins/600.css';
import '@fontsource/poppins/700.css';
import { Toaster } from 'react-hot-toast';

export const decorators = [
  (Story) => {
    const muiTheme = useMemo(() =>
      createTheme({
        ...theme,
        palette: {
          mode: 'light',
          ...theme.palette,
          ...lightTheme.palette,
        },
      })
    );

    return (
      <ThemeProvider theme={muiTheme}>
        <Toaster />
        <Story />
      </ThemeProvider>
    );
  },
  withRouter,
];

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    expanded: true,
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};
