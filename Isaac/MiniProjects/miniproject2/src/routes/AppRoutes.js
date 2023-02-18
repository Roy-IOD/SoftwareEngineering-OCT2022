import Home from '../pages/Home';
import CosmeticPage from '../pages/CosmeticsPage'
import Map from '../pages/Map'
import News from '../pages/News'
import Shop from '../pages/Shop'
import PageNotFound from '../pages/PageNotFound'



import { Route, Routes } from "react-router-dom"




export const AppRoutes = (props) => {

    return (
        <Routes>
            <Route exact path='/' element={<Home />} />

            <Route path='/cosmetics' element={<CosmeticPage />} />

            <Route path='/map' element={<Map />} />

            <Route path='/news' element={<News />} />

            <Route path='/shop' element={<Shop />} />

            <Route path="*" element={<PageNotFound />} />
        </Routes>
    )
}