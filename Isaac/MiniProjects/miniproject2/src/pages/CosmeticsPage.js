import React,  { useEffect } from 'react';
import { useState } from 'react';
import axios from 'axios'
import GetCosmetics from '../components/GetCosmetics'
import SearchCosmetics from '../components/SearchCosmetics'
import "../fonts/Burbank-Big-Condensed-Black.ttf"
import Typography from '@mui/material/Typography';


function Cosmetics() {
      const [cosmetics, setCosmetics] = useState([])
      useEffect(() => {
        axios.get('https://fortnite-api.com/v2/cosmetics/br/new')
              .then(response => {
              let cosmetic = response.data.data.items;
              console.log(cosmetic)
              setCosmetics(cosmetic)
              })}, []
  )
              
      return (
          <div className="Shop" style={{  
            backgroundImage: "url(" + "https://i.pinimg.com/originals/30/cf/0a/30cf0a4b5b8bb9bd3de6c8350261a662.png" + ")",
            objectFit: 'cover', width: '100%', height: '100vh', position: 'fixed', top: 64, left: 0
          }}>
            <br></br>
            <Typography   variant="h2" style={{ color: 'white', fontFamily: 'Fortnite',  letterSpacing: '.2rem',}}>Cosmetics</Typography>
            <SearchCosmetics currentCosmetics={cosmetics} setCosmetics={setCosmetics}/>
            <br></br>
            <GetCosmetics currentCosmetics={cosmetics} />
          </div>
      )
  }
  
export default Cosmetics