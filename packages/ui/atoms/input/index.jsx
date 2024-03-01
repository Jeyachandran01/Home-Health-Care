import { TextField, Typography, InputAdornment } from '@mui/material';
import PropTypes from 'prop-types';
import { inputBox_style } from './style';

export function Input(props) {
  const {
    value = '',
    fullWidth = true,
    isReadOnly = false,
    helperText = '',
    isError = false,
    isMulti = false,
    rowMax = 5,
    rowMin = 5,
    placeholder = '',
    size = 'small',
    onChange = () => false,
    endAdornment,
    startAdornment,
    type = '',
    errorMessage = '',
    variant = 'outlined',
    textFieldStyle = {},
    className = '',
    ...rest
  } = props;
  return (
    <>
      <TextField
        type={type}
        size={size}
        sx={{ ...inputBox_style.textFieldSx, ...textFieldStyle }}
        variant={variant}
        value={value}
        placeholder={placeholder}
        fullWidth={fullWidth}
        disabled={isReadOnly}
        multiline={isMulti}
        maxRows={rowMax}
        minRows={rowMin}
        onChange={onChange}
        helperText={helperText}
        error={isError}
        className={`${className}`}
        InputProps={{
          // inputProps: { min: minimum },
          startAdornment: (
            <InputAdornment position="start">{startAdornment}</InputAdornment>
          ),
          endAdornment: (
            <InputAdornment position="end">{endAdornment}</InputAdornment>
          ),
        }}
        {...rest}
      />
      {isError && (
        <Typography sx={{ mt: 0.5 }} variant="caption" color="error">
          {errorMessage}
        </Typography>
      )}
    </>
  );
}
Input.propTypes = {
  textFieldStyle: PropTypes.object,
  className: PropTypes.string,
  variant: PropTypes.oneOf(['outlined', 'filled', 'standard']),
  value: PropTypes.string,
  onChange: PropTypes.func,
  disabled: PropTypes.bool,
  errorMessage: PropTypes.string,
  type: PropTypes.oneOf(['text', 'number']),
  size: PropTypes.oneOf(['small', 'medium', 'large']),
  placeholder: PropTypes.string,
  fullWidth: PropTypes.bool,
  endAdornment: PropTypes.node,
  startAdornment: PropTypes.node,
  isReadOnly: PropTypes.bool,
  isMulti: PropTypes.bool,
  rowMax: PropTypes.number,
  rowMin: PropTypes.number,
  helperText: PropTypes.string,
  isError: PropTypes.bool,
  sx: PropTypes.object,
};
