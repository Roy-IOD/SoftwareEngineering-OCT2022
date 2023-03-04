import { React, useState } from 'react'
import data from "../villagers.json"

function List(props) {
    return (
        <ul>
            {data.map((item) => (
                <li key={item.name}>{item.birthday}</li>
            ))}
        </ul>
    )
}

export default List