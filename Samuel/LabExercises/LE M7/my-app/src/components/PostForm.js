import { appendOwnerState } from '@mui/base';
import React, {useState} from 'react';
import { players } from './PlayerList';

function PostForm(props) {
    const [data, setData] = useState({
        name:"",
        location:""
    })

    function submit(e){
        e.preventDefault();
        props.currentPlayers.push(data)
        props.updatePlayers(props.currentPlayers)
        console.log(data)
    }

    function handle(e){
        const newData={...data}
        newData[e.target.id] = e.target.value
        setData(newData)
        console.log(newData)
    }

    return (
        <div>
            <form onSubmit={(e)=> submit(e)}>
                <input onChange={(e)=> handle(e)} id='name' value={data.name} placeholder='name' type='text'></input>
                <input onChange={(e)=> handle(e)} id='location' value={data.location} placeholder='location' type='text'></input>
                <button> Submit </button>
            </form>
        </div>
    )
}

export default PostForm;