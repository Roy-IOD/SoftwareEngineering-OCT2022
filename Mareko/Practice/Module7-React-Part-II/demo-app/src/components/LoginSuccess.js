import React from "react";
import Badge from "./Badge";

function LoginSuccess(props) {
    return(
        <div className="componentBox">
            <div className="center"><Badge /></div>
           <h5>{props.name} is now online</h5> 
        </div>
    )
}

export default LoginSuccess