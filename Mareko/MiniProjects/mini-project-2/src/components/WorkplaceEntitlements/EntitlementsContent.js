import React from "react";

import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container'
import Link from '@mui/material/Link';

import EntitlementsAccordian from "./EntitlementsAccordian";



export default function EntitlementsContent() {
    return (
      <div style={{marginTop: '50px', marginBottom: '50px'}}>
          <Typography variant="h3" sx={{fontWeight: 'bold',}}>Workplace Entitlements</Typography>

          <Container sx={{width: '50%', mt: 2.5, mb: 3}}>
              <Typography variant="h5"> In New Zealand, there are many benefits to working on public holidays. It is important for employees to know what they are entitled too if they work on these public holidays.</Typography>
          </Container>

          <Container sx={{width: '40%', mt: 1, mb: 6}}>
              <Typography variant="body2" fontStyle="italic"> All information has been source from the New Zealand Ministry of Business, Innovation and Employment <Link href="https://www.employment.govt.nz/leave-and-holidays/public-holidays/">website</Link>. </Typography>
          </Container>

          <EntitlementsAccordian />
      </div>
    )
    
}
