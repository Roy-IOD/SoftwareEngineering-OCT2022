import { Routes, Route } from 'react-router-dom';
import Home from '../pages/Home';
import PublicHolidays from '../pages/PublicHolidays';
import WorkplaceEntitlements from '../pages/WorkplaceEntitlements';

export const AppRoutes = (props) => {
    return (
        <Routes>
            
            <Route exact path='/' element={<Home />} />

            <Route path='/public-holidays-nz' element={<PublicHolidays />} />

            <Route path='/workplace-entitlements' element={<WorkplaceEntitlements />} />

        </Routes>
    )
};