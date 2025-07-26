import React, { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import axios from "axios";

const PaymentPage = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [amount, setAmount] = useState(0);
  const token = localStorage.getItem("jwtToken");

  // Destructure state passed from previous page
  const { playlistId, playlistPrice } = location.state || {};

  useEffect(() => {
    if (!playlistId || !playlistPrice) {
      navigate("/"); // Redirect to home page if necessary data is missing
    } else {
      setAmount(playlistPrice); // Set amount based on playlistPrice
    }
  }, [playlistId, playlistPrice, navigate]);

  const handlePayment = async () => {
    try {
      // Create order on the server
      const { data } = await axios.post(
        "http://localhost:5000/api/payment/order",
        { amount, playlistId },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      const options = {
        key: "rzp_test_TUXmHdlMzmFPvE", 
        amount: data.order.amount,
        currency: data.order.currency,
        name: "JNJ",
        description: "Playlist Purchase",
        order_id: data.order.id,
        prefill: {
          name: "JNJ",
          email: "ntpmcoat@gmail.com",
          contact: "9999999999",
        },
        handler: async function (response) {
          try {
            const verifyData = {
              orderId: response.razorpay_order_id,
              paymentId: response.razorpay_payment_id,
              signature: response.razorpay_signature,
            };

            const verifyResponse = await axios.post(
              "http://localhost:5000/api/payment/verify",
              verifyData,
              {
                headers: {
                  Authorization: `Bearer ${token}`,
                },
              }
            );

            if (verifyResponse.data.success) {
              alert("Payment successful!");
              navigate(-1); // Navigate back to the previous page
            } else {
              throw new Error(verifyResponse.data.message);
            }
          } catch (error) {
            console.error("Payment verification failed:", error);
            alert("Payment verification failed. Redirecting to home.");
            navigate("/"); // Redirect to home page on failure
          }
        },
        theme: {
          color: "#3399cc",
        },
      };

      const razorpay = new window.Razorpay(options);
      razorpay.open();
    } catch (error) {
      console.error("Error during payment:", error);
      alert("Payment Failed. Redirecting to home.");
      navigate("/"); // Redirect to home page on failure
    }
  };

  return (
    <div>
      <h1>Payment Page</h1>
      <p>Playlist ID: {playlistId}</p>
      <p>Amount to Pay: ${amount}</p>
      <button onClick={handlePayment}>Pay Now</button>
    </div>
  );
};

export default PaymentPage;
