import { Box } from '@mui/material';
import { Login as LoginComp } from '@core/ui/components';

import { login_style } from './style';

export default function Login() {
  return (
    <Box sx={login_style.rootSx}>
      <LoginComp />
    </Box>
  );
}
