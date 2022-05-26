import React, { useEffect } from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import PostCard from '../../components/post-card';
import { useAppDispatch, useAppSelector } from '../../lib/hooks/redux';
import IPost from '../../types/post';
import { loadPosts } from '../../store/thunks/postThunk';
import ResponseStatus from '../../components/response-status';

const PostList = () => {
   const dispatch = useAppDispatch();
   const { posts, loading, error } = useAppSelector((store) => store.posts);

   useEffect(() => {
      dispatch(loadPosts());
   }, []);

   return (
      <Box data-testid="post-list-page">
         <Box marginBottom="30px">
            <Typography variant="h4">Post list</Typography>
         </Box>

         <ResponseStatus error={error} loading={loading} />

         {!loading && !error && (
            <Grid container spacing={{ xs: 2, md: 3 }}>
               {posts.map((post: IPost) => (
                  <Grid item xs={12} sm={4} md={3} key={post.id}>
                     <PostCard data={post} />
                  </Grid>
               ))}
            </Grid>
         )}
      </Box>
   );
};

export default PostList;
