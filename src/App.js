import { Route, Routes } from "react-router-dom";
import Home from "./components/home";
import BookingPage from "./components/booking-page";
import Aboutpage from "./components/About-page";
import Terms from "./components/terms";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/get-tickets" element={<BookingPage />} />
      <Route path="/about" element={<Aboutpage />} />
      <Route path="/terms" element={<Terms />} />
    </Routes>
  );
}
