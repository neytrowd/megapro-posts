import React from 'react';

export interface ResponseStatusProps extends React.ComponentProps<'div'> {
   error: string;
   loading: boolean;
}
