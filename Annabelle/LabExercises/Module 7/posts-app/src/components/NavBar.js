import {NavLink} from 'react-router-dom'

function NavBar() {
    return (
        <div className="NavBar">
            <ul className="menu">
                <li><NavLink to="/Home">Home</NavLink></li>
                <li><NavLink to="/Posts">Posts</NavLink></li>
                <li><NavLink to="/Dashboard">Dashboard</NavLink></li>
            </ul>
        </div>
    )
}

export default NavBar