import { useState } from "react";
import "../App.css";
import Banner from "../components/Banner";
import Banner2 from "../components/Banner2";
import Benefits from "../components/Benefits";
import Contact from "../components/Contact";
import EpicenterServices from "../components/EpicenterServices";
import EpicenterWroks from "../components/EpicenterWroks";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Procedure from "../components/Procedure";
import Sidebar from "../components/Sidebar";

function App() {
  const [openSidebar, setOpenSidebar] = useState(false);
  const toggleSidebar = () => {
    setOpenSidebar(!openSidebar);
  };
  return (
    <div className="">
      {openSidebar ? (
        <Sidebar toggleSidebar={toggleSidebar} />
      ) : (
        <>
          <Header
            openSidebar={openSidebar}
            setOpenSidebar={setOpenSidebar}
            toggleSidebar={toggleSidebar}
          />
          <div className="App">
            <Banner
              headingText="Self-care services to look & feel your best."
              buttonText="Book A Therapist"
            />
            <EpicenterWroks />
            <Banner2 />
            <Benefits />
            <EpicenterServices />
            <Procedure />
            <Contact />
            <Footer />
          </div>
        </>
      )}
    </div>
  );
}

export default App;
