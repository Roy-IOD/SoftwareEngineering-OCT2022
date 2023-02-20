import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import { useState, useEffect } from 'react';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';

function Planets() {
  const [planet, setPlanet] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(null);

  useEffect(() => {
    fetch('https://swapi.dev/api/planets/?page='+currentPage)
      .then(response => response.json())
      .then(data => {
        setPlanet(data.results);
        setTotalPages(data.count / 10);
      })
      .catch(error => {
        console.log(error);
      });
  }, [currentPage]);

  const handlePrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  return (
    <div className="Planet">
        <h1>Planets</h1>
      <p>The mystical worlds of the Star Wars universe</p>
      <Grid container>
      {planet.map((planet, index) => (
        <Grid item xs={6}>
        <Card key={index} style={{ margin: '0.5rem', backgroundColor: 'black', color: 'white', border: '1px solid yellow' }}>
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
        <Button onClick={handlePrevPage} disabled={currentPage === 1}>
          Previous page
          </Button>
        <Button onClick={handleNextPage} disabled={currentPage === totalPages}>
          Next Page
        </Button>
    </div>
  );
}


export default Planets;