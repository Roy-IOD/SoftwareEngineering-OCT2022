import React, {useState, useEffect} from "react";

import Typography from '@mui/material/Typography'
import Container from '@mui/material/Container'
import Table from '@mui/material/Table'
import TableHead from '@mui/material/TableHead';
import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import TableRow from '@mui/material/TableRow'
import Checkbox from '@mui/material/Checkbox';


export default function NZPublicHolidaysList() {

    const [publicHolidays, setPublicHolidays] = useState([])

    useEffect(() => {
        fetch("https://date.nager.at/api/v3/publicholidays/2023/NZ")
          .then(response => response.json())
          .then(data => setPublicHolidays(data));
    }, []);

    const label = { inputProps: { 'aria-label': 'Checkbox demo' } };

    function holidayPassed(holiday) {
        const today = new Date();
        const hDate = new Date(holiday);

        return (today > hDate);

    }

    return(
        <div style={{marginTop: '50px', marginBottom: '50px'}}>
            <Typography variant="h3" sx={{fontWeight: 'bold',}}>New Zealand Public Holidays</Typography>

            <Container sx={{width: '50%', mt: 3, mb: 6}}>
                <Typography variant="h5"> Here is a list of all the 2023 New Zealand public holidays that are officially recognised by the New Zealand Government.</Typography>
            </Container>
            
            <Container>
                <Table aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell sx={{fontWeight: 'bold'}}>Dates</TableCell>
                            <TableCell sx={{fontWeight: 'bold'}}>Public Holidays</TableCell>
                            <TableCell sx={{fontWeight: 'bold'}}>Passed</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {publicHolidays.map(holiday => (
                            <TableRow key={holiday.date}>
                                <TableCell>{holiday.date}</TableCell>
                                <TableCell>{holiday.name}</TableCell>
                                <TableCell><Checkbox {...label} disabled checked={holidayPassed(holiday.date)} /></TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </Container>

        </div>
    )
}