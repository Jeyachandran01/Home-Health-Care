/* eslint-disable react/jsx-key */
import { Box, Typography } from '@mui/material';
import React from 'react';
import { home_style } from './style';

export default function Home() {
  return (
    <Box sx={home_style.rootSx}>
      <Typography variant="h3" sx={{ fontWeight: 500 }}>
        Monorepo Boilerplate - JS
      </Typography>
    </Box>
  );
}
