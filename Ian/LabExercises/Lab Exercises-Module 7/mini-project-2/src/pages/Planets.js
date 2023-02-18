import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import { useState, useEffect } from 'react';
import Grid from '@mui/material/Grid';

function Planets() {
  const [planet, setPlanet] = useState([]);

  useEffect(() => {
    fetch('https://swapi.dev/api/planets/')
      .then(response => response.json())
      .then(data => {
        setPlanet(data.results);
      })
      .catch(error => {
        console.log(error);
      });
  }, []);

  return (
    <div className="Planet">
        <h1>Planets</h1>
      <p>The mystical worlds of the Star Wars universe</p>
      <Grid container>
      {planet.map((planet, index) => (
        <Grid item xs={4}>
        <Card key={index} style={{ margin: '1rem' }}>
            <CardContent>
                <Typography variant="h5" component="h2">
                    {planet.name}
                </Typography>
                <Typography variant="body2" component="p">
                    Population: {planet.population}
                </Typography>
                <Typography variant="body2" component="p">
                    Hours in a day: {planet.rotation_period}
                </Typography>
                <Typography variant="body2" component="p">
                    Days in a year: {planet.orbital_period}
                </Typography>
                </CardContent>
        </Card>
        </Grid>
      ))}
      </Grid>
    </div>
  );
}


export default Planets;