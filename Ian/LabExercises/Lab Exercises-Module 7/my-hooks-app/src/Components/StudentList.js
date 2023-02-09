import React from 'react';
import {Link} from 'react-router-dom'

//an array of objects (could come from an API or DB). to render each one in turn, we need to iterate over them,
//and apply the same transformation process to each one to turn the raw data into JSX.
//the Array.map function is OFTEN used in React for this, good idea to review it: 
//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map

export const students = [
    {
        id: 1,
        name: 'David Cook',
        location: 'AU'
    },
    {
        id: 2,
        name: 'Isaac Heslop',
        location: 'AU'
    },
    {
        id: 3,
        name: 'Annabelle Koinis',
        location: 'AU'
    },
    {
        id: 4,
        name: 'Sam Moore',
        location: 'AU'
    },
    {
        id: 5,
        name: 'Ian Ormesher',
        location: 'AU'
    },
    {
        id: 6,
        name: 'Mareko Petero',
        location: 'NZ'
    },
    {
        id: 7,
        name: 'Thiago Taujiro',
        location: 'AU'
    },
    {
        id: 8,
        name: 'Mopati Toteng',
        location: 'AU'
    }  
]

function StudentList() {      

    return (
        <div className="StudentList componentBox">
            <h2>IOD Software Engineering Students ({students.length} in cohort)</h2>
            <ul className="hideBullets">
            {
                students.map((student) => 
                    <StudentListItem key={student.id} student={student} roboset="set5" avatarSize="100"/> /* the key prop stays here, not in the child component */
                )
            }
            </ul>
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