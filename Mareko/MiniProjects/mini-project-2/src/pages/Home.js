import Footer from "../components/Footer";
import EntitlementsCalculator from "../components/Home/EntitlementsCalculator";
import TopSection from "../components/Home/TopSection";
import NavBar from "../components/NavBar";


function Home(){
    return(
        <div>
            <NavBar />
            <TopSection />
            <EntitlementsCalculator />
            <Footer />
        </div>
    )
};

export default Home;