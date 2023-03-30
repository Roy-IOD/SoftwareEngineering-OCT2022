import { Routes, Route } from 'react-router-dom';
import Login from '../pages/Login';
import Home from '../pages/Home';
import Signup from '../pages/Signup';
import Eyes from '../pages/Eyes';
import Lips from '../pages/Lips';
import Skin from '../pages/Skin';
import Eyebrows from '../pages/Eyebrows';

//special component containing all the possible routes for this app
//any props passed into AppRoutes will also be passed onto child components using {...props}
export const AppRoutes = (props) => {

    return (

        // see https://reactrouter.com/en/main/components/routes for more info
        <Routes>

            <Route path='/Home' element={<Home {...props} />} />
            <Route path='/login' element={<Login {...props} />} />
            <Route path='/Signup' element={<Signup {...props} />} />
            <Route path='/eyes' element={<Eyes {...props} />} />
            <Route path='/Lips' element={<Lips {...props} />} />
            <Route path='/Skin' element={<Skin {...props} />} />
            <Route path='/Eyebrows' element={<Eyebrows {...props} />} />
            <Route path='*' element={<Eyebrows {...props} />} />
        </Routes>
    )
}