import Footer from "../components/Footer";
import NavBar from "../components/NavBar";
import NZPublicHolidaysList from "../components/PublicHolidays/NZPublicHolidaysList";

function PublicHolidays() {
  return (
    <div style={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}>
      <NavBar />

      <main style={{ flex: 1 }}>
        <NZPublicHolidaysList />
      </main>

      <footer>
        <Footer />
      </footer>
    </div>
  );
}

export default PublicHolidays;
