import { Routes, Route } from 'react-router-dom';
import Home from '../pages/Home';
import Posts from '../pages/Posts';
import Dashboard, {DashboardMessages, DashboardTasks} from '../pages/Dashboard';

export const AppRoutes = (props) => {
    return (
        <Routes>
            
            <Route exact path='/' element={<Home />} />

            <Route path='/posts' element={<Posts />} />

           <Route path='/dashboard' element={<Dashboard {...props} />} >
                <Route path="messages" element={<DashboardMessages />} />
                <Route path="tasks" element={<DashboardTasks />} />
            </Route>

        </Routes>
    )
};