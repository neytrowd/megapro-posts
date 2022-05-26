import React from 'react';
import IPost from '../../types/post';

export interface PostCardProps extends React.ComponentProps<'div'> {
   data: IPost;
}
