import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import ServiceProvider from "./pages/ServiceProvider";
import Bookings from "./pages/BookingsPage/Bookings";
import BookingsConfirmation from "./pages/BookingsConfirmation/BookingsConfirmation";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/service_provider" element={<ServiceProvider />} />
      <Route path="/appointment-booking" element={<Bookings />} />
      <Route path="/booking-confirmation" element={<BookingsConfirmation />} />
    </Routes>
  );
}

export default App;
