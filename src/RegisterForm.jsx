
// function RegisterForm() {
//   return (
//     <div className="register-photo">
//       <div className="form-container">
//         <div className="image-holder"></div>
//         <form method="post">
//           <h2 className="text-center">
//             <strong>Contact Us!</strong>
//           </h2>
//           <div className="form-group">
//             <input
//               type="email"
//               name="email"
//               placeholder="Email"
//               className="form-control"
//             />
//           </div>
//           <div className="form-group">
//             <input
//               type="text"
//               name="date"
//               placeholder="Event Date"
//               className="form-control"
//             />
//           </div>
//           <div className="form-group">
//             <input
//               type="text"
//               name="message"
//               placeholder="Message"
//               className="form-control"
//             />
//           </div>
//           <div className="form-group">
//             <button className="btn btn-primary btn-block" type="submit">
//               SUBMIT
//             </button>
//           </div>
//         </form>
//       </div>
//     </div>
//   );
// }
// export default RegisterForm;    


// RegisterForm.jsx
import { useState } from "react";

function RegisterForm() {
  const [email, setEmail] = useState("");
  const [eventDate, setEventDate] = useState("");
  const [message, setMessage] = useState("");
  const [phone, setPhone] = useState("");

  const [isSending, setIsSending] = useState(false);
  const [status, setStatus] = useState({ type: "", text: "" }); // "", "success", "error"

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus({ type: "", text: "" });

    // basic front-end validation
    if (!email.trim() || !message.trim()) {
      setStatus({ type: "error", text: "Please enter your email and a message." });
      return;
    }

    setIsSending(true);

    try {
      const res = await fetch(`${import.meta.env.BASE_URL}api/inquire`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: "Website Inquiry",
          email,
          phone, 
          message: `Event Date: ${eventDate || "N/A"}\n\n${message}`,
        }),
      });

      if (!res.ok) {
        let msg = "Something went wrong. Please try again.";
        try {
          const data = await res.json();
          if (data?.error) msg = data.error;
        } catch (_) {}
        setStatus({ type: "error", text: msg });
        return;
      }

      setStatus({ type: "success", text: "Inquiry sent! We'll get back to you soon." });
      setEmail("");
      setEventDate("");
      setMessage("");
    } catch (err) {
      console.error(err);
      setStatus({ type: "error", text: "Network error. Please try again." });
    } finally {
      setIsSending(false);
    }
  };

  return (
    <div className="register-photo">
      <div className="form-container">
        <div className="image-holder"></div>

        <form onSubmit={handleSubmit}>
          <h2 className="text-center">
            <strong>Contact Us!</strong>
          </h2>

          {/* Status message */}
          {status.text && (
            <div
              className={`alert ${
                status.type === "success" ? "alert-success" : "alert-danger"
              }`}
              role="alert"
              style={{ marginTop: 12 }}
            >
              {status.text}
            </div>
          )}

          <div className="form-group">
            <input
              type="email"
              name="email"
              placeholder="Email"
              className="form-control"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              disabled={isSending}
              required
            />
          </div>

          <div className="form-group">
            <input
              type="tel"
              name="phone"
              placeholder="Phone Number"
              className="form-control"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              disabled={isSending}
            />
          </div>


          <div className="form-group">
            <input
              type="text"
              name="date"
              placeholder="Event Date"
              className="form-control"
              value={eventDate}
              onChange={(e) => setEventDate(e.target.value)}
              disabled={isSending}
            />
          </div>

          <div className="form-group">
            <input
              type="text"
              name="message"
              placeholder="Message"
              className="form-control"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              disabled={isSending}
              required
            />
          </div>

          <div className="form-group">
            <button className="btn btn-primary btn-block" type="submit" disabled={isSending}>
              {isSending ? "SENDING..." : "SUBMIT"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default RegisterForm;

