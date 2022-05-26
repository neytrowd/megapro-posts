import React from 'react';
import './assets/styles/index.scss';
import Page from './layouts/page';
import { ThemeProvider, CssBaseline } from '@mui/material';
import theme from './assets/theme';
import { Routes, Route } from 'react-router-dom';
import routes from './constants/routes';

function App() {
   return (
      <div className="App">
         <ThemeProvider theme={theme}>
            <CssBaseline />
            <Page title="Mega pro app">
               <Routes>
                  {routes.map((route) => (
                     <Route key={route.path} path={route.path} element={route.component} />
                  ))}
               </Routes>
            </Page>
         </ThemeProvider>
      </div>
   );
}

export default App;
