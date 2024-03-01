/* eslint-disable camelcase */
import LoadingButton from '@mui/lab/LoadingButton';
import PropTypes from 'prop-types';
import { button_style } from './style';

export function Button(props) {
  const {
    children,
    variant = 'contained',
    disabled = false,
    startIcon = '',
    endIcon = '',
    component = '',
    loading = false,
    size = 'medium',
    fullWidth = true,
    buttonStyle = {},
    onClick = () => {},
    className = '',
    ...rest
  } = props;
  return (
    <LoadingButton
      variant={variant}
      startIcon={startIcon}
      endIcon={endIcon}
      disabled={disabled}
      size={size}
      component={component}
      sx={{ ...button_style.rootSx, ...buttonStyle }}
      fullWidth={fullWidth}
      onClick={onClick}
      className={`${className}`}
      loading={loading}
      {...rest}
    >
      {children}
    </LoadingButton>
  );
}

Button.propTypes = {
  className: PropTypes.string,
  component: PropTypes.string,
  variant: PropTypes.oneOf(['contained', 'outlined', 'text']),
  children: PropTypes.node,
  disabled: PropTypes.bool,
  loading: PropTypes.bool,
  size: PropTypes.oneOf(['small', 'medium', 'large']),
  startIcon: PropTypes.node,
  endIcon: PropTypes.node,
  fullWidth: PropTypes.bool,
  onClick: PropTypes.func,
  classes: PropTypes.object,
  sx: PropTypes.object,
  buttonStyle: PropTypes.object,
};
