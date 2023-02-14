import { Routes, Route } from 'react-router-dom';
import Dashboard from '../pages/dashboard';
import Home from '../pages/home';
import Posts from '../pages/posts';

export const AppRoutes = (props) => {

  return (
    <Routes>
      <Route path = "/" element = {<Home />} />
      <Route path = "dashboard" element = {<Dashboard />} />
      <Route path = "posts" element = {<Posts />} />
    </Routes>
  )
}