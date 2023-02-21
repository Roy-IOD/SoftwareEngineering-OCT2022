import React from 'react';
import { useState } from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import "../fonts/Burbank-Big-Condensed-Black.ttf"
import ShopCard from './ShopCard'
import Grid from '@mui/material/Grid';



function GetShop(props) {
      const [currentShop, updateShop] = useState(props.dailyShop)
      const handleChange = (e) => {
            updateShop(e.target.value)
      }

      return (
            <div>
                  <FormControl variant='filled'  sx={{ backgroundColor:'white', fontFamily: 'Fortnite', m: 1, width: 250 }}>
                        <InputLabel style={{ color: 'black',  fontFamily: 'Fortnite', letterSpacing: '.1rem',}}>Items</InputLabel>
                              <Select onChange={handleChange} defaultValue={props.dailyShop} style={{ color: 'black', fontFamily: 'Fortnite',  letterSpacing: '.2rem',}}>
                                    <MenuItem value={props.dailyShop} style={{ color: 'black', fontFamily: 'Fortnite',  letterSpacing: '.2rem',}}>DAILY</MenuItem>
                                    <MenuItem value={props.featuredShop} style={{ color: 'black', fontFamily: 'Fortnite',  letterSpacing: '.2rem',}}>FEATURED</MenuItem>
                              </Select>
                  </FormControl>
                  <Grid wrap='wrap' container spacing={2} width='100%' >
                        {currentShop.map((shopitem) => shopitem.items.map((item) => 
                              <Grid item xs={6} md={3} lg={2} key={item.id}>
                                    <ShopCard name={item.name} price={shopitem.finalPrice} image={item.images.icon} description={item.description}/>
                              </Grid>))}
                  </Grid>
            </div>
      )
  }

export default GetShop