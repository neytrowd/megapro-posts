import React from 'react';
import IComment from '../../../types/comment';

export interface CommentsProps extends React.ComponentProps<'div'> {
   comments: IComment[];
}
