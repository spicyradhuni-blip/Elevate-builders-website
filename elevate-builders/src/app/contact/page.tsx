"use client";

import { useState } from "react";

export default function Contact() {
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");
  const [message, setMessage] = useState("");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>, type: string) {
    e.preventDefault();
    setStatus("sending");
    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form));

    try {
      const res = await fetch("/api/inquiry", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...data, type }),
      });
      if (res.ok) {
        setStatus("success");
        setMessage("Thank you. Your inquiry has been received. We will respond shortly.");
        form.reset();
      } else {
        throw new Error();
      }
    } catch {
      setStatus("error");
      setMessage("Something went wrong. Please try again or email us directly.");
    }
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <h1 className="text-4xl md:text-5xl text-primary">Contact Us</h1>
      <p className="mt-4 text-lg text-foreground/70">Request a quotation or send a general inquiry.</p>

      <div className="grid lg:grid-cols-2 gap-16 mt-12">
        <div>
          <h2 className="text-2xl text-primary">Business Details</h2>
          <ul className="mt-6 space-y-3 text-foreground/80">
            <li><strong>Address:</strong> Building 7756, Prince Abdulaziz Ibn Musaed Ibn Jalawi Street, Al Murabba District, Riyadh 12612, Kingdom of Saudi Arabia</li>
            <li><strong>Email:</strong> <a href="mailto:info@elevatebuilders.com.sa" className="text-primary hover:underline">info@elevatebuilders.com.sa</a></li>
            <li><strong>Phone:</strong> +966 XX XXX XXXX [UPDATE]</li>
            <li><strong>WhatsApp:</strong> [UPDATE: Number]</li>
            <li><strong>CR / National Number:</strong> 7049953909</li>
          </ul>
        </div>

        <div id="quotation">
          <h2 className="text-2xl text-primary mb-6">Request a Quotation</h2>
          <form onSubmit={(e) => handleSubmit(e, "quotation")} className="space-y-4">
            <input name="name" required placeholder="Full Name" className="w-full border border-border rounded-md px-4 py-3 text-sm" />
            <input name="email" type="email" required placeholder="Email" className="w-full border border-border rounded-md px-4 py-3 text-sm" />
            <input name="phone" placeholder="Phone / WhatsApp" className="w-full border border-border rounded-md px-4 py-3 text-sm" />
            <input name="company" placeholder="Company Name" className="w-full border border-border rounded-md px-4 py-3 text-sm" />
            <select name="service" className="w-full border border-border rounded-md px-4 py-3 text-sm">
              <option value="">Service of Interest</option>
              <option>Civil & Structural</option>
              <option>MEP</option>
              <option>Finishing & Fit-Out</option>
              <option>Manpower Supply</option>
              <option>Other</option>
            </select>
            <textarea name="message" required placeholder="Project details, location, scope, timeline..." rows={5} className="w-full border border-border rounded-md px-4 py-3 text-sm" />
            <button type="submit" disabled={status === "sending"} className="bg-primary text-white px-6 py-3 rounded-md text-sm font-medium disabled:opacity-50">
              {status === "sending" ? "Sending..." : "Submit Request"}
            </button>
            {status !== "idle" && <p className={`text-sm mt-2 ${status === "success" ? "text-green-700" : "text-red-600"}`}>{message}</p>}
          </form>
        </div>
      </div>

      <div className="mt-16 max-w-2xl">
        <h2 className="text-2xl text-primary mb-6">General Inquiry</h2>
        <form onSubmit={(e) => handleSubmit(e, "general")} className="space-y-4">
          <input name="name" required placeholder="Name" className="w-full border border-border rounded-md px-4 py-3 text-sm" />
          <input name="email" type="email" required placeholder="Email" className="w-full border border-border rounded-md px-4 py-3 text-sm" />
          <textarea name="message" required placeholder="Your message" rows={4} className="w-full border border-border rounded-md px-4 py-3 text-sm" />
          <button type="submit" className="bg-primary text-white px-6 py-3 rounded-md text-sm font-medium">Send Message</button>
        </form>
      </div>
    </div>
  );
}