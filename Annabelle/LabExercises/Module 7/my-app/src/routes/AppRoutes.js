import { Routes, Route } from 'react-router-dom';
import Dashboard from '../pages/Dashboard';
import Home from '../pages/Home';
import Posts from '../pages/Posts';

//special component containing all the possible routes for this app
//any props passed into AppRoutes will also be passed onto child components using {...props}
export const AppRoutes = (props) => {

    return (

        // see https://reactrouter.com/en/main/components/routes for more info
        <Routes>
            {/* nested routes can be used for URLs like /home/tasks or where the parent component needs to render the children */}
            
            <Route path='/Home' element={<Home {...props} />} />
            <Route path='/Posts' element={<Posts {...props} />} />
            <Route path='/Dashboard' element={<Dashboard {...props} />} />
            {/* try adding another route to render one of your existing components on a new 'page', and add it to the NavBar */}

            {/* special route to handle if none of the above match */}
        </Routes>
    )
}