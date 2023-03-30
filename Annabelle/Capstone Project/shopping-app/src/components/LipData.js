import { useState, useEffect } from "react";
import { Card, CardContent, Typography, Grid } from "@mui/material";

function MakeupCard({ makeup }) {
    return (
      <Card className="card-single"  style={{ backgroundColor:'#f5f0f4',display:'flex', justifyContent: 'center', alignItems:'center', width:'300px', alignContent:'center', fontFamily:'Montserrat' }}> 
        <CardContent>
        <img src={makeup.image_link} alt={makeup.name} style={{ height:'200px' }} /><br/>
          <Typography variant="h5" style={{fontFamily:'Montserrat', fontWeight:'bold', textAlign:'center', marginTop:'10px'}}>{makeup.name}</Typography>
          <Typography variant="body1" style={{fontFamily:'Montserrat', textAlign:'center',}}>{makeup.brand}</Typography>
          <Typography variant="body2" style={{fontFamily:'Montserrat',textAlign:'center',}}>{makeup.price}</Typography>
        </CardContent>
      </Card>
    );
  }

function CardData() {
    const [makeupData, setMakeupData] = useState([]);
  
    useEffect(() => {
      fetch("https://makeup-api.herokuapp.com/api/v1/products.json")
        .then((response) => response.json())
        .then((data) => setMakeupData(data));
    }, []);
  
    const filteredMakeupData = makeupData.filter((makeup) =>
      ["lipstick", "lip_liner"].includes(makeup.product_type)
    );
  
    return (
      <Grid container spacing={2} style={{display:'flex', justifyContent:'center'}}>
        {filteredMakeupData.map((makeup) => (
          <Grid item xs={12} sm={6} md={3} key={makeup.id}>
            <MakeupCard makeup={makeup} />
          </Grid>
        ))}
      </Grid>
    );
  }
  
  export default CardData;
  