/* eslint-disable react/jsx-key */
import { Box, List, ListItemButton, Paper, Typography } from '@mui/material';
import PropTypes from 'prop-types';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { RiLogoutCircleRLine } from 'react-icons/ri';
import { useOnboarding } from '@core/store';
import { sidebar_style } from './style';

export function SideBar(props) {
  const {
    navItems = [],
    showLogout = true,
    rootStyle = {},
    className = '',
    ...rest
  } = props;

  const navigate = useNavigate();

  const { logOut } = useOnboarding((state) => ({
    logOut: state.logOut,
  }));

  const gotoPage = (route) => {
    navigate(route);
  };

  return (
    <Paper
      sx={{ ...sidebar_style.rootSx, ...rootStyle }}
      className={`${className}`}
      {...rest}
      elevation={1}
    >
      <Box sx={{ pt: { lg: 2, md: 2, sm: 0 } }}>
        {navItems.map((val) => (
          <List>
            <ListItemButton
              onClick={() => gotoPage(val.path)}
              selected={val?.path === window.location.pathname}
              sx={{
                ...sidebar_style.ListItemButtonSx,
                '&.Mui-selected': {
                  backgroundColor: '#EEEEEE',
                  '&:hover': {
                    backgroundColor: '#EEEEEE',
                  },
                },
                '&.Mui-focusVisible': {
                  backgroundColor: '#EEEEEE',
                },
                '&:hover': {
                  backgroundColor: '#EEEEEE',
                },
                '& .MuiButtonBase-root-MuiListItemButton-root.Mui-selected': {
                  backgroundColor: '#EEEEEE',
                },
              }}
            >
              <Box sx={sidebar_style.iconSx}>{val?.icon}</Box>
              <Typography sx={sidebar_style.menuSx}>{val?.navItem}</Typography>
            </ListItemButton>
          </List>
        ))}

        <List>
          {showLogout && (
            <ListItemButton
              onClick={() => logOut()}
              sx={{
                ...sidebar_style.ListItemButtonSx,
                mt: 2,
                '&.Mui-selected': {
                  backgroundColor: '#EEEEEE',
                  '&:hover': {
                    backgroundColor: '#EEEEEE',
                  },
                },
                '&.Mui-focusVisible': {
                  backgroundColor: '#EEEEEE',
                },
                '&:hover': {
                  backgroundColor: '#EEEEEE',
                },
                '& .MuiButtonBase-root-MuiListItemButton-root.Mui-selected': {
                  backgroundColor: '#EEEEEE',
                },
              }}
            >
              <Box sx={sidebar_style.iconSx}>
                <RiLogoutCircleRLine size="20px" />
              </Box>
              <Typography sx={sidebar_style.menuSx}>Logout</Typography>
            </ListItemButton>
          )}
        </List>
      </Box>
    </Paper>
  );
}
SideBar.propTypes = {
  navItems: PropTypes.array,
  showLogout: PropTypes.bool,
  rootStyle: PropTypes.object,
  className: PropTypes.string,
  sx: PropTypes.object,
};
