import {NavLink} from 'react-router-dom'

function NavBar() {
    return (
        <div className="NavBar">
            <ul className="menu">
                <li><NavLink to="/" style={({ isActive }) => ({ color: isActive ? "red" : "black" })} >Home</NavLink></li>
                <li><NavLink to="/posts" style={({ isActive }) => ({ color: isActive ? "red" : "black" })} >Posts</NavLink></li>
                <li><NavLink to="/dashboard" style={({ isActive }) => ({ color: isActive ? "red" : "black" })} >Dashboard</NavLink></li>
            </ul>
        </div>
    )
}

export default NavBar