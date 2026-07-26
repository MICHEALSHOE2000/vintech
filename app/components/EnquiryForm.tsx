"use client";

import { FormEvent, useState } from "react";
import { whatsappUrl } from "../data/site";

export function EnquiryForm({ type }: { type: "wholesale" | "contact" }) {
  const [submitted, setSubmitted] = useState(false);
  const [message, setMessage] = useState("");
  const [requestId, setRequestId] = useState("");

  function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    if (!form.checkValidity()) return;
    const data = new FormData(form);
    const summary = Array.from(data.entries()).map(([key, value]) => `${key}: ${value}`).join("\n");
    setMessage(summary);
    setRequestId(`VT-${Date.now().toString().slice(-8)}`);
    setSubmitted(true);
  }

  if (submitted) {
    return <div className="form-success receipt-card" role="status">
      <div className="receipt-head"><img src="/vintech-logo.jpg" alt="Vintech Global" /><span><i /> Ready to send</span></div>
      <p className="receipt-kicker">VINTECH ENQUIRY RECEIPT</p>
      <h2>Your request is prepared.</h2>
      <div className="receipt-lines">
        <p><span>Request number</span><b>{requestId}</b></p>
        <p><span>Request type</span><b>{type === "wholesale" ? "Business & bulk supply" : "Laptop enquiry"}</b></p>
        <p><span>Next step</span><b>Send details on WhatsApp</b></p>
      </div>
      <p className="receipt-note">This is an enquiry receipt, not proof of payment. Vintech will confirm availability, the exact configuration and today’s price with you.</p>
      <a className="button button-lime" href={whatsappUrl(`Hello Vintech Global, here is my ${type} enquiry.\nRequest: ${requestId}\n${message}`)} target="_blank" rel="noreferrer">Continue on WhatsApp</a>
      <button type="button" className="text-link" onClick={() => setSubmitted(false)}>Edit enquiry</button>
    </div>;
  }

  return (
    <form className="enquiry-form" onSubmit={submit}>
      <div className="form-grid">
        <label>Full name<input name="Full name" required autoComplete="name" /></label>
        {type === "wholesale" && <label>Business or organisation<input name="Organisation" required /></label>}
        <label>Phone number<input name="Phone" required inputMode="tel" autoComplete="tel" /></label>
        <label>Email address<input name="Email" type="email" required autoComplete="email" /></label>
        <label>Location<input name="Location" required autoComplete="address-level2" /></label>
        {type === "wholesale" ? <>
          <label>Device type<select name="Device type" required defaultValue=""><option value="" disabled>Select device type</option><option>Business laptops</option><option>Student laptops</option><option>Workstations</option><option>Desktop computers</option><option>Accessories</option><option>Mixed supply</option></select></label>
          <label>Preferred brands<input name="Preferred brands" placeholder="Dell, HP, Lenovo…" /></label>
          <label>Quantity needed<input name="Quantity" required inputMode="numeric" /></label>
          <label>Budget<input name="Budget" required placeholder="Total or per-unit budget" /></label>
        </> : <label>Enquiry type<select name="Enquiry type"><option>Laptop recommendation</option><option>Product availability</option><option>Delivery question</option><option>After-sales support</option><option>Other</option></select></label>}
        <label className="field-wide">{type === "wholesale" ? "Additional requirements" : "How can we help?"}<textarea name="Requirements" required rows={5} /></label>
      </div>
      <p className="form-note">This form prepares your enquiry locally. Nothing is sent until you choose the WhatsApp continuation on the next screen.</p>
      <button className="button button-lime button-large" type="submit">Prepare {type === "wholesale" ? "quote request" : "enquiry"}</button>
    </form>
  );
}
