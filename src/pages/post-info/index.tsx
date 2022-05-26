import React, { useEffect } from 'react';
import Box from '@mui/material/Box';
import { useAppDispatch, useAppSelector } from '../../lib/hooks/redux';
import Typography from '@mui/material/Typography';
import ResponseStatus from '../../components/response-status';
import { loadInfo } from '../../store/thunks/infoThunk';
import { useParams } from 'react-router-dom';
import Comments from './comments';

const PostInfo = () => {
   const { id } = useParams();
   const dispatch = useAppDispatch();
   const { post, user, comments, error, loading } = useAppSelector((store) => store.info);

   useEffect(() => {
      if (id) {
         dispatch(loadInfo({ id }));
      }
   }, []);

   return (
      <Box data-testid="post-info-page">
         <ResponseStatus error={error} loading={loading} />

         {!loading && !error && (
            <Box>
               <Typography gutterBottom variant="h5" component="div">
                  {post?.title}
               </Typography>
               <Typography gutterBottom variant="body2" color="text.secondary">
                  {post?.body}
               </Typography>

               <Typography>
                  Author:
                  <Typography color="primary" component="span">
                     {user?.name}
                  </Typography>
               </Typography>

               <Typography>
                  Email:
                  <Typography color="primary" component="span">
                     {user?.email}
                  </Typography>
               </Typography>

               <Typography>
                  Phone:
                  <Typography color="primary" component="span">
                     {user?.phone}
                  </Typography>
               </Typography>

               <Comments comments={comments} />
            </Box>
         )}
      </Box>
   );
};

export default PostInfo;
