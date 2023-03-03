import React, { useState } from 'react';

import { styled } from '@mui/material/styles';
import ArrowForwardIosSharpIcon from '@mui/icons-material/ArrowForwardIosSharp';
import MuiAccordion from '@mui/material/Accordion';
import MuiAccordionSummary from '@mui/material/AccordionSummary';
import MuiAccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';

const Accordion = styled((props) => (
      <MuiAccordion disableGutters elevation={0} square {...props} />
        ))(({ theme }) => ({
          border: `1px solid ${theme.palette.divider}`,
          '&:not(:last-child)': {
            borderBottom: 0,
          },
          '&:before': {
            display: 'none',
          },
        }));
        
    const AccordionSummary = styled((props) => (
      <MuiAccordionSummary
        expandIcon={<ArrowForwardIosSharpIcon sx={{ fontSize: '0.9rem' }} />}
        {...props}
      />
    ))(({ theme }) => ({
      backgroundColor:
        theme.palette.mode === 'dark'
          ? 'rgba(255, 255, 255, .05)'
          : 'rgba(0, 0, 0, .03)',
      flexDirection: 'row-reverse',
      '& .MuiAccordionSummary-expandIconWrapper.Mui-expanded': {
        transform: 'rotate(90deg)',
      },
      '& .MuiAccordionSummary-content': {
        marginLeft: theme.spacing(1),
      },
    }));
    
    const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
      padding: theme.spacing(2),
      borderTop: '1px solid rgba(0, 0, 0, .125)',
    }));

  export default function EntitlementsAccordian() {
      const [expanded, setExpanded] = useState('panel1');
        
      const handleChange = (panel) => (event, newExpanded) => {
        setExpanded(newExpanded ? panel : false);
      };

      return (
        <div>
          <Container>
              <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
                  <AccordionSummary aria-controls="panel1d-content" id="panel1d-header">
                      <Typography fontWeight={'bold'}>Time and a Half Pay</Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                      <Typography textAlign={'justify'}>

                          When working on a public holiday, employees are entitled to at least time and a half, and this should be stated in their employment agreement. 
                          Payment must be calculated based on either the employee's relevant daily pay or average daily pay (if applicable), plus an additional half of that amount. 
                          Alternatively, payment can be based on the employee's relevant daily pay (or average daily pay) that relates to the actual time worked on the holiday, 
                          including any penal rates in the employment agreement. However, in this case, the employee is not entitled to time and a half on top of the penal rate.

                      </Typography>

                      <Button href="https://www.employment.govt.nz/leave-and-holidays/calculating-payments-for-leave-and-holidays/calculating-public-alternative-sick-bereavement-payments/" target="_blank" variant="contained" underline="none" sx={{ width: "150px", padding: 2, my: 3, borderRadius: 25, background: "#f7c214", color: "#000", fontWeight: "bold",  "&:hover": {background: "#e6b207", color: "#fff"}}}>Learn More</Button>


                  </AccordionDetails>
              </Accordion>
              <Accordion expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
                  <AccordionSummary aria-controls="panel2d-content" id="panel2d-header">
                      <Typography fontWeight={'bold'}>Days in Lieu</Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                      <Typography textAlign={'justify'}>
                          If an employee works on a public holiday, they are entitled to an alternative holiday (a day in lieu), which gives them a day off at another time. 
                          To qualify, the public holiday must have been a working day for the employee, or they must have been on call and not enjoyed a full holiday. 
                          During the alternative holiday, the employee has the whole working day off work, and they are paid full pay for that day. 
                          If the public holiday wasn't a working day for the employee, they still get paid for the hours worked at the rate of at least time and a half 
                          but are not entitled to an alternative holiday.
                      </Typography>

                      <Button href="https://www.employment.govt.nz/leave-and-holidays/alternative-holidays/" target="_blank" variant="contained" underline="none" sx={{ width: "150px", padding: 2, my: 3, borderRadius: 25, background: "#f7c214", color: "#000", fontWeight: "bold",  "&:hover": {background: "#e6b207", color: "#fff"}}}>Learn More</Button>

                  </AccordionDetails>
              </Accordion>
              <Accordion expanded={expanded === 'panel3'} onChange={handleChange('panel3')}>
                  <AccordionSummary aria-controls="panel3d-content" id="panel3d-header">
                      <Typography fontWeight={'bold'}>Mondayisation</Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                      <Typography textAlign={'justify'}>
                          Mondayisation is the process of moving a public holiday falling on a Saturday or Sunday to the following Monday (or Tuesday). 
                          However, it only applies to employees who don't normally work on the calendar date of the holiday. 
                          If an employee would normally work on the calendar date or on both dates, there is no Mondayisation for them, and their public holiday entitlements apply to the calendar date. 
                          Employees with unclear work patterns can use a calculator on the "Otherwise working days" website to determine their entitlement. 
                          Mondayisation doesn't affect shop trading restrictions, which always apply on the calendar date of certain holidays.
                      </Typography>

                      <Button href="https://www.employment.govt.nz/leave-and-holidays/public-holidays/public-holidays-falling-on-a-weekend/" target="_blank" variant="contained" underline="none" sx={{ width: "150px", padding: 2, my: 3, borderRadius: 25, background: "#f7c214", color: "#000", fontWeight: "bold",  "&:hover": {background: "#e6b207", color: "#fff"}}}>Learn More</Button>

                  </AccordionDetails>
              </Accordion>
          </Container>
        </div>
      )
}