import React from 'react';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';


function CardButton(props) {
  return (
      <Button href="https://en.wikipedia.org/wiki/Australia" variant="outlined">{props.location}</Button>
  );
}


export default CardButton