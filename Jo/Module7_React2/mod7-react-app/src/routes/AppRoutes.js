import { Routes, Route } from 'react-router-dom';

export const AppRoutes = (props) => {
    return (
        <Routes>
            <Route exact path='/' element={<Dashboard {...props} />} >
                <Route path="messages" element={<DashboardMessages />} />
                <Route path="tasks" element={<DashboardTasks />} />
            </Route>
            <Route path='/about' element={<About {...props} />} />
            <Route path='/students' element={<Students {...props} />} />
        </Routes>
    )
}