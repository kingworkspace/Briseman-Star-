import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { Faq } from "@/components/Faq";
import redStage from "@/assets/work-red-stage.jpg.asset.json";
import studio from "@/assets/studio.jpg.asset.json";
import workMetro from "@/assets/work-metro.jpg.asset.json";
import workOutdoor from "@/assets/work-outdoor-stage.jpg.asset.json";
import workGarden from "@/assets/work-garden.jpg.asset.json";
import workPoolside from "@/assets/work-poolside.jpg.asset.json";
import workRunway from "@/assets/work-runway.jpg.asset.json";
import workLed from "@/assets/work-led.jpg.asset.json";
import workTents from "@/assets/work-tents.jpg.asset.json";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Briseman Star — We Make Your Brand Stand Out" },
      {
        name: "description",
        content:
          "A cutting-edge digital and lifestyle agency with 5 years of experience — events production, brand strategy, PR and record label services in Kampala.",
      },
      { property: "og:title", content: "Briseman Star — We Make Your Brand Stand Out" },
      {
        property: "og:description",
        content:
          "Events production, brand strategy, PR and record label services. 5 years of digital experience.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const marqueeItems = [
  "Stage design",
  "Artist development",
  "Live production",
  "Creative direction",
  "Brand strategy",
  "Public relations",
];

const services = [
  { n: "01", title: "Brand Strategy", text: "Let's make your brand stand out." },
  { n: "02", title: "Online Media Management", text: "All your digital channels tailored to keep your audience updated." },
  { n: "03", title: "Audio Visual Services", text: "Unforgettable environments through stimulating your attendees' senses." },
  { n: "04", title: "Digital Banners", text: "A colourful, engaging stage backdrop that enhances your branding and event experience." },
  { n: "05", title: "Decor & Style", text: "Deliver a message, promote a product, enhance the theme, build brand recognition." },
  { n: "06", title: "Multimedia Production", text: "Spectacular in-house multimedia content designed to engage and excite." },
  { n: "07", title: "Production Stage Sets", text: "Stage set design can be the difference between a good event and a great one." },
  { n: "08", title: "Public Relations", text: "Media coverage that enhances credibility and raises brand awareness." },
  { n: "09", title: "Record Label Services", text: "A&R, artist development, funding, distribution and promotion." },
];

const CATS = ["All", "Stages & LED", "Corporate", "Decor & Lounges", "Fashion"] as const;
const gallery = [
  { src: workMetro.url, title: "Metro Cement Launch", cat: "Corporate", alt: "Corporate product launch with LED screens and full lighting rig" },
  { src: workRunway.url, title: "Fashion Runway Night", cat: "Fashion", alt: "Fashion runway event with stage screens and chandeliers" },
  { src: workOutdoor.url, title: "Outdoor Concert Stage", cat: "Stages & LED", alt: "Outdoor stage with large LED screen and panel setup" },
  { src: workGarden.url, title: "Garden Lounge Reception", cat: "Decor & Lounges", alt: "Garden event lounge with draped tent and white seating" },
  { src: workPoolside.url, title: "Hotel Poolside Stage", cat: "Stages & LED", alt: "Poolside stage build at a hotel venue" },
  { src: workLed.url, title: "LED Screen & Lighting Rig", cat: "Stages & LED", alt: "Outdoor LED screen and lighting rig setup" },
  { src: workTents.url, title: "Marquee & Lounge Setup", cat: "Decor & Lounges", alt: "Garden event with marquee tents and lounge furniture" },
];

function Gallery() {
  const [cat, setCat] = useState<(typeof CATS)[number]>("All");
  const items = gallery.filter((g) => cat === "All" || g.cat === cat);
  return (
    <section className="relative z-10 mx-auto max-w-7xl px-6 pb-24 lg:px-10">
      <div className="mb-8 flex items-end justify-between gap-6">
        <h2 className="max-w-[16ch] text-balance font-display text-5xl leading-[0.9] md:text-7xl">Our work on stage</h2>
        <p className="hidden text-sm uppercase tracking-[0.2em] text-brand/50 sm:block">Recent events</p>
      </div>
      <div className="mb-8 flex flex-wrap gap-2">
        {CATS.map((c) => (
          <button key={c} onClick={() => setCat(c)} aria-pressed={cat === c}
            className={`rounded-full px-4 py-2 text-sm ring-1 transition-colors ${cat === c ? "bg-accent text-accent-foreground ring-accent" : "bg-white/5 text-brand/70 ring-white/10 hover:ring-brand/40"}`}>
            {c}
          </button>
        ))}
      </div>
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {items.map((g, i) => (
          <figure key={g.src} className={`group relative overflow-hidden rounded-xl outline-1 -outline-offset-1 outline-white/10 ${i === 0 && cat === "All" ? "sm:col-span-2" : ""}`}>
            <img src={g.src} alt={g.alt} loading="lazy" className="aspect-[4/3] w-full object-cover transition-transform duration-500 group-hover:scale-105" />
            <figcaption className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-ink/90 to-transparent p-5 pt-12">
              <span className="text-[11px] font-semibold uppercase tracking-[0.2em] text-accent">{g.cat}</span>
              <p className="mt-1 font-semibold text-brand">{g.title}</p>
            </figcaption>
          </figure>
        ))}
      </div>
    </section>
  );
}

