import React,  { useEffect } from 'react';
import { useState } from 'react';
import axios from 'axios'
import GetShop from '../components/GetShop'
import "../fonts/Burbank-Big-Condensed-Black.ttf"
import Typography from '@mui/material/Typography';


function Shop() {
  const [dailyshopitems, setDailyItems] = useState([])
      useEffect(() => {
        axios.get('https://fortnite-api.com/v2/shop/br')
              .then(response => {
              let shopitem = response.data.data.daily.entries;
              setDailyItems(shopitem)
              console.log(shopitem)
              })}, []
  )

  const [featuredshopitems, setFeaturedItems] = useState([])
      useEffect(() => {
        axios.get('https://fortnite-api.com/v2/shop/br')
              .then(response => {
              let shopitem = response.data.data.featured.entries;
              setFeaturedItems(shopitem)
              console.log(shopitem)
              })}, []
  )

  



      return (
          <div className="Shop" style={{  
            backgroundImage: "url(" + "https://www.pcgamesn.com/wp-content/sites/pcgamesn/2022/10/fortnite-map-chapter-4-season-1-castle.jpg" + ")",
            objectFit: 'cover', width: '100%', height: '100vh', position: 'fixed', top: 64, left: 0
          }}>
          <br></br>
          <Typography   variant="h2" style={{ color: 'white', fontFamily: 'Fortnite',  letterSpacing: '.2rem',}}>Shop:</Typography>

          <GetShop dailyShop={dailyshopitems} featuredShop={featuredshopitems} />

          </div>
      )
  }
  
  export default Shop