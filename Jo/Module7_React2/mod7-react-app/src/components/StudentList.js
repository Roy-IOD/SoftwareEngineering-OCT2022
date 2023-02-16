import React, {useState} from 'react';
import {Link} from 'react-router-dom'
import { Grid } from '@mui/material';

import StudentCard from './StudentCard';
import { SimpleDialog } from './SimpleDialogDemo';

//an array of objects (could come from an API or DB). to render each one in turn, we need to iterate over them,
//and apply the same transformation process to each one to turn the raw data into JSX.
//the Array.map function is OFTEN used in React for this, good idea to review it: 
//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map

export const students = [
    {
        id: 1,
        name: 'David Cook',
        location: 'AU',
        job: 'IT Support'
    },
    {
        id: 2,
        name: 'Isaac Heslop',
        location: 'AU',
        job: 'Architect'
    },
    {
        id: 3,
        name: 'Annabelle Koinis',
        location: 'AU',
        job: 'Midwife'
    },
    {
        id: 4,
        name: 'Sam Moore',
        location: 'AU',
        job: 'Auditor'
    },
    {
        id: 5,
        name: 'Ian Ormesher',
        location: 'AU',
        job: 'Recruiter'
    },
    {
        id: 6,
        name: 'Mareko Petero',
        location: 'NZ',
        job: 'Customer Service'
    },
    {
        id: 7,
        name: 'Thiago Taujiro',
        location: 'AU',
        job: 'Uber Driver'
    },
    {
        id: 8,
        name: 'Mopati Toteng',
        location: 'AU',
        job: 'Construction'
    }  
]

function StudentList() {      
    const [open, setOpen] = useState(false)
    const [currentStudent, setCurrentStudent] = useState({})

    const handleButton = (thisStudent) => {
        setCurrentStudent(thisStudent)
        setOpen(true)
    }

    return (
        <div className="StudentList componentBox">
            <h2>IOD Software Engineering Students ({students.length} in cohort)</h2>
            {/* <ul className="hideBullets"> */}

            {/* see https://mui.com/material-ui/react-grid/ */}
            <Grid container spacing={2}>
            {
                students.map((student) => 
                    // <StudentListItem key={student.id} student={student} roboset="set5" avatarSize="100"/>
                    <Grid item xs={6} md={3} lg={2} key={student.id} >
                        <StudentCard 
                            id={student.id} 
                            name={student.name} 
                            job={student.job} 
                            buttonHandler={() => handleButton(student)} 
                            image={`https://robohash.org/${student.name}?size=100x100&set=set2`} />
                    </Grid>
                )
            }
            {/* </ul> */}
            </Grid>

            <SimpleDialog
                open={open}
                onClose={() => setOpen(false)}
                title={currentStudent.name}
                content={'Currently works as a '+currentStudent.job+' and lives in '+currentStudent.location}
                />            
        </div>
    );
}

//have a look at https://reactjs.org/docs/lists-and-keys.html for tips
function StudentListItem(props) {
    const name = props.student.name; //storing in a new variable to save re-typing

    return (
        <li> {/* don't need a key here, since it's inside the map on line 66 */}
            <div className="avatar"><Link to={`/students/${props.student.id}`}><StudentAvatar name={name} set="set5"/></Link></div>
            <div className="details"><strong>{name}</strong> <span className="location">based in {props.student.location}</span></div>
        </li> 
    )
}

export function StudentAvatar(props) {
    const avatarSize = props.size ? props.size + 'x' + props.size : "50x50"; //sets a default value for the prop in case it's not passed in
    const roboset = props.set ? props.set : "set1"; //sets a default value for the prop in case it's not passed in

    return (
        <img src={`https://robohash.org/${props.name}?size=${avatarSize}&set=${roboset}`} alt={props.name}/>
    )
}



export default StudentList;