import React from "react";

function Student(props) {
    
    return (
        <li>
            <img src={`https://robohash.org/${props.student.name}?size=100x100`} alt={props.student.name}/>
            <p>This is <strong>{props.student.name}</strong>, and they are based in {props.student.location}</p>

        </li>
    )
}

export default Student;
