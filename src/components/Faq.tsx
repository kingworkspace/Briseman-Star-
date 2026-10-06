import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const FAQS = [
  { q: "Do you handle events outside Kampala?", a: "Yes. We produce events across Uganda — Entebbe, Jinja, Mbarara, Gulu and beyond. Transport and crew logistics are included in your quote." },
  { q: "How far in advance should we book stage and AV equipment?", a: "For large productions with stage sets and LED screens, book 3–4 weeks ahead. Smaller setups can often be arranged within a week, subject to availability." },
  { q: "Do you offer full event production or just equipment rental?", a: "Both. We can run your whole event — concept, stage, sound, lighting, decor, media and PR — or supply and operate specific equipment for your team." },
  { q: "Can you brand the stage and venue for our company?", a: "Absolutely. Digital banners, LED content, branded backdrops and decor are designed in-house to match your brand identity." },
  { q: "How does an artist submit a demo to Briseman Star Records?", a: "Use the demo submission on our Contact page or send your music links on WhatsApp. Our A&R team listens to every submission." },
  { q: "How do payments work?", a: "We share a detailed quote after your brief. A deposit confirms your date, with the balance due before the event." },
];

export function Faq() {
  return (
    <section className="relative z-10 mx-auto max-w-4xl px-6 pb-24 lg:px-10">
      <p className="text-sm font-semibold uppercase tracking-[0.25em] text-accent">FAQ</p>
      <h2 className="mt-4 font-display text-5xl leading-[0.9] md:text-7xl">Questions, answered</h2>
      <Accordion type="single" collapsible className="mt-10">
        {FAQS.map((f, i) => (
          <AccordionItem key={f.q} value={`f${i}`} className="border-border">
            <AccordionTrigger className="text-left text-lg font-semibold hover:text-accent hover:no-underline">{f.q}</AccordionTrigger>
            <AccordionContent className="text-pretty text-base text-brand/70">{f.a}</AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </section>
  );
}
