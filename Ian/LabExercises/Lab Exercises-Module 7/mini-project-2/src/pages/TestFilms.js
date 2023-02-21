import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import { useState, useEffect } from 'react';
import Grid from '@mui/material/Grid';

function TestFilms() {
  const [films, setFilms] = useState([]);

  useEffect(() => {
    fetch('https://swapi.dev/api/films/')
      .then(response => response.json())
      .then(data => {
        setFilms(data.results);
      })
      .catch(error => {
        console.log(error);
      });
  }, []);

  return (
    <div className="Films">
      <h1>Films</h1>
      <p>This is the page that will have data on films on it.</p>
      <Grid container>
      {films.map((film, index) => (
        <Grid item xs={4}>
        <Card key={index} style={{ margin: '1rem' }}>
          <CardContent>
            <Typography variant="h5" component="h2">
              {film.title}
            </Typography>
            <Typography color="textSecondary">
              {film.release_date}
            </Typography>
            <Typography variant="body2" component="p">
              {film.opening_crawl}
            </Typography>
          </CardContent>
        </Card>
        </Grid>
      ))}
      </Grid>
    </div>
  );
}

export default TestFilms;


