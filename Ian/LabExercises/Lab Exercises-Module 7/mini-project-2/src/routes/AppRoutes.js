import { Routes, Route } from 'react-router-dom';
import Films from '../pages/Films';
import People from '../pages/People';
import Planets from '../pages/Planets';
import Species from '../pages/Species';
import Starships from '../pages/Starships';
import Vehicles from '../pages/Vehicles';
import PageNotFound from '../pages/PageNotFound';
import Dashboard from '../pages/Dashboard';
import TestFilms from '../pages/TestFilms';

const AppRoutes = (props) => {

    return (
        <Routes>
            <Route exact path='/' element={<Dashboard {...props} />} />
            <Route path="/films" element={<Films />} />
            <Route path="/people" element={<People />} />
            <Route path="/planets" element={<Planets />} />
            <Route path="/testfilms" element={<TestFilms />} />
        </Routes>
    )
}

export default AppRoutes