function Index() {
  return (
    <div className="relative overflow-hidden">
      <div className="pointer-events-none absolute inset-0">
        <div className="spot absolute -left-40 -top-48 h-[42rem] w-[42rem] rounded-full bg-accent/20 blur-[150px]" />
        <div className="spot absolute right-[-12rem] top-24 h-[44rem] w-[44rem] rounded-full bg-brand/10 blur-[170px]" style={{ animationDelay: "1.6s" }} />
        <div className="spot absolute bottom-[-14rem] left-1/3 h-[34rem] w-[34rem] rounded-full bg-accent/10 blur-[150px]" style={{ animationDelay: "3s" }} />
      </div>

      <section className="relative z-10 mx-auto max-w-7xl px-6 pb-24 pt-16 lg:px-10">
        <p className="rise text-sm font-semibold uppercase tracking-[0.3em] text-accent" style={{ animationDelay: ".05s" }}>
          Events production &amp; record label
        </p>
        <h1 className="rise mt-4 max-w-[20ch] text-balance font-display text-[clamp(3.6rem,15vw,13rem)] leading-[0.86]">
          We make<br />your brand <span className="text-accent">stand out</span>
        </h1>
        <div className="rise mt-8 max-w-[48ch] text-pretty text-lg text-brand/70" style={{ animationDelay: ".2s" }}>
          <p>
            As a cutting-edge digital and lifestyle agency, we deliver quality with honesty and client
            satisfaction — data-driven products and design that delivers exceptional content to different
            audiences.
          </p>
        </div>
        <div className="rise mt-10 flex flex-wrap items-center gap-4" style={{ animationDelay: ".3s" }}>
          <Link
            to="/contact"
            className="group inline-flex items-center gap-3 rounded-full bg-accent py-3 pl-3 pr-6 text-sm font-semibold text-accent-foreground ring-1 ring-accent transition-colors hover:bg-brand hover:text-ink hover:ring-brand"
          >
            <span className="grid size-6 place-items-center rounded-full bg-white/20 transition-colors group-hover:bg-ink/10">→</span>
            Start a project
          </Link>
          <Link
            to="/services"
            className="inline-flex items-center gap-2 rounded-full px-5 py-3 text-sm font-medium text-brand/70 ring-1 ring-brand/15 transition-colors hover:text-brand hover:ring-brand/40"
          >
            Explore services
          </Link>
        </div>
      </section>

      <div className="relative z-10 overflow-hidden border-y border-border bg-white/5 backdrop-blur-md">
        <div className="marquee-track flex w-max whitespace-nowrap py-4 font-display text-2xl uppercase tracking-tight">
          {[0, 1].map((dup) => (
            <span key={dup} className="flex">
              {marqueeItems.map((item) => (
                <span key={item} className="flex items-center">
                  <span className="px-8 text-brand/80">{item}</span>
                  <span className="text-accent/70">✦</span>
                </span>
              ))}
            </span>
          ))}
        </div>
      </div>

      <section className="relative z-10 mx-auto grid max-w-7xl items-center gap-12 px-6 py-24 md:grid-cols-[1.1fr_1fr] lg:px-10">
        <div className="rise">
          <p className="max-w-[8ch] font-display text-[clamp(5rem,14vw,11rem)] leading-none text-accent">
            5<span className="text-brand/30">yrs</span>
          </p>
          <h2 className="mt-4 max-w-[22ch] text-balance font-display text-4xl leading-[1.05] md:text-5xl">
            Years of digital experience
          </h2>
          <p className="mt-5 max-w-[46ch] text-pretty text-brand/70">
            From the first gig to full production stage sets and signed rosters, we've spent five years
            turning briefs into nights people can't stop talking about.
          </p>
        </div>
        <div className="rise" style={{ animationDelay: ".15s" }}>
          <img
            src={redStage.url}
            alt="Stage built by Briseman Star under red lighting"
            loading="lazy"
            className="aspect-[4/5] w-full rounded-xl object-cover outline-1 -outline-offset-1 outline-white/10"
          />
        </div>
      </section>

      <section className="relative z-10 mx-auto max-w-7xl px-6 pb-24 lg:px-10">
        <div className="mb-10 flex items-end justify-between gap-6">
          <h2 className="max-w-[16ch] text-balance font-display text-5xl leading-[0.9] md:text-7xl">
            Nine ways we move you
          </h2>
          <p className="hidden text-sm uppercase tracking-[0.2em] text-brand/50 sm:block">Services</p>
        </div>
        <div className="grid gap-px overflow-hidden rounded-xl bg-white/10 ring-1 ring-white/10 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s) => (
            <div key={s.n} className="bg-white/5 p-7 backdrop-blur-md transition-colors hover:bg-accent/10">
              <span className="font-display text-2xl text-accent">{s.n}</span>
              <h3 className="mt-3 text-lg font-semibold">{s.title}</h3>
              <p className="mt-2 text-pretty text-sm text-brand/60">{s.text}</p>
            </div>
          ))}
        </div>
      </section>

      <Gallery />

      <section className="relative z-10 mx-auto max-w-7xl px-6 pb-24 lg:px-10">
        <div className="relative grid items-center gap-10 overflow-hidden rounded-xl bg-white/5 p-6 ring-1 ring-white/10 backdrop-blur-md md:grid-cols-[1.2fr_1fr] md:p-10">
          <div className="sheen pointer-events-none absolute inset-y-0 -left-1/3 w-1/3 skew-x-[-16deg] bg-white/10" />
          <div className="relative">
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-accent">Record label</p>
            <h2 className="mt-4 max-w-[20ch] text-balance font-display text-4xl leading-[0.95] md:text-6xl">
              Briseman Star Records
            </h2>
            <p className="mt-5 max-w-[46ch] text-pretty text-brand/70">
              A home for artists who need more than a handshake. We scout, develop and fund — then build the
              release around a real stage. Home of Brian J Official.
            </p>
            <div className="mt-7 flex flex-wrap gap-2">
              {["Talent scouting", "Creative direction", "Financial advances", "Global distribution"].map((t) => (
                <span key={t} className="rounded-full bg-white/10 px-4 py-1.5 text-xs font-medium text-brand/80 ring-1 ring-white/10">
                  {t}
                </span>
              ))}
            </div>
            <Link to="/contact" hash="demo" className="mt-7 inline-block text-sm font-semibold text-accent hover:text-brand">
              Artists: submit your demo →
            </Link>
          </div>
          <div className="relative">
            <img
              src={studio.url}
              alt="Briseman Star recording studio"
              loading="lazy"
              className="aspect-square w-full rounded-xl object-cover outline-1 -outline-offset-1 outline-white/10"
            />
          </div>
          <div className="relative md:col-span-2">
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.25em] text-brand/60">Now playing — Brian J Official</p>
            <iframe
              title="Brian J Official on Spotify"
              src="https://open.spotify.com/embed/artist/6dnG6QtqXrQxHWGqR0D1Zo?theme=0"
              width="100%"
              height="352"
              loading="lazy"
              allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
              className="rounded-xl border-0"
            />
          </div>
        </div>
      </section>

      <Faq />

      <section className="relative z-10 border-t border-border">
        <div className="relative mx-auto max-w-7xl px-6 py-24 text-center lg:px-10">
          <div className="pointer-events-none absolute left-1/2 top-0 h-64 w-[40rem] -translate-x-1/2 bg-accent/15 blur-[130px]" />
          <h2 className="relative mx-auto max-w-[16ch] text-balance font-display text-[clamp(3rem,9vw,8rem)] leading-[0.9]">
            Ready to take the stage?
          </h2>
          <p className="relative mx-auto mt-6 max-w-[44ch] text-pretty text-brand/60">
            Tell us the brief. We'll bring the lights.
          </p>
          <Link
            to="/contact"
            className="relative mt-8 inline-flex items-center gap-3 rounded-full bg-accent py-3 pl-3 pr-7 text-sm font-semibold text-accent-foreground ring-1 ring-accent transition-colors hover:bg-brand hover:text-ink hover:ring-brand"
          >
            <span className="grid size-6 place-items-center rounded-full bg-white/20">→</span>
            Contact us
          </Link>
        </div>
      </section>
    </div>
  );
}
