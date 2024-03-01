/* eslint-disable camelcase */
import { AppBar, DashboardIcon, SideBar } from '@atoms';
import { Box, useMediaQuery, useTheme } from '@mui/material';
import PropTypes from 'prop-types';
import { useState } from 'react';

import { organizationlayout_style } from './style';

export function Layout(props) {
  const {
    childrenStyle = {},
    bodyStyle = {},
    className = '',
    rootStyle = {},
    children,
    appBarStyle = {},
    ...rest
  } = props;
  const theme = useTheme();
  const viewport = useMediaQuery(theme.breakpoints.down('md'));
  const [openDrawer, setOpenDrawer] = useState(false);

  const navItems = [
    {
      icon: <DashboardIcon />,
      navItem: 'Home',
      path: '/',
    },
  ];

  const handleDrawerOpen = () => {
    setOpenDrawer(true);
  };

  const handleDrawerClose = () => {
    setOpenDrawer(false);
  };

  return (
    <Box
      sx={{ ...organizationlayout_style.rootSx, ...rootStyle }}
      className={`${className}`}
      {...rest}
    >
      <Box sx={{ ...organizationlayout_style.appBarSx, ...appBarStyle }}>
        <AppBar
          navItems={navItems}
          openDrawer={openDrawer}
          onOpen={handleDrawerOpen}
          onClose={handleDrawerClose}
        />
      </Box>

      <Box
        sx={{
          ...(viewport ? ' ' : organizationlayout_style.bodySx),
          ...bodyStyle,
        }}
      >
        <Box
          sx={
            viewport
              ? organizationlayout_style.responsiveBoxSx
              : organizationlayout_style.boxSx
          }
        >
          <SideBar navItems={navItems} />
        </Box>

        {/* Children */}
        <Box
          sx={{
            ...organizationlayout_style.childrenSx,
            ...childrenStyle,
          }}
          onClick={handleDrawerClose}
        >
          {children}
        </Box>
      </Box>
    </Box>
  );
}

Layout.propTypes = {
  className: PropTypes.string,
  childrenStyle: PropTypes.object,
  bodyStyle: PropTypes.object,
  rootStyle: PropTypes.object,
  appBarStyle: PropTypes.object,
  navItems: PropTypes.array,
  children: PropTypes.node,
  sx: PropTypes.object,
};
