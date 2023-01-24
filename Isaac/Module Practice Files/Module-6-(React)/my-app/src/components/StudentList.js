import React, { Component } from 'react';

const students = [
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

class StudentList extends Component {
    
    render() {
        return (
            <div className="StudentList componentBox">
                <h2>IOD Software Engineering Students ({students.length} in cohort)</h2>
                <ul className="hideBullets">
                {
                    students.map(student => 
                        <Student key={student.id} name={student.name} location={student.location}/> 
                    )
                }
                </ul>
            </div>
        );
    }
}


function Student(props) {
    return (
        <li><img src={`https://robohash.org/${props.name}?size=50x50`} alt={props.name}/> {props.name}, based in {props.location}</li> 
    )
}

export default StudentList;