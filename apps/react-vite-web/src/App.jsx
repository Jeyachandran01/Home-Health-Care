import '@fontsource/poppins/400.css';
import '@fontsource/poppins/500.css';
import '@fontsource/poppins/600.css';
import '@fontsource/poppins/700.css';
import '@styles/global.css';

import { RouterApp } from '@router';
import { lightTheme, theme } from '@core/theme';
import { queryClient } from '@core/utils';
import { CssBaseline, ThemeProvider } from '@mui/material';
import { createTheme } from '@mui/material/styles';
import { QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';

const themeGenerator = createTheme({
  ...theme,
  ...lightTheme,
});

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider theme={themeGenerator}>
        <CssBaseline />
        <RouterApp />
      </ThemeProvider>
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
}

export default App;
