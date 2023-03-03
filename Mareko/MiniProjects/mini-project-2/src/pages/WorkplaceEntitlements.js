import Footer from "../components/Footer";
import NavBar from "../components/NavBar";
import EntitlementsContent from "../components/WorkplaceEntitlements/EntitlementsContent";

function WorkplaceEntitlements() {
    return(
        <div style={{display: "flex", flexDirection: "column", minHeight: "100vh"}}>
            <NavBar />

            <div style={{flex: 1,}}>
                <EntitlementsContent />
            </div>

            <footer><Footer /></footer>
            
        </div>
    )
};

export default WorkplaceEntitlements;
