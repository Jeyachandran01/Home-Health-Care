/* eslint-disable camelcase */
import { Box, Drawer as MuiDrawer } from '@mui/material';
import PropTypes from 'prop-types';
import { useEffect, useState } from 'react';
import { CloseIcon } from '../icons';
import { drawer_style } from './style';

function Drawer(props) {
  const {
    header,
    children,
    height = 'auto',
    hideBackdrop = false,
    show,
    anchor = 'bottom',
    footer,
    isCloseIconRequired = false,
    rootStyle = {},
    headerStyle = {},
    footerStyle = {},
    childrenStyle = {},
    onCloseDrawer = () => {},
    closeStyle = {},
    ...rest
  } = props;

  const [state, setState] = useState(show);

  useEffect(() => {
    if (show) {
      setState(true);
    } else {
      setState(false);
    }
  }, [show]);

  return (
    <MuiDrawer
      sx={{
        ...drawer_style.rootSx,
        ...rootStyle,
      }}
      anchor={anchor}
      open={state}
      onClose={() => {
        setState(false);
        onCloseDrawer();
      }}
      hideBackdrop={hideBackdrop}
      {...rest}
    >
      {header && (
        <Box
          sx={{
            ...drawer_style.headerSx,
            ...headerStyle,
          }}
        >
          {header}
        </Box>
      )}
      <Box
        sx={{
          ...drawer_style.childrenSx,
          ...childrenStyle,
          height,
        }}
      >
        {children}
      </Box>
      {footer && (
        <Box
          sx={{
            ...drawer_style.footerSx,
            ...footerStyle,
          }}
        >
          {footer}
        </Box>
      )}
      {isCloseIconRequired && (
        <Box>
          <CloseIcon
            sx={{
              ...drawer_style.closeSx,
              ...closeStyle,
            }}
            open={state}
            onClick={() => {
              setState(false);
              onCloseDrawer();
            }}
          />
        </Box>
      )}
    </MuiDrawer>
  );
}

export { Drawer };
Drawer.propTypes = {
  children: PropTypes.node,
  onCloseDrawer: PropTypes.func,
  height: PropTypes.string,
  anchor: PropTypes.string,
  header: PropTypes.string,
  footer: PropTypes.string,
  show: PropTypes.bool,
  isCloseIconRequired: PropTypes.bool,
  hideBackdrop: PropTypes.bool,
  classes: PropTypes.object,
  sx: PropTypes.object,
  rootStyle: PropTypes.object,
  headerStyle: PropTypes.object,
  footerStyle: PropTypes.object,
  childrenStyle: PropTypes.object,
  closeStyle: PropTypes.object,
};
