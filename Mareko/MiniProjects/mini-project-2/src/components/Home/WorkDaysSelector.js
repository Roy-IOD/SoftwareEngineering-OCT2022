import React from "react";

import Checkbox from '@mui/material/Checkbox';
import Container from "react-bootstrap/esm/Container";
import FormControlLabel from '@mui/material/FormControlLabel';
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography';

export default function WorkDaysSelector(props) {

    const daysOfWeek = [{name: 'M', value:'Mon'}, {name: 'T', value: 'Tue'}, {name: 'W', value: 'Wed'}, {name: 'Th', value: 'Thu'}, {name: 'F', value: 'Fri'}, {name: 'Sa', value:'Sat'}, {name: 'Su', value: 'Sun'}];

    return (
        <Container sx={{ display: 'flex' }}>
                {daysOfWeek.map((day, index) => (
                    <FormControlLabel
                        key={index}
                        control={
                            <Box sx={{ display: 'flex', order: 2 }}>
                                <Checkbox name={day.name} value={day.value} onChange={props.handleDayChange} sx={{ '& .MuiSvgIcon-root': { fontSize: 35, mx: 1 } }} />
                            </Box>
                        }
                        label={
                            <Typography sx={{ textAlign: 'center', order: 1, fontWeight: 'bold' }} variant="body1">
                                {day.name}
                            </Typography>
                        }
                        sx={{ flexDirection: 'column', alignItems: 'center' }}
                    />
                ))}
        </Container>
    )
}