import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import styles from './post-card.module.scss';
import { useNavigate } from 'react-router-dom';
import { PostCardProps } from './post-card.props';

const PostCard: React.FC<PostCardProps> = ({ data }) => {
   const { id, title, body } = data;
   const navigate = useNavigate();

   const clickHandle = () => {
      navigate(`/info/${id}`);
   };

   return (
      <Card className={styles.root} onClick={clickHandle}>
         <CardContent>
            <Typography gutterBottom variant="h5" component="div">
               {title}
            </Typography>
            <Typography gutterBottom variant="body2" color="text.secondary">
               {body}
            </Typography>
         </CardContent>
      </Card>
   );
};

export default PostCard;
