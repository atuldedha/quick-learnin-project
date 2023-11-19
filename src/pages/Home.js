import { useRef, useState } from "react";
import "../App.css";
import Sidebar from "../components/Sidebar/Sidebar";
import Header from "../components/Header/Header";
import Banner from "../components/Banner/Banner";
import EpicenterWroks from "../components/EpicenterWorks/EpicenterWroks";
import Banner2 from "../components/Banner2/Banner2";
import Benefits from "../components/Benefits/Benefits";
import EpicenterServices from "../components/EpicenterServices/EpicenterServices";
import Procedure from "../components/Procedure/Procedure";
import Contact from "../components/Contact/Contact";
import Footer from "../components/Footer/Footer";
import BannerImage from "../images/banner1.png";
import BannerSmall from "../images/bannerSmall.png";

function App() {
  const [openSidebar, setOpenSidebar] = useState(false);
  const toggleSidebar = () => {
    setOpenSidebar(!openSidebar);
  };

  const contactSectionRef = useRef(null);

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
            contactSectionRef={contactSectionRef}
          />
          <div className="App">
            <Banner
              imageSrcLarge={BannerImage}
              imageSrcSmall={BannerSmall}
              textColor="#000000"
              headingText="Self-care services to look & feel your best."
              buttonText="Book A Therapist"
            />
            <EpicenterWroks />
            <Banner2 />
            <Benefits />
            <EpicenterServices />
            <Procedure />
            <Contact innerRef={contactSectionRef} />
            <Footer />
          </div>
        </>
      )}
    </div>
  );
}

export default App;
