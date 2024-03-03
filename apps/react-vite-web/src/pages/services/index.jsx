/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable react/no-array-index-key */
import { Box, Grid, Typography } from '@mui/material';
import { useState } from 'react';
import * as React from 'react';
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import IconButton from '@mui/material/IconButton';
// import CloseIcon from '@mui/icons-material/Close';

export default function Services() {
  const data = [
    {
      service: 'Most booked services',
      data: [
        {
          logo: 'https://res.cloudinary.com/urbanclap/image/upload/q_auto,f_auto,fl_progressive:steep,w_532/t_high_res_category/images/growth/home-screen/1640322586655-03f2a3.jpeg',
          services: 'Instant Video Consult',
          text: 'Free & instant daignosis',
          name: 'Laptop Service',
          price: 'Starts at ₹589',
          content:
            'Jet cleaning of indoor unit & basic cleaning of outdoor unit',
        },
        {
          logo: 'https://res.cloudinary.com/urbanclap/image/upload/q_auto,f_auto,fl_progressive:steep,w_532/t_high_res_category/categories/category_v2/category_c0667020.png',
          services: 'Geyser',
          text: 'Starts at ₹249',
          name: 'Geyser Service',
          price: 'Starts at ₹249',
          content:
            'Jet cleaning of indoor unit & basic cleaning of outdoor unit',
        },
        {
          logo: 'https://res.cloudinary.com/urbanclap/image/upload/q_auto,f_auto,fl_progressive:steep,w_532/t_high_res_category/categories/category_v2/category_bbb8c690.png',
          services: 'Water Purifier',
          text: 'Up to 45% Off',
          name: 'Water Purifier Service',
          price: 'Starts at ₹299',
          content:
            'Prevents frequent gas leakages through a unique anti-rust spray',
        },
        {
          logo: 'https://res.cloudinary.com/urbanclap/image/upload/q_auto,f_auto,fl_progressive:steep,w_532/t_high_res_category/images/growth/home-screen/1635829954373-d05590.jpeg',
          services: 'Air Purifier',
          text: 'Flat ₹100 Off',
          name: 'Air Purifier Service',
          price: 'Starts at ₹299',
          content: ' Detailed issue diagnosis with same day resolution',
        },
      ],
    },
    {
      service: 'Saloon services',
      data: [
        {
          logo: 'https://res.cloudinary.com/urbanclap/image/upload/q_auto,f_auto,fl_progressive:steep,w_532/t_high_res_category/images/growth/home-screen/1603078782132-dfcd55.jpeg',
          text: 'Free Waxing',
          services: 'Salon Prime',
          name: 'Free Waxing Service',
          price: 'Starts at ₹589',
          content:
            'Jet cleaning of indoor unit & basic cleaning of outdoor unit',
        },
        {
          logo: 'https://res.cloudinary.com/urbanclap/image/upload/q_auto,f_auto,fl_progressive:steep,w_532/t_high_res_category/images/growth/home-screen/1615874646690-66ab68.jpeg',
          text: 'Flat ₹100 Off ',
          services: 'Salon For Men',
          name: 'Salon For Men',
          price: 'Starts at ₹689',
          content: 'Detailed issue diagnosis with same day resolution',
        },
        {
          logo: 'https://res.cloudinary.com/urbanclap/image/upload/q_auto,f_auto,fl_progressive:steep,w_532/t_high_res_category/images/growth/home-screen/1601893536279-77bf02.png',
          text: 'Free head massage',
          services: 'Spa For Women',
          name: 'Spa For Women',
          price: 'Starts at ₹259',
          content:
            'Prevents frequent gas leakages through a unique anti-rust spray',
        },
        {
          logo: 'https://res.cloudinary.com/urbanclap/image/upload/q_auto,f_auto,fl_progressive:steep,w_532/t_high_res_category/images/supply/customer-app-supply/1606211470897-f4afbc.jpeg',
          text: 'Starts at ₹499 ',
          services: 'Massage For Men',
          name: 'Water Purifier Service',
          price: 'Starts at ₹499',
          content:
            'Prevents frequent gas leakages through a unique anti-rust spray',
        },
      ],
    },
    {
      service: 'Cleaning services',
      data: [
        {
          logo: 'https://res.cloudinary.com/urbanclap/image/upload/q_auto,f_auto,fl_progressive:steep,w_532/t_high_res_category/images/growth/home-screen/1625159882387-9585c7.jpeg',
          services: 'Bathroom And Kitchen Cleaning',
          text: '',
          name: 'Classic cleaning - 2 bathroom pack',
          price: 'Starts at ₹499',
          content:
            'Hand cleaning of all areas: toilet pot, tiles, basin, exhaust etc.',
        },
        {
          logo: 'https://res.cloudinary.com/urbanclap/image/upload/q_auto,f_auto,fl_progressive:steep,w_532/t_high_res_category/images/growth/luminosity/1632396793425-1a5418.jpeg',
          services: 'Full Home Cleaning',
          text: '',
          name: 'Classic cleaning - Full Home pack',
          price: 'Starts at ₹459',
          content:
            'Targets salt water stains and tile discoloration with scrubbing machine',
        },
        {
          logo: 'https://res.cloudinary.com/urbanclap/image/upload/q_auto,f_auto,fl_progressive:steep,w_532/t_high_res_category/images/growth/home-screen/1630420912606-2fffa6.jpeg',
          services: 'Sofa & Carpet Cleaning',
          text: '',
          name: 'Sofa & Carpet Service',
          price: 'Starts at ₹699',
          content:
            'Intense cleaning with scrubbing machine at only ₹494/bathroom',
        },
        {
          logo: 'https://res.cloudinary.com/urbanclap/image/upload/q_auto,f_auto,fl_progressive:steep,w_532/t_high_res_category/images/growth/luminosity/1631159612066-53b210.jpeg',
          services: 'Cockroach, Ant & General Pest Control',
          text: '',
          name: 'Bathroom & Kitchen with Utensil Removal',
          price: 'Starts at ₹489',
          content: 'Unique 2-visit treatment for protection from pests',
        },
      ],
    },
    {
      service: '',
      data: [
        {
          logo: 'https://res.cloudinary.com/urbanclap/image/upload/q_auto,f_auto,fl_progressive:steep,w_532/t_high_res_category/images/growth/luminosity/1632490257439-ef28d2.jpeg',
          services: 'Bed Bugs Control',
          text: '',
          name: 'Bungalow Pest Control',
          price: 'Starts at ₹799',
          content:
            'Essential pre-service inspection of the entire house to assess infestation level',
        },
        {
          logo: 'https://res.cloudinary.com/urbanclap/image/upload/q_auto,f_auto,fl_progressive:steep,w_532/t_high_res_category/images/growth/luminosity/1632474326407-0aae21.jpeg',
          services: 'Termite Control',
          text: '',
          name: 'Utensils Removal Service',
          price: 'Starts at ₹409',
          content:
            'Partner will remove the utensils before starting the service. ',
        },
      ],
    },
    {
      service: 'Home services',
      data: [
        {
          logo: 'https://res.cloudinary.com/urbanclap/image/upload/q_auto,f_auto,fl_progressive:steep,w_532/t_high_res_category/categories/bigpictures/carpenter.jpg',
          services: 'Furniture Making, Upholstery & Polish',
          text: '',
          name: 'All home works',
          price: 'Starts at ₹499',
          content:
            'Furniture Making, Upholstery & Polish Furniture Making, Upholstery & Polish',
        },
        {
          logo: 'https://res.cloudinary.com/urbanclap/image/upload/q_auto,f_auto,fl_progressive:steep,w_532/t_high_res_category/categories/home_screen/carpenter.jpg',
          services: 'Carpenters',
          text: '',
          name: 'Carpenters Service',
          price: 'Starts at ₹489',
          content:
            'Prevents frequent gas leakages through a unique anti-rust spray',
        },
        {
          logo: 'https://res.cloudinary.com/urbanclap/image/upload/q_auto,f_auto,fl_progressive:steep,w_532/t_high_res_category/categories/category_v2/category_a91b73d0.jpeg',
          services: 'Electricians',
          text: '',
          name: 'Electricians Service',
          price: 'Starts at ₹799',
          content: 'Labor charges for Installation of one AC switchbox',
        },
        {
          logo: 'https://res.cloudinary.com/urbanclap/image/upload/q_auto,f_auto,fl_progressive:steep,w_532/t_high_res_category/categories/home_screen/plumber.jpg',
          services: 'Plumber',
          text: '',
          name: 'Plumber Service',
          price: 'Starts at ₹899',
          content: 'Uninstallation of ceiling, exhaust or wall fan',
        },
      ],
    },
  ];

  const [isModelOpen, setIsModelOpen] = useState(false);
  const [modaelData, setModelData] = useState({});

  const onCardClick = (obj) => {
    setModelData(obj);
    setIsModelOpen(true);
  };

  const handleClose = () => {
    setIsModelOpen(false);
  };

  const BootstrapDialog = styled(Dialog)(({ theme }) => ({
    '& .MuiDialogContent-root': {
      padding: theme.spacing(2),
      width: 600,
    },
    '& .MuiDialogActions-root': {
      padding: theme.spacing(1),
    },
  }));

  return (
    <Box width="100%">
      {data?.map((obj, i) => (
        <Box key={i} p={5}>
          <Typography variant="h4" py={2} fontWeight={600}>
            {obj?.service}
          </Typography>
          <Grid container spacing={2}>
            {obj?.data?.map((object, index) => (
              <Grid item xs={3} key={index}>
                <Box sx={{ bgcolor: '#fff', p: 3, borderRadius: '12px' }}>
                  <img
                    onClick={() => onCardClick(object)}
                    src={object?.logo}
                    style={{
                      height: '205px',
                      width: '300px',
                      borderRadius: '8px',
                      cursor: 'pointer',
                    }}
                    alt=""
                  />
                  <Typography fontWeight={600}>{object?.services}</Typography>
                  <Typography>{object?.text}</Typography>
                </Box>
              </Grid>
            ))}
          </Grid>
        </Box>
      ))}

      <BootstrapDialog
        onClose={handleClose}
        aria-labelledby="customized-dialog-title"
        open={isModelOpen}
      >
        <DialogTitle sx={{ m: 0, p: 2 }} id="customized-dialog-title">
          Book Order
        </DialogTitle>
        <IconButton
          aria-label="close"
          onClick={handleClose}
          sx={{
            position: 'absolute',
            right: 8,
            top: 8,
            color: (theme) => theme.palette.grey[500],
          }}
        >
          ×
        </IconButton>
        <DialogContent dividers>
          <Grid container>
            <Grid item xs={6}>
              <img
                src={modaelData?.logo}
                style={{
                  height: '180px',
                  width: '270px',
                  borderRadius: '8px',
                  cursor: 'pointer',
                }}
                alt=""
              />
            </Grid>
            <Grid item xs={6}>
              <Typography fontWeight={600} pb={1}>
                {modaelData?.services}
              </Typography>
              <Typography fontSize={12} color="#888888" pb={1}>
                {modaelData?.text}
              </Typography>
              <Typography fontSize={12} pb={1} fontWeight={600}>
                {modaelData?.name}
              </Typography>
              <Typography fontSize={12} pb={1}>
                {modaelData?.price}
              </Typography>
              <Typography fontSize={10} color="#888888" pb={1}>
                {modaelData?.content}
              </Typography>
            </Grid>
          </Grid>
        </DialogContent>
        <DialogActions>
          <Button
            sx={{ textTransform: 'capitalize' }}
            variant="contained"
            onClick={handleClose}
          >
            Book Now
          </Button>
          <Button
            variant="contained"
            color="error"
            sx={{ textTransform: 'capitalize' }}
            onClick={handleClose}
          >
            Close
          </Button>
        </DialogActions>
      </BootstrapDialog>
    </Box>
  );
}
