import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { UserCardProps } from './user-card.props';
import styles from './user-card.module.scss';

const UserCard: React.FC<UserCardProps> = ({ user }) => {
   const { username, name, email, phone, website } = user;

   return (
      <Card className={styles.root}>
         <CardContent>
            <Typography gutterBottom variant="h5" component="div">
               {username}
            </Typography>
            <Typography gutterBottom variant="body2" color="text.secondary">
               <span className={styles.info}>Name:</span> {name}
            </Typography>
            <Typography gutterBottom variant="body2" color="text.secondary">
               <span className={styles.info}>Email:</span> {email}
            </Typography>
            <Typography gutterBottom variant="body2" color="text.secondary">
               <span className={styles.info}>Website:</span> {website}
            </Typography>
            <Typography gutterBottom variant="body2" color="text.secondary">
               <span className={styles.info}>Phone:</span> {phone}
            </Typography>
         </CardContent>
      </Card>
   );
};

export default UserCard;
