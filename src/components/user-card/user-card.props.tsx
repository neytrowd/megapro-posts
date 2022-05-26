import React from 'react';
import IUser from '../../types/user';

export interface UserCardProps extends React.ComponentProps<'div'> {
   user: IUser;
}
