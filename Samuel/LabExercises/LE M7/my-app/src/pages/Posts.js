import React, {useState} from 'react';
import BasicCard from "../components/Posts"
import PlayerList from "../components/PlayerList"
import PostForm from "../components/PostForm"
import {players} from "../components/PlayerList"
// import DisplayPost from "../components/DisplayPost"


function Posts(){

    const [arr, setArr] = useState(players)

    return(
        <div>
            <h1> Add a Player</h1>
            <PostForm updatePlayers={setArr} currentPlayers={arr}/>
            <h1> Current players </h1>
            <PlayerList currentPlayers={arr}/>

            {/* <DisplayPost /> */}

            <BasicCard />
        </div>
        )
    }
    
    export default Posts