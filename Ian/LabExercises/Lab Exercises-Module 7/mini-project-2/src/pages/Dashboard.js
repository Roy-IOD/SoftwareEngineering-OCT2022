import Films from './Films';
import Logo from '../img/Star_Wars_Logo.png';
import Background from '../img/space.jpg';
import Image from '../img/cantina.jpg';

function Dashboard() {
    return (
        <div className="dashboard-container">
        <h1>Welcome to the Cantina</h1>
        <h2>Community fan club for Star Wars fans to share, discover content and connect with other fans</h2>
        <img src={Image} alt="Description" style={{width: '50%'}}/>
        </div>
    )
}

export default Dashboard;