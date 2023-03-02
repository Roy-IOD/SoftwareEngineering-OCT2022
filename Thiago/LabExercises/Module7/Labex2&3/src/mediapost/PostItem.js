import React from 'react';

import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';


function PostItem(props) {
      return (  
            <Card sx={{ maxWidth: 345, margin: 2 }} elevation={5}>
                        <CardContent>
                              <Typography variant="body2" color="text.secondary">
                                    {props.body}
                              </Typography>
                        </CardContent>
            </Card>
      );
};
  
export default PostItem;