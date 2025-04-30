import React, { useState, useEffect, useRef } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import axios from "axios";
import { FaPhoneAlt, FaPaypal, FaUniversity, FaSpinner, FaSun, FaMoon } from "react-icons/fa";

const services = {
  Recording: [
    { name: "Single Track", desc: "Perfect for individual tracks.", price: 6500 },
    { name: "EP Recording", desc: "For a collection of 3-5 tracks.", price: 32500 },
    { name: "Album Recording", desc: "Full album of 10+ tracks.", price: 65000 },
  ],
  Mixing: [
    { name: "Single Track Mixing", desc: "Great for crisp, clean sound.", price: 9750 },
    { name: "EP Mixing", desc: "3-5 tracks mixed professionally.", price: 45500 },
    { name: "Album Mixing", desc: "Full album mixdown package.", price: 91000 },
  ],
  Mastering: [
    { name: "Single Track Mastering", desc: "Polished, radio-ready sound.", price: 6500 },
    { name: "EP Mastering", desc: "Get your EP ready for distribution.", price: 32500 },
    { name: "Album Mastering", desc: "For 10 or more tracks.", price: 65000 },
  ],
  "Other Services": [
    { name: "Live Performance Recording", desc: "Capture the energy of your show.", price: 39000 },
    { name: "Songwriting Assistance", desc: "Need help with lyrics or melody?", price: 19500 },
  ],
};

