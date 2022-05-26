import React from 'react';
import Box from '@mui/material/Box';
import { ResponseStatusProps } from './response-status.props';
import Typography from '@mui/material/Typography';
import styles from './response-status.module.scss';

const ResponseStatus: React.FC<ResponseStatusProps> = ({ loading, error }) => {
   return (
      <Box className={styles.root}>
         {loading && <Typography variant="h6">Loading...</Typography>}
         {!loading && error && <Typography variant="h6">{error}</Typography>}
      </Box>
   );
};

export default ResponseStatus;
