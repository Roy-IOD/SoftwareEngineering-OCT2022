import { useState, useEffect } from "react";
import { Card, CardContent, Typography, Grid, TextField } from "@mui/material";

function MakeupCard({ makeup }) {
  const [liked, setLiked] = useState(false);
  const [likedMakeup, setLikedMakeup] = useState([]); 

  const handleLikeClick = () => {
    if (liked) {
      setLikedMakeup((prevLiked) => prevLiked.filter((id) => id !== makeup.id));
    } else {
      setLikedMakeup((prevLiked) => [...prevLiked, makeup.id]);
    }
    setLiked(!liked);
  };

  return (
    <Card className="card-single" style={{ backgroundColor:'#f5f0f4',display:'flex', justifyContent: 'center', alignItems:'center', width:'300px', alignContent:'center', fontFamily:'Montserrat' }}> 
      <CardContent>
      <img src={makeup.image_link} alt={makeup.name} style={{ height:'200px' }} /><br/>
        <Typography variant="h5" style={{fontFamily:'Montserrat', fontWeight:'bold', textAlign:'center', marginTop:'10px'}}>{makeup.name}</Typography>
        <Typography variant="body1" style={{fontFamily:'Montserrat', textAlign:'center',}}>{makeup.brand}</Typography>
        <Typography variant="body2" style={{fontFamily:'Montserrat',textAlign:'center',}}>{makeup.price}</Typography>
        <button onClick={handleLikeClick}>{liked ? "Unlike" : "Like"}</button>
      </CardContent>
    </Card>
  );
}


  function CardData() {
    const [makeupData, setMakeupData] = useState([]);
    const [searchTerm, setSearchTerm] = useState("");
    const [likedMakeup, setLikedMakeup] = useState([]);
  
  
    useEffect(() => {
      fetch("https://makeup-api.herokuapp.com/api/v1/products.json")
        .then((response) => response.json())
        .then((data) => setMakeupData(data));
    }, []);
  
    const filteredMakeupData = makeupData.filter(
      (makeup) =>
        ["eyeshadow", "eyeliner", "mascara"].includes(makeup.product_type) &&
        makeup.name.toLowerCase().includes(searchTerm.toLowerCase()) &&
        (likedMakeup.length === 0 || likedMakeup.includes(makeup.id))
    );
    
  
    const handleSearchChange = (event) => {
      setSearchTerm(event.target.value);
    };
  
    return (
      <div>
        <TextField
          label="Search"
          variant="outlined"
          value={searchTerm}
          onChange={handleSearchChange}
          style={{ marginBottom: "20px", marginLeft:'20px' }}
        />
          <Grid container spacing={2} style={{display:'flex', justifyContent:'center'}}>
          {filteredMakeupData.map((makeup) => (
            <Grid item xs={12} sm={6} md={3} key={makeup.id}>
              <MakeupCard makeup={makeup} />
            </Grid>
          ))}
        </Grid>
      </div>
    );
  }
  
  export default CardData;

  