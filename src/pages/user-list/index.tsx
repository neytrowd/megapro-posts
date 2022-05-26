import React, { useEffect, useState } from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import ResponseStatus from '../../components/response-status';
import Grid from '@mui/material/Grid';
import { useAppDispatch, useAppSelector } from '../../lib/hooks/redux';
import { loadUsers } from '../../store/thunks/userThunk';
import IUser from '../../types/user';
import UserCard from '../../components/user-card';
import { TextField } from '@mui/material';

const UserList = () => {
   const dispatch = useAppDispatch();
   const [search, setSearch] = useState('');
   const { users, loading, error } = useAppSelector((store) => store.users);

   useEffect(() => {
      dispatch(loadUsers());
   }, []);

   const changeHandle = (e: React.SyntheticEvent) => {
      setSearch((e.target as any).value);
   };

   const searchHandle = (arr: IUser[], str: string) => {
      if (str) {
         return arr.filter((item) => {
            str = str.toLowerCase();
            return item.email.toLowerCase().includes(str) || item.username.toLowerCase().includes(str);
         });
      }
      return arr;
   };

   return (
      <Box data-testid="user-list-page">
         <Box marginBottom="30px" display="flex" justifyContent="space-between" alignItems="center">
            <Typography variant="h4">User list</Typography>
            <TextField size="small" placeholder="Search by name or email..." onChange={changeHandle} />
         </Box>

         <ResponseStatus error={error} loading={loading} />

         {!loading && !error && (
            <Grid container spacing={{ xs: 2, md: 3 }}>
               {searchHandle(users, search).map((user: IUser) => (
                  <Grid item xs={12} sm={4} md={3} key={user.id}>
                     <UserCard user={user} />
                  </Grid>
               ))}
            </Grid>
         )}
      </Box>
   );
};

export default UserList;
