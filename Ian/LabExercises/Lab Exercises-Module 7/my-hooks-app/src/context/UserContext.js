import React from "react";

//user should be set into this context after using a login form

//named export for this context (to be used via useContext elsewhere)
export const UserContext = React.createContext();

//the provider wrapper for this context. uses its own state to keep track of which user is logged in
export const UserProvider = ({children}) => {

    //what should go here, in order to keep track of current user in state and pass it down to any child components?
    const [username, setUsername] = React.useState('you');

    return (
        <UserContext.Provider value={{username, setUsername}}>
            {children}
        </UserContext.Provider>
    );
}
