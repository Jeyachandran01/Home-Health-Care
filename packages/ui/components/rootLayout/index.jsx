import { useRouting } from '@core/store';
import { Box } from '@mui/material';
import { useEffect } from 'react';
import { Toaster } from 'react-hot-toast';
import { useNavigate, Outlet } from 'react-router-dom';

function RootLayout(props) {
  const {
    className = '',
    children,
    backgroundStyle,
    rootStyle,
    ...rest
  } = props;

  const navigate = useNavigate();
  const route = useRouting((state) => state.route);

  useEffect(() => {
    if (route !== null) {
      navigate(route);
      setTimeout(() => {
        useRouting.setState({ route: null });
      }, 1000);
    }
  }, [route]);

  return (
    <Box className={`${className}`} {...rest}>
      <Toaster />
      <Outlet />
    </Box>
  );
}

export { RootLayout };
