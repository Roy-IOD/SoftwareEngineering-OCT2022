import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import { useState, useEffect } from 'react';
import Grid from '@mui/material/Grid';

function People() {
  const [people, setPeople] = useState([]);

  useEffect(() => {
    fetch('https://swapi.dev/api/people/')
      .then(response => response.json())
      .then(data => {
        setPeople(data.results);
      })
      .catch(error => {
        console.log(error);
      });
  }, []);

  return (
    <div className="People">
        <h1>People</h1>
      <p>The Star Wars characters that you know and love</p>
      <Grid container>
      {people.map((people, index) => (
        <Grid item xs={4}>
        <Card key={index} style={{ margin: '1rem' }}>
            <CardContent>
                <Typography variant="h5" component="h2">
                    {people.name}
                </Typography>
                <Typography variant="body2" component="p">
                    Hair colour: {people.hair_color}
                </Typography>
                <Typography variant="body2" component="p">
                    Eye colour: {people.eye_color}
                </Typography>
                <Typography variant="body2" component="p">
                    Year of birth: {people.birth_year}
                </Typography>
                </CardContent>
        </Card>
        </Grid>
      ))}
      </Grid>
    </div>
  );
}

export default People;