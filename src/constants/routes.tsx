import React from 'react';
import PostList from '../pages/post-list';
import PostInfo from '../pages/post-info';
import UserList from '../pages/user-list';
import NotFound from '../pages/not-found';

const routes = [
   {
      path: '/',
      component: <PostList />,
   },
   {
      path: '/info/:id',
      component: <PostInfo />,
   },
   {
      path: '/users',
      component: <UserList />,
   },
   {
      path: '*',
      component: <NotFound />,
   },
];

export default routes;
