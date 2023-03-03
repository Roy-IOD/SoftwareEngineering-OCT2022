import React from "react";

import Paper from '@mui/material/Paper';
import Container from '@mui/material/Container';

import logo from '../images/footerLogo.png';
import { navigationLinks } from "./Home/HamburgerNav";


export default function Footer(){
    return(
        
        <Paper sx={{ display: 'flex', height: 80, background: 'linear-gradient(0deg, rgba(115,191,184,1) 0%, rgba(61,165,217,1) 100%);', mt: 5, p: 1.5}}>
            <Container sx={{ display: 'flex', justifyContent: 'space-between' }}>
                <ul style={{display: 'flex', listStyleType: 'none', alignItems: 'center'}}>
                    {navigationLinks.map((link, index) => (<li key={index} style={{marginRight: '20px'}}><a href={link.href} style={{color: '#fff', textDecoration: 'none'}}>{link.name}</a></li>))}   
                </ul>


                <img src={logo} alt="retailiate-logo" style={{ maxHeight: '100%', maxWidth: '100%' }}/>
            </Container>
        </Paper>
        
    )
}