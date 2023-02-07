import {NavLink} from 'react-router-dom'

function NavBar() {
    return (
        <div className="NavBar">
            <ul className="menu">
                <li><NavLink to="/">Home</NavLink></li>
                <li><NavLink to="/login">Login</NavLink></li>
                <li><NavLink to="/reservations">Reservations</NavLink></li>
                <li><NavLink to="/todays-weather">Weather</NavLink></li>
            </ul>
        </div>
    )
}

export default NavBar