import React from 'react';
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Divider from '@mui/material/Divider';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import { CommentsProps } from './comments.props';

const Comments: React.FC<CommentsProps> = ({ comments }) => {
   return (
      <Box>
         <Box margin="30px 0 10px 0">
            <Typography variant="h6">Comments</Typography>
         </Box>
         <List>
            {comments.map((comment) => (
               <React.Fragment key={comment.id}>
                  <Divider variant="inset" component="li" />
                  <ListItem alignItems="flex-start">
                     <ListItemAvatar>
                        <Avatar alt={comment.name.toUpperCase()} src="/static/images/avatar/1.jpg" />
                     </ListItemAvatar>
                     <ListItemText
                        primary={
                           <>
                              <Typography>{comment.email}</Typography>
                              <Typography color="primary">{comment.name}</Typography>
                           </>
                        }
                        secondary={<Typography>{comment.body}</Typography>}
                     />
                  </ListItem>
               </React.Fragment>
            ))}
         </List>
      </Box>
   );
};

export default Comments;
