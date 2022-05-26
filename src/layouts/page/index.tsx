import React from 'react';
import { PageProps } from './page.props';
import styles from './page.module.scss';
import Box from '@mui/material/Box';
import { AppBar, Toolbar, Typography } from '@mui/material';
import { NavLink } from 'react-router-dom';

const Page: React.FC<PageProps> = ({ title, children }) => {
   return (
      <Box className={styles.root}>
         <Box component="header" className={styles.header}>
            <AppBar>
               <Toolbar>
                  <Box className={styles.navbar}>
                     <Typography className={styles.title}>{title}</Typography>
                     <Box>
                        <NavLink className={styles.link} to="/">
                           Posts
                        </NavLink>
                        <NavLink className={styles.link} to="/users">
                           Users
                        </NavLink>
                     </Box>
                  </Box>
               </Toolbar>
            </AppBar>
         </Box>

         <Box component="main">{children}</Box>

         <Box component="footer" className={styles.footer}>
            <Box component="span" className={styles.copyright}>
               <a rel="noreferrer" target="_blank" href="https://megapro.kz/">
                  &copy; Mega pro {new Date().getFullYear()}
               </a>
            </Box>
            <Box component="span" className={styles.developer}>
               <a rel="noreferrer" target="_blank" href="https://github.com/neytrowd">
                  Made with ❤️ by neyt
               </a>
            </Box>
         </Box>
      </Box>
   );
};

export default Page;
