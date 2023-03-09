import React, {useState, useEffect} from "react";

import Typography from '@mui/material/Typography';

import RegionSelector from "./RegionSelector";
import Button from "@mui/material/Button";
import CalculateSuccess from "./CalculateSuccess";
import WorkDaysSelector from "./WorkDaysSelector";

export default function EntitlementsCalculator() {

    const [region, setRegion] = useState('')
    const [publicHolidays, setPublicHolidays] = useState([])
    const [selectedDays, setSelectedDays] = useState([]);
    const [isCalculated, setIsCalculated] = useState(false);

    const [workingNationalHolidays, setWorkingNationalHolidays] = useState([]);
    const [workingRegionalHolidays, setWorkingRegionalHolidays] = useState([]);
    const [workingPublicHolidays, setWorkingPublicHolidays] = useState('');

    useEffect(() => {
        fetch("https://date.nager.at/api/v3/publicholidays/2023/NZ")
          .then(response => response.json())
          .then(data => setPublicHolidays(data));
    }, [])

    const handleDayChange = (event) => {
        const selectedDay = event.target.value;
        event.target.checked ? setSelectedDays([...selectedDays, selectedDay]) : setSelectedDays(selectedDays.filter((day) => day !== selectedDay));
    };
      
    useEffect(() => {
        console.log(selectedDays);
    }, [selectedDays]);

    const handleRegionChange = (event) => {
        setRegion(event.target.value);
        console.log(event.target.value);
    };

    const calculatePublicHolidays = (selectedDays, region) => {        
        const workingPublicHolidays = publicHolidays.filter((holiday) => {
            const holidayDate = new Date(holiday.date); 
            return selectedDays.includes(holidayDate.toLocaleDateString('en-NZ', { weekday: 'short' }));
        });
        

        const workingNationalHolidays = workingPublicHolidays.filter((day) => day.counties === null);
        setWorkingNationalHolidays(workingNationalHolidays);
        
        const workingRegionalHolidays = workingPublicHolidays.filter((day) => day.counties !== null && day.counties.includes(region));
        setWorkingRegionalHolidays(workingRegionalHolidays);

        // const workingHolidaysFinal = workingNationalHolidays.filter((day) => day.name === 'Christmas Day' ? : null )

        setWorkingPublicHolidays(workingNationalHolidays.length+workingRegionalHolidays.length);

        return {  workingPublicHolidays, workingNationalHolidays, workingRegionalHolidays };
    }
      
    useEffect(() => {
        console.log('workingPublicHolidays:', workingPublicHolidays);
        console.log('workingNationalHolidays:', workingNationalHolidays);
        console.log('workingRegionalHolidays:', workingRegionalHolidays);
      }, [workingPublicHolidays, workingNationalHolidays, workingRegionalHolidays]);
      
    const handleCalculate = () => {
        calculatePublicHolidays(selectedDays, region);
        setIsCalculated(true);

    };
      
    

    return(
        <div>
            <Typography variant="h4" sx={{my: 5}}> What public holidays do you work on in 2023? </Typography>
            <Typography variant="h4" sx={{my: 3, fontWeight: 'bold'}}> Calculate your entitlements: </Typography>
            <Typography variant="body1" sx={{my: 3}}> Please tick your working days: </Typography>

            <WorkDaysSelector handleDayChange={handleDayChange} />

            <RegionSelector region={region} handleRegionChange={handleRegionChange}/>

            <Button onClick={handleCalculate} variant="contained" underline="none" sx={{width: "150px", padding: 2.5, m: 1, borderRadius: 25, background: "#f7c214", color: "#000", fontWeight: "bold",  "&:hover": {background: "#e6b207", color: "#fff"}}}>Calculate</Button>
            
            {isCalculated ? (<CalculateSuccess workingNationalHolidays={workingNationalHolidays} workingRegionalHolidays={workingRegionalHolidays} workingPublicHolidays={workingPublicHolidays} />) : null}

            
        </div>
    )
};