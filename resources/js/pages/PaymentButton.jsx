import axios from "axios";
import { useState } from "react";

export default function PayButton({ ticketId, amount }) {
  const [loading, setLoading] = useState(false);

  const handlePayment = async () => {
    setLoading(true);
    try {
      // Call Laravel API to get eSewa form data
      const res = await axios.post(`/api/pay/${ticketId}`, { amount });
      const esewa = res.data;

      // Create a form and submit to eSewa sandbox
      const form = document.createElement("form");
      form.method = "POST";
      form.action = "https://uat.esewa.com.np/epay/main";

      Object.keys(esewa).forEach((key) => {
        const input = document.createElement("input");
        input.type = "hidden";
        input.name = key;
        input.value = esewa[key];
        form.appendChild(input);
      });

      document.body.appendChild(form);
      form.submit();
    } catch (err) {
      console.error(err);
      alert("Payment failed to start.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <button
      disabled={loading}
      onClick={handlePayment}
      className="bg-green-600 text-white px-4 py-2 rounded"
    >
      {loading ? "Redirecting..." : `Pay ${amount} NPR`}
    </button>
  );
}
