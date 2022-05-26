import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import styles from './not-found.module.scss';

const NotFound = () => {
   return (
      <Box className={styles.root} data-tesid="not-found-page">
         <Typography variant="h2">404 Not found</Typography>
      </Box>
   );
};

export default NotFound;
