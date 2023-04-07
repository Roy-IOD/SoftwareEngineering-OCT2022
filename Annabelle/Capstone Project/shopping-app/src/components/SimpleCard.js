import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';
import { Link } from 'react-router-dom';
import EyeData from "../components/EyeData";


function BasicExample() {
  return (
    <Grid container spacing={2} style={{display:'flex', flexDirection:'row', justifyContent:'center', fontFamily:'Montserrat',textAlign:'center', backgroundImage:'url("https://wallpapercave.com/wp/wp4778492.jpg")', height:'300px'}}>
        <Grid item style={{ width: '300px' }}>
        <Link to="/eyes" style={{ textDecoration: 'none' }}>
          <Card
            sx={{
              maxWidth: 345,
              transition: 'transform 0.3s',
              '&:hover': {
                transform: 'scale(1.05)'
              }
            }}
          >
            <CardActionArea>
              <CardMedia
                component="img"
                height="200px"
                image="https://cdn-cf.ipsy.com/contentAsset/image/98089b88-0cf4-437e-9afa-59fc848647b1/fileAsset?byInode=1"
              />
              <CardContent>
                <Typography variant="h5" component="div" style={{ fontFamily: 'Montserrat' }}>EYES </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        </Link>
      </Grid>


      <Grid item style={{ width: '300px' }}>
        <Link to="/lips" style={{ textDecoration: 'none' }}>
          <Card
            sx={{
              maxWidth: 345,
              transition: 'transform 0.3s',
              '&:hover': {
                transform: 'scale(1.05)'
              }
            }}
          >
            <CardActionArea>
              <CardMedia
                component="img"
                height="200"
                image="https://cdn-cf.ipsy.com/contentAsset/image/1d2d0ead-b9c7-45b7-a039-14db0567ef78/fileAsset?byInode=1"
              />
              <CardContent>
                <Typography variant="h5" component="div" style={{ fontFamily: 'Montserrat' }}>LIPS </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        </Link>
      </Grid>


      <Grid item style={{ width: '300px' }}>
        <Link to="/skin" style={{ textDecoration: 'none' }}>
          <Card
            sx={{
              maxWidth: 345,
              transition: 'transform 0.3s',
              '&:hover': {
                transform: 'scale(1.05)'
              }
            }}
          >
            <CardActionArea>
              <CardMedia
                component="img"
                height="200"
                image="https://cdn-cf.ipsy.com/contentAsset/image/7955714a-370e-4a11-901b-c573291edfed/fileAsset?byInode=1"
              />
              <CardContent>
                <Typography variant="h5" component="div" style={{ fontFamily: 'Montserrat' }}>SKIN </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        </Link>
      </Grid>


      <Grid item style={{ width: '300px' }}>
        <Link to="/eyebrows" style={{ textDecoration: 'none' }}>
          <Card
            sx={{
              maxWidth: 345,
              transition: 'transform 0.3s',
              '&:hover': {
                transform: 'scale(1.05)'
              }
            }}
          >
            <CardActionArea>
              <CardMedia
                component="img"
                height="200"
                image="https://cdn-cf.ipsy.com/contentAsset/image/79a13f09-b642-4363-afd4-d06d51e85763/fileAsset?byInode=1"
              />
              <CardContent>
                <Typography variant="h5" component="div" style={{ fontFamily: 'Montserrat' }}>EYEBROWS </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        </Link>
      </Grid>
      </Grid>

  );
}

export default BasicExample;