const PricingPlans = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const bookingData = location.state?.bookingData;

  const [paymentMethod, setPaymentMethod] = useState("mpesa");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [amount, setAmount] = useState("");
  const [feedback, setFeedback] = useState({ msg: "", type: "" });
  const [loading, setLoading] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(true);
  const [paymentId, setPaymentId] = useState(null);
  const phoneInputRef = useRef(null);

  const handleQuickFill = (price) => {
    setAmount(price.toString());
    document.getElementById("payment-section")?.scrollIntoView({ behavior: "smooth" });
  };

  const validateInputs = () => {
    if (paymentMethod === "mpesa" && !/^07\d{8}$/.test(phoneNumber)) {
      setFeedback({ msg: "Invalid M-PESA number. Use 07XXXXXXXX format.", type: "error" });
      return false;
    }
    if (!amount || isNaN(amount) || Number(amount) < 10) {
      setFeedback({ msg: "Enter a valid amount (minimum 10 KES).", type: "error" });
      return false;
    }
    return true;
  };

  const checkPaymentStatus = async (paymentId) => {
    try {
      const response = await axios.get(`https://7130-102-0-18-168.ngrok-free.app/api/payments/${paymentId}`);
      return response.data;
    } catch (error) {
      console.error("Error checking payment status:", error);
      return { status: "error" };
    }
  };

  const handlePayment = async () => {
    if (!validateInputs()) return;
    setLoading(true);

    try {
      const payload = {
        amount: Number(amount),
        paymentMethod,
        phone: phoneNumber,
        bookingData
      };

      const response = await axios.post(
        "https://7130-102-0-18-168.ngrok-free.app/api/payments/initiate",
        payload
      );

      if (response.data.success) {
        setPaymentId(response.data.paymentId);
        setFeedback({
          msg: "✅ Payment initiated. Checking status...",
          type: "success"
        });

        const pollPayment = setInterval(async () => {
          const status = await checkPaymentStatus(response.data.paymentId);
          
          if (status.status === "success") {
            clearInterval(pollPayment);
            navigate("/confirmation");
          }
          
          if (status.status === "failed") {
            clearInterval(pollPayment);
            setFeedback({ msg: "❌ Payment failed. Please try again.", type: "error" });
          }
        }, 3000);

        setTimeout(() => {
          clearInterval(pollPayment);
          setFeedback({ msg: "⌛ Payment check timed out", type: "error" });
        }, 300000);

      } else {
        setFeedback({ msg: "❌ Payment initiation failed", type: "error" });
      }
    } catch (error) {
      console.error("Payment error:", error);
      setFeedback({ 
        msg: error.response?.data?.message || "Payment processing failed", 
        type: "error" 
      });
    } finally {
      setLoading(false);
    }
  };

  const toggleDarkMode = () => setIsDarkMode((prev) => !prev);

  useEffect(() => {
    document.body.style.backgroundColor = isDarkMode ? "#111" : "#f9f9f9";
    document.body.style.color = isDarkMode ? "white" : "black";
  }, [isDarkMode]);

  useEffect(() => {
    if (paymentMethod === "mpesa") phoneInputRef.current?.focus();
  }, [paymentMethod]);

  return (
    <div className={`p-6 ${isDarkMode ? "bg-black text-white" : "bg-white text-black"} min-h-screen transition-colors`}>
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-4xl font-extrabold text-yellow-400 drop-shadow">Pricing Plans</h1>
        <button onClick={toggleDarkMode} aria-label="Toggle dark mode" className="p-3 rounded-full bg-gray-700 hover:bg-gray-600 text-white transition">
          {isDarkMode ? <FaSun /> : <FaMoon />}
        </button>
      </div>

      <p className="text-lg text-center text-gray-400 mb-8">
        Select a music production service that fits your vibe and start your journey.
      </p>

      {bookingData && (
        <div className="bg-gray-800 p-4 rounded-lg text-yellow-300 text-center shadow-lg mb-10">
          <h3 className="text-xl font-semibold mb-2">Booking Details</h3>
          <p><strong>Name:</strong> {bookingData.name}</p>
          <p><strong>Email:</strong> {bookingData.email}</p>
          <p><strong>Service:</strong> {bookingData.service}</p>
          <p><strong>Date:</strong> {bookingData.date}</p>
        </div>
      )}

      {Object.entries(services).map(([category, plans]) => (
        <div key={category} className="mt-12">
          <h2 className="text-2xl text-yellow-400 mb-4 font-bold">{category}</h2>
          <div className={`grid ${category === "Other Services" ? "grid-cols-2" : "grid-cols-1 md:grid-cols-3"} gap-6`}>
            {plans.map((plan, idx) => (
              <div key={idx} className="bg-gray-800 p-5 rounded-xl shadow-md hover:shadow-yellow-500/30 transition transform hover:scale-105">
                <h3 className="text-xl font-bold text-yellow-300">{plan.name}</h3>
                <p className="mt-2 text-sm">{plan.desc}</p>
                <p className="font-semibold mt-3">KES {plan.price.toLocaleString()}</p>
                <button
                  onClick={() => handleQuickFill(plan.price)}
                  className="mt-4 w-full bg-yellow-400 text-black py-2 rounded-full hover:bg-yellow-500 transition"
                >
                  Book Now
                </button>
              </div>
            ))}
          </div>
        </div>
      ))}

      <div id="payment-section" className="mt-20 max-w-md mx-auto bg-gray-900 p-6 rounded-lg shadow-2xl">
        <h3 className="text-xl text-yellow-400 font-bold text-center mb-4">Payment Options</h3>

        <div className="flex justify-around mb-6">
          {[{ type: "mpesa", icon: <FaPhoneAlt /> }, { type: "paypal", icon: <FaPaypal /> }, { type: "bank", icon: <FaUniversity /> }].map(({ type, icon }) => (
            <button
              key={type}
              onClick={() => setPaymentMethod(type)}
              className={`flex items-center gap-2 px-4 py-2 rounded-full transition font-medium ${paymentMethod === type ? "bg-yellow-500 text-black" : "bg-gray-700 hover:bg-yellow-400"}`}
              aria-label={`${type} payment option`}
            >
              {icon}
              {type.toUpperCase()}
            </button>
          ))}
        </div>

        {paymentMethod === "mpesa" && (
          <input
            ref={phoneInputRef}
            type="text"
            placeholder="Phone Number (07XXXXXXXX)"
            className="w-full mb-3 p-2 rounded bg-gray-800 text-white border border-gray-600"
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
          />
        )}

        {paymentMethod === "paypal" && (
          <div className="text-center text-yellow-300 mb-4">
            <p>PayPal: <strong>paypal@heavenlyrhythms.com</strong></p>
          </div>
        )}

        {paymentMethod === "bank" && (
          <div className="text-center text-yellow-300 mb-4">
            <p>Bank: <strong>Co-operative Bank</strong></p>
            <p>Account No: <strong>1234567890</strong></p>
            <p>Account Name: <strong>Heavenly Rhythms Studio</strong></p>
          </div>
        )}

        <div className="mt-4">
          <input
            type="text"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            placeholder="Enter Amount"
            className="w-full p-2 mb-4 rounded bg-gray-800 text-white border border-gray-600"
          />

          <div className="flex justify-between">
            <button onClick={handlePayment} className="bg-yellow-400 text-black py-2 px-6 rounded-lg flex gap-2 items-center hover:bg-yellow-500">
              {loading && <FaSpinner className="animate-spin" />}
              {loading ? "Processing..." : "Confirm Payment"}
            </button>
          </div>

          {feedback.msg && (
            <div className={`mt-4 text-center p-3 rounded-lg ${feedback.type === "error" ? "bg-red-500" : "bg-green-500"}`}>
              <p>{feedback.msg}</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default PricingPlans;
