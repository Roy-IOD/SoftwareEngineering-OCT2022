import React from "react";

import Container from "@mui/material/Container";
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';

export default function CalculateSuccess(props) {
    return(
        <div>
            <Container sx={{border: '1px solid #3DA5D9', borderWidth: '5px', borderRadius: '12px', my: 5, pt: 3, pb: 1, textAlign: 'center'}}>
                <Typography variant="h5">You will work on <strong>{props.workingPublicHolidays}</strong> public holidays this year.</Typography>

                <Box>
                    
                    {props.workingNationalHolidays.length > 0 ? (
                        <>
                            <Typography sx={{mt: 3, textDecoration: 'underline', fontWeight: 'bold'}}>National Holidays:</Typography>
                            <ul className="no-bullets">
                                {props.workingNationalHolidays.map((holiday) => (
                                    <li style={{marginTop: '10px', marginBottom: '10px'}} key={holiday.name}>{holiday.name}</li>
                                ))}

                            </ul>
                        </>
                    ) : null}
                    
                    
                    {props.workingRegionalHolidays.length > 0 ? (
                        <>
                            <Typography sx={{mt: 3, textDecoration: 'underline', fontWeight: 'bold'}}>Regional Holidays:</Typography>
                            <ul className="no-bullets">
                                {props.workingRegionalHolidays.map((holiday) => (
                                    <li style={{marginTop: '10px', marginBottom: '10px'}} key={holiday.name}>{holiday.name}</li>
                                ))}    
                            </ul>
                        </>
                    ) : null}
                    
                </Box>

                <Box sx={{mt: 3}}>
                    {props.workingNationalHolidays.length > 0 ? (
                        <>
                            <Typography>On these days you are entitled to <strong>time-an-a-half pay</strong> and a <strong>day in lieu</strong>. </Typography>
                            <Typography>For more information please see...</Typography>
                        </>
                    ) : (
                        <>
                            <Container sx={{width: '75%'}}>
                                <Typography> Although you don't normally work on public holidays, you may agree with your employer to pick up shifts on certin days that are public holidays.  </Typography>
                            </Container>
                            <Typography sx={{mt: 3}}>It is still important to know what your entitled too...</Typography>
                        </>
                    )}

                    <Button href="/workplace-entitlements" variant="contained" underline="none" sx={{width: "200px", padding: 2.5, my: 3, borderRadius: 25, background: "#f7c214", color: "#000", fontWeight: "bold",  "&:hover": {background: "#e6b207", color: "#fff"}}}>Entitlements</Button>
                   
                </Box>      

            </Container>
        </div>
    )
};