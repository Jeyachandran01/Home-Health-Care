// 1. Imports - Refer coding_standard docs for the import order
import PageNotFoundImage from '@assets/pageNotFound.png';
import { Button } from '@atoms';
import { Box, Grid, Typography } from '@mui/material';
import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';
import { appRoutes } from '@core/routes';

import { page_not_found_style } from './style';

function PageNotFound(props) {
  const { className = '', rootStyle = {}, ...rest } = props;
  const navigate = useNavigate();

  return (
    <Box
      sx={{ ...page_not_found_style.rootSx, ...rootStyle }}
      className={`${className}`}
      {...rest}
    >
      <Box py={0}>
        <Grid container py={0}>
          <Grid
            item
            xs={12}
            sm={12}
            md={12}
            display="flex"
            justifyContent="center"
          >
            <Box sx={page_not_found_style.imageBoxSx}>
              <img src={PageNotFoundImage} alt="" />
            </Box>
          </Grid>
          <Grid item xs={12} sm={12} md={12} lg={12} xl={12} mt={4}>
            <Grid container display="flex" justifyContent="center">
              <Grid
                item
                xs={12}
                sm={12}
                md={12}
                display="flex"
                justifyContent="center"
              >
                <Typography sx={page_not_found_style.headerTextSx}>
                  Page Not Found
                </Typography>
              </Grid>
              <Grid
                item
                xs={12}
                sm={12}
                md={12}
                lg={12}
                xl={12}
                display="flex"
                justifyContent="center"
                mt={1.8}
              >
                <Box sx={page_not_found_style.bodyContentSx}>
                  <Typography sx={page_not_found_style.bodyContentTextSx}>
                    We&apos;re Sorry, The Page You Requested Could Not Be Found
                    Please Go Back
                  </Typography>
                </Box>
              </Grid>
              <Grid
                item
                xs={12}
                sm={12}
                md={12}
                lg={12}
                xl={12}
                display="flex"
                justifyContent="center"
                mt={4}
              >
                <Button
                  variant="contained"
                  buttonStyle={page_not_found_style.buttonSx}
                  onClick={() => navigate(appRoutes.home)}
                >
                  Go Home
                </Button>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
}

export { PageNotFound };

PageNotFound.propTypes = {
  className: PropTypes.string,
  rootStyle: PropTypes.object,
};
