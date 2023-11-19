import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import ServiceProvider from "./pages/ServiceProvider";
import Bookings from "./pages/BookingsPage/Bookings";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/service_provider" element={<ServiceProvider />} />
      <Route path="/appointment-booking" element={<Bookings />} />
    </Routes>
  );
}

export default App;
