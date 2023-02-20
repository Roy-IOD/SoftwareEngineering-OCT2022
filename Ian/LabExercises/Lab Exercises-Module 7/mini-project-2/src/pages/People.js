import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import { useState, useEffect } from 'react';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';

function People() {
  const [people, setPeople] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(null);

  useEffect(() => {
    fetch('https://swapi.dev/api/people/?page='+currentPage)
    // This should fetch the current page. If left as /page then it still loads first 10 results
      .then(response => response.json())
      .then(data => {
        setPeople(data.results);
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
      <Button onClick={handlePrevPage} disabled={currentPage === 1}>
        Previous page
        </Button>
      <Button onClick={handleNextPage} disabled={currentPage === totalPages}>
        Next Page
      </Button>
    </div>
  );
}

export default People;