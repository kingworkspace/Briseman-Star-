import { useState } from "react";
import { whatsappLink } from "@/lib/whatsapp";
import { WhatsAppIcon } from "./WhatsAppButton";

const EVENT_TYPES = ["Corporate launch", "Concert", "Fashion show", "Wedding / reception", "Private party", "Brand activation", "Other"];
const SERVICES = ["Stage sets", "Audio / Visual", "LED screens", "Decor & style", "Digital banners", "Multimedia production", "PR & media", "Artist booking"];
const BUDGETS = ["Under UGX 5M", "UGX 5M – 20M", "UGX 20M – 50M", "UGX 50M+", "Not sure yet"];

const field = "mt-2 w-full rounded-lg bg-white/5 px-4 py-3 text-brand ring-1 ring-white/10 outline-none placeholder:text-brand/30 focus:ring-accent";
const label = "text-xs font-semibold uppercase tracking-[0.2em] text-brand/60";

export function BookingForm() {
  const [services, setServices] = useState<string[]>([]);
  const [error, setError] = useState("");

  const toggle = (s: string) => setServices((p) => (p.includes(s) ? p.filter((x) => x !== s) : [...p, s]));

  const submit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const d = new FormData(e.currentTarget);
    const name = String(d.get("name") || "").trim();
    const phone = String(d.get("phone") || "").trim();
    if (!name || !phone) {
      setError("Please add your name and phone number.");
      return;
    }
    setError("");
    const msg = [
      "Hello Briseman Star, I'd like a quote for an event.",
      `Name: ${name}`,
      `Phone: ${phone}`,
      `Event type: ${d.get("type")}`,
      `Date: ${d.get("date") || "TBC"}`,
      `Venue: ${d.get("venue") || "TBC"}`,
      `Guests: ${d.get("guests") || "TBC"}`,
      `Budget: ${d.get("budget")}`,
      `Services: ${services.length ? services.join(", ") : "Not sure yet"}`,
      `Details: ${d.get("details") || "-"}`,
    ].join("\n");
    window.open(whatsappLink(msg), "_blank", "noopener");
  };

  return (
    <form onSubmit={submit} className="grid gap-6 rounded-xl bg-white/5 p-7 ring-1 ring-white/10 backdrop-blur-md md:grid-cols-2 md:p-10">
      <div className="md:col-span-2">
        <p className="text-sm font-semibold uppercase tracking-[0.25em] text-accent">Request a quote</p>
        <h2 className="mt-3 font-display text-4xl leading-[0.95] md:text-5xl">Book your event</h2>
        <p className="mt-3 text-brand/60">Fill in the brief — it opens WhatsApp with everything ready to send to our team.</p>
      </div>
      <label className="block"><span className={label}>Your name *</span><input name="name" maxLength={80} className={field} placeholder="Full name" /></label>
      <label className="block"><span className={label}>Phone *</span><input name="phone" type="tel" maxLength={20} className={field} placeholder="+256 ..." /></label>
      <label className="block"><span className={label}>Event type</span>
        <select name="type" className={field}>{EVENT_TYPES.map((t) => <option key={t} className="bg-card">{t}</option>)}</select>
      </label>
      <label className="block"><span className={label}>Event date</span><input name="date" type="date" className={field} /></label>
      <label className="block"><span className={label}>Venue / town</span><input name="venue" maxLength={100} className={field} placeholder="e.g. Kampala Serena, Entebbe" /></label>
      <label className="block"><span className={label}>Guest count</span><input name="guests" type="number" min={1} className={field} placeholder="e.g. 300" /></label>
      <label className="block md:col-span-2"><span className={label}>Budget range</span>
        <select name="budget" className={field}>{BUDGETS.map((b) => <option key={b} className="bg-card">{b}</option>)}</select>
      </label>
      <fieldset className="md:col-span-2">
        <legend className={label}>Services needed</legend>
        <div className="mt-3 flex flex-wrap gap-2">
          {SERVICES.map((s) => {
            const on = services.includes(s);
            return (
              <button type="button" key={s} onClick={() => toggle(s)} aria-pressed={on}
                className={`rounded-full px-4 py-2 text-sm ring-1 transition-colors ${on ? "bg-accent text-accent-foreground ring-accent" : "bg-white/5 text-brand/70 ring-white/10 hover:ring-brand/40"}`}>
                {s}
              </button>
            );
          })}
        </div>
      </fieldset>
      <label className="block md:col-span-2"><span className={label}>Tell us more</span>
        <textarea name="details" rows={4} maxLength={1000} className={field} placeholder="Theme, timings, anything we should know" />
      </label>
      {error && <p className="text-sm text-accent md:col-span-2">{error}</p>}
      <button type="submit" className="inline-flex items-center justify-center gap-3 rounded-full bg-accent px-7 py-3.5 text-sm font-semibold text-accent-foreground transition-colors hover:bg-brand hover:text-ink md:col-span-2 md:justify-self-start">
        <WhatsAppIcon /> Send brief on WhatsApp
      </button>
    </form>
  );
}
