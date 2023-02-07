import About from '../pages/About';
import Students from '../pages/Students';
import StudentList from '../components/StudentList';
import StudentDetails from '../components/StudentDetails';
import Login from '../components/Login';
import Hello from '../components/Hello';
import PageNotFound from '../pages/PageNotFound';
import { Route, Routes } from "react-router-dom"
import Dashboard from '../pages/Dashboard';
import { DashboardMessages } from '../pages/Dashboard';
import { DashboardTasks } from '../pages/Dashboard';


export const AppRoutes = (props) => {

    return (

        // see https://reactrouter.com/en/main/components/routes for more info
        <Routes>
            {/* nested routes can be used for URLs like /home/tasks or where the parent component needs to render the children */}
            <Route exact path='/' element={<Dashboard {...props} />} >
                <Route path="messages" element={<DashboardMessages />} />
                <Route path="tasks" element={<DashboardTasks />} />
            </Route>
            <Route path='/about' element={<About {...props} />} />
            <Route path='/students' element={<Students {...props} />}>
                <Route index element={<StudentList />} />
                <Route path=":id" element={<StudentDetails />}/>
            </Route>
            <Route path='/hello' element={<Hello />}/>
     
            <Route path='/login' element={<Login />} />

            {/* try adding another route to render one of your existing components on a new 'page', and add it to the NavBar */}

            {/* special route to handle if none of the above match */}
            <Route path="*" element={<PageNotFound />} />
        </Routes>
    )
}