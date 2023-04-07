
import { UserContext } from '../context/UserContext';
import React, { useContext } from 'react';
import LoginForm from '../components/LoginForm';
import UserPage from './Account';

function Login() {
    const { user } = useContext(UserContext);
    return(  
<div>
{user ? <UserPage /> : <LoginForm />}
<br/>
</div>


    )
}

export default Login;