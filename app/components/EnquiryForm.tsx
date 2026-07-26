"use client";

import { FormEvent, useState } from "react";
import { whatsappUrl } from "../data/site";

export function EnquiryForm({ type }: { type: "wholesale" | "contact" }) {
  const [submitted, setSubmitted] = useState(false);
  const [message, setMessage] = useState("");

  function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    if (!form.checkValidity()) return;
    const data = new FormData(form);
    const summary = Array.from(data.entries()).map(([key, value]) => `${key}: ${value}`).join("\n");
    setMessage(summary);
    setSubmitted(true);
  }

  if (submitted) {
    return <div className="form-success" role="status"><span>✓</span><h2>Enquiry prepared.</h2><p>Your details are ready. Continue on WhatsApp so the CHEX team can receive and respond to your request.</p><a className="button button-lime" href={whatsappUrl(`Hello CHEX Computers, here is my ${type} enquiry:\n${message}`)} target="_blank" rel="noreferrer">Send details on WhatsApp</a><button type="button" className="text-link" onClick={() => setSubmitted(false)}>Edit enquiry</button></div>;
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
