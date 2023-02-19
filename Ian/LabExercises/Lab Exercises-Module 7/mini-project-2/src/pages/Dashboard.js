import Films from './Films';
import Logo from '../img/Star_Wars_Logo.png';

function Dashboard() {
    return (
        <div>
        <h1>Welcome to the Cantina</h1>
        <h2>Community fan club for Star Wars fans to share, discover content and connect with other fans of Star Wars</h2>
        <img src={Logo} alt="Description of the image"/>
        </div>
    )
}

export default Dashboard;