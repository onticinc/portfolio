import React, { useState } from "react";

const ContactForm = () => {
  const [status, setStatus] = useState("Submit");
  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("Sending...");
    const { name, email, message } = e.target.elements;
    let details = {
      name: name.value,
      email: email.value,
      message: message.value,
    };
    let response = await fetch("http://localhost:5000/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json;charset=utf-8",
      },
      body: JSON.stringify(details),
    });
    setStatus("Submit");
    let result = await response.json();
    alert(result.status);
  };
  return (
    <form onSubmit={handleSubmit}>
      <div className ="">
        <label className="text-white block mb-6 text-xl font-bold text-left mt-10" htmlFor="name">Name:</label>
        <input className="w-full border border-input-border bg-input px-4 py-4" type="text" id="name" required />
      </div>
      <div>
        <label className="text-white block mb-6 text-xl font-bold text-left mt-5" htmlFor="email">Email:</label>
        <input className="w-full border border-input-border bg-input px-4 py-4" type="email" id="email" required />
      </div>
      <div>
        <label className="text-white block mb-6 text-xl font-bold text-left mt-5" htmlFor="message">Message:</label>
        <textarea className="w-full border border-input-border bg-input px-4 py-4 h-56 resize-none" id="message" required />
      </div>
      <button className="px-6 py-2 bg-theme text-white font-bold mt-10" type="submit">{status}</button>
    </form>
  );
};

export default ContactForm;