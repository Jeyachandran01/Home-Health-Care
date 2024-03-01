import { CloseIcon, MenuIcon } from '@atoms';
import { Box, IconButton, Stack, Typography, styled } from '@mui/material';
import PropTypes from 'prop-types';
import React from 'react';
import { Drawer } from '../drawer';
import { SideBar } from '../sideBar';
import { AppBar_style } from './style';

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  padding: theme.spacing(0, 1),
  ...theme.mixins.toolbar,
  justifyContent: 'flex-end',
}));

export function AppBar(props) {
  const {
    rootStyle = {},
    className = '',
    navItems = [],
    onOpen = () => {},
    onClose = () => {},
    openDrawer,
    ...rest
  } = props;

  return (
    <Box
      sx={{ ...AppBar_style.rootSx, ...rootStyle }}
      className={`${className}`}
      {...rest}
    >
      <Box
        sx={{
          zIndex: (theme) => theme.zIndex.drawer + 1,
          ...AppBar_style.navSx,
        }}
      >
        <Stack direction="row" spacing={1}>
          <Box pl={1} sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            {openDrawer ? (
              <IconButton
                aria-label="open drawer"
                onClick={onClose}
                disableRipple
                color="inherit"
              >
                <CloseIcon
                  rootStyle={{ height: 20, width: 24, color: '#5C6266' }}
                />
              </IconButton>
            ) : (
              <IconButton
                disableRipple
                aria-label="open drawer"
                onClick={onOpen}
                color="inherit"
              >
                <MenuIcon
                  rootStyle={{ height: 24, width: 24, color: '#5C6266' }}
                />
              </IconButton>
            )}
          </Box>

          <Box sx={AppBar_style.logoSx}>
            {/* <CrayondLogo /> */}
            {/* <img src={CrayondLogo} alt="" style={{ height: '40px' }} /> */}
            <Typography variant="h6" color="grey.00">
              Monorepo Boilerpate - JS
            </Typography>
          </Box>
        </Stack>
      </Box>
      <Drawer
        sx={{
          width: 240,
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: 240,
            boxSizing: 'border-box',
          },
        }}
        variant="persistent"
        anchor="left"
        open={openDrawer}
      >
        <DrawerHeader />
        <Box onClick={onClose}>
          <SideBar navItems={navItems} />
        </Box>
      </Drawer>
    </Box>
  );
}
AppBar.propTypes = {
  className: PropTypes.string,
  rootStyle: PropTypes.object,
  navItems: PropTypes.array,
  onOpen: PropTypes.func,
  onClose: PropTypes.func,
  openDrawer: PropTypes.bool,
};
