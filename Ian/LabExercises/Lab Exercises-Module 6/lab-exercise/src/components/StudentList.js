import React, { Component } from 'react';

//an array of objects (could come from an API or DB). to render each one in turn, we need to iterate over them,
//and apply the same transformation process to each one to turn the raw data into JSX.
//the Array.map function is OFTEN used in React for this, good idea to review it: 
//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map

const students = [
    {
        id: 1,
        name: 'David Cook',
        city: 'Sydney',
        location: 'AU'
    },
    {
        id: 2,
        name: 'Isaac Heslop',
        city: 'Sydney',
        location: 'AU'
    },
    {
        id: 3,
        name: 'Annabelle Koinis',
        city: 'Sydney',
        location: 'AU'
    },
    {
        id: 4,
        name: 'Sam Moore',
        city: 'Sydney',
        location: 'AU'
    },
    {
        id: 5,
        name: 'Ian Ormesher',
        city: 'Sydney',
        location: 'AU'
    },
    {
        id: 6,
        name: 'Mareko Petero',
        city: 'Auckland?',
        location: 'NZ'
    },
    {
        id: 7,
        name: 'Thiago Taujiro',
        city: 'Sydney',
        location: 'AU'
    },
    {
        id: 8,
        name: 'Mopati Toteng',
        city: 'Sydney',
        location: 'AU'
    }  
]

class StudentList extends Component {

    render() {

        //could also move it up here into a variable to simplify the return statement
        // const studentList = students.map(student => 
        //     <li><img src={`https://robohash.org/${student.name}?size=50x50`} alt={student.name}/> {student.name}, based in {student.location}</li> 
        // ) 
        
            return (
            <div className="StudentList componentBox">
                <h2>IOD Software Engineering Students ({students.length} in cohort)</h2>
                <div className="students-container">
                    {
                        students.map(student => 
                            <Student key={student.id} student={student} city={student.city} name={student.name} location={student.location}/>
                            )
                    }
                </div>
            </div>
        );
    }
}

//how could we make a separate Student component that will display and format student info more nicely?
//have a look at https://reactjs.org/docs/lists-and-keys.html for tips

class Student extends Component {
    
    render() {
        const {student} = this.props;
        return (
                      
                <div className="student-info">
                    <h3>{student.name}</h3>
                    <img src={`https://robohash.org/${student.name}?size=50x50`} alt={student.name}/>
                    <p>{student.name} is based in: {this.props.city}</p>
                </div>
            );
    }
}


export default StudentList;