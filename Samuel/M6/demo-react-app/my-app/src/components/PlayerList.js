import React, { Component } from 'react';

//an array of objects (could come from an API or DB). to render each one in turn, we need to iterate over them,
//and apply the same transformation process to each one to turn the raw data into JSX.
//the Array.map function is OFTEN used in React for this, good idea to review it: 
//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map

const players = [
    {
        id: 1,
        name: 'Nikola Jokic',
        location: 'Denver'
    },
    {
        id: 2,
        name: 'Joel Embiid',
        location: 'Philadelphia'
    },
    {
        id: 3,
        name: 'Giannis Antentekounpo',
        location: 'Milwaukee'
    },
    {
        id: 4,
        name: 'Kyrie Irving',
        location: 'Brooklyn'
    },
    {
        id: 5,
        name: 'Devin Booker',
        location: 'Phoenix'
    },
    {
        id: 6,
        name: 'Jimmy Butler',
        location: 'Miami'
    },
    {
        id: 7,
        name: 'Aaron Gordon',
        location: 'Denver'
    },
    {
        id: 8,
        name: 'Luka Doncic',
        location: 'Dallas'
    }  
]

class PlayerList extends Component {
    
    render() {

        //could also move it up here into a variable to simplify the return statement
        // const studentList = students.map(student => 
        //     <li><img src={`https://robohash.org/${student.name}?size=50x50`} alt={student.name}/> {student.name}, based in {student.location}</li> 
        // )        

        return (
            <div className="StudentList componentBox">
                <h2>IOD Software Engineering Students ({players.length} in cohort)</h2>
                <ul className="hideBullets">
                {
                    players.map(players => 
                        <Players key={players.id} value={players.name}/>
                    )
                }
                </ul>
            </div>
        );
    }
}

//how could we make a separate Student component that will display and format student info more nicely?
//have a look at https://reactjs.org/docs/lists-and-keys.html for tips

class Players extends Component {
    render(){
        return(<li><img src={`https://robohash.org/${players.name}?size=50x50`} alt={players.name}/> {players.name}, plays for {players.location}</li> )
    }
}

export default PlayerList;