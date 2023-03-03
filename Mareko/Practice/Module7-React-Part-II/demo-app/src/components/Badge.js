import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import { deepPurple } from '@mui/material/colors';

export default function Badge() {
  return (
    <Stack className='Badge center' direction="row" spacing={2}>
      <Avatar sx={{ bgcolor: deepPurple[500] }} alt="Mareko Petero" src="/static/images/avatar/Resume-Profile.jpg" style={{ width: '50px', height: '50px' }} >MP</Avatar>
    </Stack>
  );
}