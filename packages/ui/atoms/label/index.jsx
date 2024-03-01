/* eslint-disable camelcase */
import { FormLabel, Typography } from '@mui/material';
import PropTypes from 'prop-types';
import { labelText_style } from './style';

export function Label(props) {
  const { rootStyle = {}, children = '', isRequired, htmlFor = '' } = props;
  return (
    <FormLabel
      style={{ ...labelText_style.labelSx, ...rootStyle }}
      htmlFor={htmlFor}
    >
      {children}
      {isRequired && (
        <Typography color="error" variant="caption">
          &nbsp;*
        </Typography>
      )}
    </FormLabel>
  );
}
Label.propTypes = {
  rootStyle: PropTypes.object,
  isRequired: PropTypes.bool,
  children: PropTypes.string,
  htmlFor: PropTypes.string,
};
