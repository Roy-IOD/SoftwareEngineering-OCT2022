import React from "react";

import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import InputLabel from '@mui/material/InputLabel';
import Container from "@mui/material/Container";

export default function RegionSelector(props) {

    const regionsOfNZ = [  { county: 'Auckland', countyCode: 'NZ-AUK' },  { county: 'Bay of Plenty', countyCode: 'NZ-BOP' },  { county: 'Canterbury', countyCode: 'NZ-CAN' },  { county: 'Chatham Islands', countyCode: 'NZ-CIT' },  { county: 'Gisborne', countyCode: 'NZ-GIS' },  { county: "Hawke's Bay", countyCode: 'NZ-HKB' },  { county: 'Manawatu-Wanganui', countyCode: 'NZ-MWT' },  { county: 'Marlborough', countyCode: 'NZ-MBH' },  { county: 'Nelson/Tasman', countyCode: 'NZ-NSN' },  { county: 'Northland', countyCode: 'NZ-NTL' },  { county: 'Otago', countyCode: 'NZ-OTA' },  { county: 'Southland', countyCode: 'NZ-STL' },  { county: 'Taranaki', countyCode: 'NZ-TKI' },  { county: 'Waikato', countyCode: 'NZ-WKO' },  { county: 'Wellington', countyCode: 'NZ-WGN' },  { county: 'West Coast', countyCode: 'NZ-WTC' }];


    return(
        <div>
            <Container sx={{ display: 'flex', flexDirection: 'row', alignItems: "center", justifyContent: "center", my: 3 }}>
                <InputLabel sx={{ fontWeight: "bold",}} htmlFor="region-select">Choose your region:</InputLabel>
                
                <FormControl sx={{ m: 1, width: 450 }}>
                    
                    <Select value={props.region} onChange={props.handleRegionChange} displayEmpty id="region-select" sx={{ textAlign: 'left', }}>
                        <MenuItem value="">
                            <em>None</em>
                        </MenuItem>
                        {regionsOfNZ.map((userRegion, index) => (
                            <MenuItem key={index} name={userRegion.county} value={userRegion.countyCode}>{userRegion.county}</MenuItem>
                        ))}
                    </Select>
                </FormControl>

            </Container>


        </div>
    )
};