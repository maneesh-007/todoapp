import React from 'react';
import { Box, Typography, Container, Link } from '@mui/material';

export default function UserFooter() {
  const currentYear = new Date().getFullYear();

  return (
    <Box
      component="footer"
      sx={{
        py: 3,
        px: 2,
        mt: 'auto',
        backgroundColor: (theme) =>
          theme.palette.mode === 'light'
            ? theme.palette.grey[200]
            : theme.palette.grey[800],
      }}
    >
      <Container maxWidth="sm">
        <Typography variant="body2" color="text.secondary" align="center">
          {'© '}
          {currentYear}{' '}
          <Link color="inherit" underline="hover" href="#">
            Trudoes
          </Link>
          {'. All rights reserved.'}
        </Typography>
      </Container>
    </Box>
  );
}