import React from 'react';
import { Grid, Typography } from '@mui/material';

const images = [
  'https://dotcms.ipsy.com/contentAsset/raw-data/ac24c693-0597-4b3d-a2c7-494f308c3715/fileAsset?byInode=true',
  'https://dotcms.ipsy.com/contentAsset/raw-data/defea5d5-a127-4fa3-befc-2ac070159e4d/fileAsset?byInode=true',
  'https://dotcms.ipsy.com/contentAsset/raw-data/5876ce5b-5049-4b0b-998c-bbe4730c2051/fileAsset?byInode=true',
];

const Opener = () => {
  return (
    <Grid container spacing={2} justifyContent="center">
      {images.map((image, index) => (
        <Grid item key={index} xs={4} sm={4}>
          <img src={image} alt={`Image ${index}`} style={{ width: '100%', height: '350px' }} />


        </Grid>
      ))}
    </Grid>
  );
};

export default Opener;