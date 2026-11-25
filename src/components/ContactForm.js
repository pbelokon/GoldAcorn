"use client";
import { useState } from "react";

export default function ContactForm() {
  const [status, setStatus] = useState("idle");

  async function handleSubmit(e) {
    e.preventDefault();
    setStatus("sending");

    const form = e.target;
    const data = {
      name: form.name.value,
      email: form.email.value,
      message: form.message.value,
    };

    const res = await fetch("/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });

    if (res.ok) {
      setStatus("sent");
      form.reset();
    } else {
      setStatus("error");
    }
  }

  return (
    <form className="connect-form" onSubmit={handleSubmit}>
      <input type="text" name="name" placeholder="Name" className="connect-input" required />
      <input type="email" name="email" placeholder="Email" className="connect-input" required />
      <textarea name="message" placeholder="Message" className="connect-input connect-textarea" required />
      <button type="submit" className="connect-submit" disabled={status === "sending"}>
        {status === "sending" ? "Sending..." : "Send"}
      </button>
      {status === "sent" && <p className="connect-status">Message sent!</p>}
      {status === "error" && <p className="connect-status connect-status--error">Something went wrong. Try again.</p>}
    </form>
  );
}
