import { CardMedia, Grid } from '@mui/material';
import React, {useState, useEffect} from 'react';
import { Card } from '@mui/material';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';


function DataFetching() {
const [isLoading, setIsLoading] = React.useState(true);
const [villagers, setVillagers] = useState({})

React.useEffect(() => {
    const url = "https://acnhapi.com/v1/villagers/";
    fetch(url)
      .then((response) => response.json())
      .then((json) => {setVillagers(json); setIsLoading(false);})
      .catch((error) => console.log(error));
  }, []);
 
  return (
    <div>
		<Grid container spacing={4}> 
      {isLoading ? (
        <h1>Loading...</h1>) : (
        Object.entries (villagers).map((user) => {console.log(user);
		
		const villager = user[1]

			return (
			<Grid item xs={3}>
			<Card>
			<CardMedia component="img" image={villager.image_uri} title='villager'/>
				<CardContent>


                <Typography gutterBottom variant="h5" component="div">
				Name:  {villager.name["name-USen"]} 
                </Typography>

                <Typography variant="body2" color="text.secondary">
				Personality:  {villager.personality} <br/>
				Species:  {villager.species} <br/>
				Gender:  {villager.gender} <br/>
				Catch Phrase:  {villager['catch-phrase']}
                </Typography>
            </CardContent>
			</Card>
			</Grid>
        )})
      )}
	  </Grid>
    </div>
  );
}

export default DataFetching