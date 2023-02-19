import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { Button } from '@mui/material';
import "../fonts/Burbank-Big-Condensed-Black.ttf"

const pages = ['Cosmetics', 'Map', 'News', 'Shop'];

function NavBar() {

  return (
    <AppBar position="sticky" color='primary'>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Typography
            variant="h3"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: 'none', md: 'flex' },
              fontFamily: 'Fortnite',
              letterSpacing: '.5rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            FORTNITE HUB
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'flex' }, color: 'transparent'}}>
            {pages.map((page) => (
              <Button key={page}  href={"/"+page} variant="contained" sx={{fontFamily: 'Fortnite', letterSpacing: '.3rem', p: 1, m: 1}}>
                  {page}
              </Button>
            ))}
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default NavBar;