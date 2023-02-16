import { Routes, Route } from 'react-router-dom';
import Home from '../pages/Home';
import Dashboard from '../pages/Dashboard';
import Posts from '../pages/Posts';
import PageNotFound from '../pages/PageNotFound';
import LabExercises from '../pages/LabExercises';

export const AppRoutes = (props) => {

    return (

        <Routes>
            <Route exact path='/' element={<Home {...props} />} >
            </Route>
            <Route path='/posts' element={<Posts {...props} />} />
            <Route path='/dashboard' element={<Dashboard {...props} />}>
            </Route>
            <Route path="*" element={<PageNotFound />} />
            <Route path="/labexercises" element={<LabExercises />}/>
        </Routes>
    )
}