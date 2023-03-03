import React from "react";

import Paper from '@mui/material/Paper';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

import logo from "../../images/retailiateLogo(White).png";


export default function TopSection(){
    return (
      <Paper elevation={0} sx={{height: 'auto', p: 15, background: 'linear-gradient(0deg, rgba(115,191,184,1) 0%, rgba(61,165,217,1) 100%);', borderRadius: "25px", m: 3}}>

            <Container sx={{height: "100%"}} maxWidth="md">
                <Grid container direction="column" justifyContent="center" alignItems="center" sx={{flexGrow: 1}}>
                
                <Grid item sx={{my: 5}}><img src={logo} alt="retailiate-logo" /></Grid>
                <Grid item>
                    <Typography variant="h4" sx={{my: 3, fontWeight: "bold"}}>A retail worker's 2023 guide to working on public holidays</Typography>
                    <Typography variant="h5" sx={{mb: 3}}>Find out what you are entitled to if you work on a public holiday in NZ...</Typography>
                </Grid>

                <Grid item sx={{mb: 5}}>
                    <Button href="/public-holidays-nz" variant="contained" underline="none" sx={{width: "300px", padding: 2.5, m: 1, borderRadius: 25, background: "#f7c214", color: "#000", fontWeight: "bold",  "&:hover": {background: "#e6b207", color: "#fff"}}}>NZ Public Holidays</Button>
                    
                    <Button href="/workplace-entitlements" variant="contained" underline="none" sx={{width: "300px", padding: 2.5, m: 1, borderRadius: 25, background: "#f7c214", color: "#000", fontWeight: "bold",  "&:hover": {background: "#e6b207", color: "#fff"}}}>Entitlements</Button>
                                       
                </Grid>

                </Grid>
            </Container>
      </Paper>
    )
  }
  