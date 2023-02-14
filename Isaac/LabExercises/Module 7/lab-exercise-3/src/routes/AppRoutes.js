import Posts from "../pages/PostPage"
import { Routes, Route } from "react-router-dom"


export const AppRoutes = (props) => {

    return (
            <Routes>
                   <Route exact path='/' element={<Posts {...props}/>}/>
            </Routes>
    )
}
