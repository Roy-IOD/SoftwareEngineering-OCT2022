import GetNews from "../components/GetNews"
import "../fonts/Burbank-Big-Condensed-Black.ttf"
import Typography from '@mui/material/Typography';
import { Button, Link } from "@mui/material";

function News() {

      return (
          <div className="News" style={{  
            backgroundImage: "url(" + "https://wallpapercave.com/wp/wp2342826.jpg" + ")",
            objectFit: 'cover', width: '100%', height: '100vh', position: 'fixed', top: 64, left: 0,
          }}>
            <br></br>
            <Typography   variant="h2" style={{ color: 'white', fontFamily: 'Fortnite',  letterSpacing: '.2rem',}}>Latest News:</Typography>
            <GetNews />
            <br></br>
            <Button size='large' href="https://www.fortnite.com/news" target={"_blank"} variant="contained" style={{color: 'white', fontFamily: 'Fortnite',  letterSpacing: '.2rem',}}>Find out More</Button>
          </div>
      )
  }
  
export default News
