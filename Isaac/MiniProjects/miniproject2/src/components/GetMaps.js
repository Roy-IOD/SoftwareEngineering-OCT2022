import React,  { useEffect } from 'react';
import { useState } from 'react';
import axios from 'axios'
import MapCard from '../components/MapCard'
import Grid from '@mui/material/Grid';

function GetMaps() {
    const [maps, setMaps] = useState([])
        useEffect(() => {
            axios.get('https://fortnite-api.com/v1/map')
              .then(response => {
              let map = response.data.data.images;
              setMaps(map)
              })}, []
    )
    const [pois, setPois] = useState([])
        useEffect(() => {
            axios.get('https://fortnite-api.com/v1/map')
                .then(response => {
                let poi = response.data.data.pois;
                setPois(poi)
                })}, []
        )
  return (
      <div>
            <img src={maps.pois} style={{width: '100%', height: 'auto', top: 64, left: 0}} alt='Map'/>
         {/*    <Grid wrap='wrap' container spacing={2} >
                        {pois.map((pois) => 
                        <Grid item xs={6} md={3} lg={2} key={pois.id}>
                              <MapCard name={pois.name}/>
                        </Grid>)}
            </Grid> */}
            
      </div>
)
}
    
export default GetMaps