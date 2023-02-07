import Home from '../pages/Home';
import Posts from '../pages/Posts';
import PostItem from '../components/PostItem';
import Dashboard from '../pages/Dashboard';
import PageNotFound from '../pages/PageNotFound';
import { Route, Routes } from "react-router-dom"




export const AppRoutes = (props) => {

    return (

       
        <Routes>
            <Route exact path='/' element={<Home />} />
          
            <Route path='/posts'>
                <Route index element={<Posts />} />
                <Route path=':id' element={<PostItem />} />
            </Route>

            <Route path='/dashboard' element={<Dashboard />} />

           

            <Route path="*" element={<PageNotFound />} />
        </Routes>
    )
}