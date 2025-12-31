import { useState } from "react";

function RegisterForm() {
  const [email, setEmail] = useState("");
  const [eventDate, setEventDate] = useState("");
  const [message, setMessage] = useState("");
  const [phone, setPhone] = useState("");

  const [isSending, setIsSending] = useState(false);
  const [status, setStatus] = useState({ type: "", text: "" }); 

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus({ type: "", text: "" });

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
  <section className="inquire-section" id="inquire">
    <div className="inquire-wrap">
      <div className="inquire-head">
        <h2 className="inquire-title">Book Your Event</h2>
        <p className="inquire-subtitle">
          Tell us what you’re planning — we’ll get back to you with pricing and availability.
        </p>
      </div>




      <div className="inquire-card">
        <form className="inquire-form" onSubmit={handleSubmit}>
          {/* Status message */}
          {status.text && (
            <div className={`status-pill ${status.type}`}>
              {status.text}
            </div>
          )}

          <div className="form-grid">
            <div className="field">
              <label>Email</label>
              <input
                type="email"
                name="email"
                placeholder="you@email.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                disabled={isSending}
                required
              />
            </div>

            <div className="field">
              <label>Phone Number</label>
              <input
                type="tel"
                name="phone"
                placeholder="(347) 555-XXXX"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                disabled={isSending}
              />
            </div>

            <div className="field">
              <label>Event Date</label>
              <input
                type="text"
                name="date"
                placeholder="MM/DD/YYYY"
                value={eventDate}
                onChange={(e) => setEventDate(e.target.value)}
                disabled={isSending}
              />
            </div>

            <div className="field field-full">
              <label>Message</label>
              <textarea
                name="message"
                placeholder="Event location, time, indoor/outdoor, age group, rides you want..."
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                disabled={isSending}
                required
                rows={5}
              />
            </div>

            <div className="form-actions">
              <button className="inquire-btn" type="submit" disabled={isSending}>
                {isSending ? "SENDING..." : "SUBMIT"}
              </button>

              <p className="form-note">
                We typically respond within 1 business day.
              </p>
            </div>
          </div>
        </form>
      </div>
      <div className="inquire-direct">
        Contact us directly at{" "}
        <a href="tel:4019341560">(401) 934-1560</a>
      </div>
    </div>
  </section>
);

}

export default RegisterForm;

