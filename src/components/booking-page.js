import { useNavigate } from "react-router-dom";
import BookingForm from "./booking-form";
import { ToastContainer } from "react-toastify";

export default function BookingPage() {
  const navigate = useNavigate();

  return (
    <div
      className="h-screen w-screen overflow-hidden flex flex-col gap-4 p-6 py-6 bg-gray-50"
      id="ticket-booking-form"
    >
      <ToastContainer />

      {/* Heading */}
      <h1 className="text-center text-4xl font-bold text-pink-800 drop-shadow-2xl">
        Taaza Dandiya 2026 Ticket Booking
      </h1>
      <h3 className="text-center text-xl font-semibold text-pink-700 drop-shadow-md">
        Tickets at Rs.900 (incl. tax) each 🎟
      </h3>

      {/* Back Button */}
      <div className="flex justify-center">
        <button
          onClick={() => navigate("/")}
          className="px-6 py-2 rounded-lg bg-pink-600 text-white font-medium hover:bg-pink-700 transition duration-300 shadow-md"
        >
          Back
        </button>
      </div>

      {/* Booking Form */}
      <div className="m-auto w-full max-w-2xl overflow-y-auto">
        <BookingForm />
      </div>
    </div>
  );
}
