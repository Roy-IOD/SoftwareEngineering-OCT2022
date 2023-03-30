import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';


function BasicExample() {
  return (
    <Grid container spacing={2} style={{display:'flex', flexDirection:'row', justifyContent:'center', fontFamily:'Montserrat',textAlign:'center', backgroundColor:'#fffae6'}}>
        <Grid item style={{width:'300px'}}>
        <Card href="../pages/Eyes" sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="200"
          image="https://cdn-cf.ipsy.com/contentAsset/image/98089b88-0cf4-437e-9afa-59fc848647b1/fileAsset?byInode=1"
        />
        <CardContent>
          <Typography variant="h5" component="div" style={{fontFamily:'Montserrat'}}>EYES </Typography>
        </CardContent>
      </CardActionArea>

      <CardActions>
      </CardActions>

    </Card>
      </Grid>

      <Grid item style={{width:'300px'}}>
        <Card href="../pages/Lips" sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="200"
          image="https://cdn-cf.ipsy.com/contentAsset/image/1d2d0ead-b9c7-45b7-a039-14db0567ef78/fileAsset?byInode=1"
        />
        <CardContent>
          <Typography  variant="h5" component="div" style={{fontFamily:'Montserrat'}}>
            LIPS
          </Typography>
        </CardContent>
      </CardActionArea>

      <CardActions>
      </CardActions>

    </Card>
      </Grid>

      <Grid item style={{width:'300px'}}>
        <Card href="../pages/Skin" sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="200"
          image="https://cdn-cf.ipsy.com/contentAsset/image/7955714a-370e-4a11-901b-c573291edfed/fileAsset?byInode=1"
        />
        <CardContent>
          <Typography variant="h5" component="div" style={{fontFamily:'Montserrat'}}>
            SKIN
          </Typography>
        </CardContent>
      </CardActionArea>

      <CardActions>
      </CardActions>

    </Card>
      </Grid>

      <Grid item style={{width:'300px'}}>
        <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="200"
          image="https://cdn-cf.ipsy.com/contentAsset/image/79a13f09-b642-4363-afd4-d06d51e85763/fileAsset?byInode=1"
        />
        <CardContent>
          <Typography href="../pages/Eyebrows" variant="h5" component="div" style={{fontFamily:'Montserrat'}}>
            EYEBROWS
          </Typography>
        </CardContent>
      </CardActionArea>

      <CardActions>
      </CardActions>
      
    </Card>
      </Grid>
      </Grid>

  );
}

export default BasicExample;