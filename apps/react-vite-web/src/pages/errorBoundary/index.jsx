import { Box, Grid } from '@mui/material';
import { useRouteError } from 'react-router-dom';
import { error_boundary_style } from './style';

export function ErrorBoundary() {
  const error = useRouteError();
  return (
    <div id="error-page">
      <Box sx={error_boundary_style.rootSx}>
        <Box sx={error_boundary_style.innerBoxSx}>
          <Grid container>
            <Grid item xs={12} display="flex" justifyContent="center">
              <h1 style={{ fontSize: '60px' }}>Oops!</h1>
            </Grid>
            <Grid item xs={12} display="flex" justifyContent="center">
              <p style={{ color: '#8C8A8D', fontSize: '25px' }}>
                Sorry, an unexpected error has occurred.
              </p>
            </Grid>
            <Grid item xs={12} display="flex" justifyContent="center">
              {/* <Box sx={error_boundary_style.errorBoxSx}> */}
              <p style={{ color: '#b30d0d', fontSize: '24px' }}>
                <Box sx={error_boundary_style.errorBoxSx}>
                  <i>{error.statusText || error.message}</i>
                </Box>
              </p>
              {/* </Box> */}
            </Grid>
          </Grid>
        </Box>
      </Box>
    </div>
  );
}
