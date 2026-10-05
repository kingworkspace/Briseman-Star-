import { createFileRoute, Link } from "@tanstack/react-router";
import workRunway from "@/assets/work-runway.jpg.asset.json";
import workGarden from "@/assets/work-garden.jpg.asset.json";
import workOutdoor from "@/assets/work-outdoor-stage.jpg.asset.json";
import studio from "@/assets/studio.jpg.asset.json";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Our Services — Briseman Star" },
      {
        name: "description",
        content:
          "Brand strategy, online media management, audio visual services, digital banners, decor & style, multimedia production, stage sets, PR and record label services.",
      },
      { property: "og:title", content: "Our Services — Briseman Star" },
      {
        property: "og:description",
        content: "Events production, branding, PR and record label services from Briseman Star.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Services,
});

const services = [
  { n: "01", title: "Brand Strategy", text: "Let's make your brand stand out." },
  { n: "02", title: "Online Media Management", text: "All your digital channels tailored to keep your audience updated." },
  { n: "03", title: "Audio Visual Services", text: "By harnessing the power of audio visual equipment, we create unforgettable environments through stimulating your attendees' senses." },
  { n: "04", title: "Digital Banners", text: "A colourful and engaging stage backdrop is a simple yet effective way of enhancing your branding, styling and overall event experience." },
  { n: "05", title: "Decor & Style", text: "A great way of delivering a message, promoting a product, enhancing the theme of an event or building recognition of a brand." },
  { n: "06", title: "Multimedia Production", text: "Our in-house team creates spectacular multimedia content, designed to engage and excite your audience." },
  { n: "07", title: "Production Stage Sets", text: "Stage set design can be the difference between a good event and a great one." },
];

const labelServices = [
  {
    title: "A&R & Artist Development",
    points: [
      "Talent scouting — discovering new acts through social media trends, streaming metrics and live performances.",
      "Creative direction — shaping the artist's visual identity, from album artwork to music video concepts and social media branding.",
    ],
  },
  {
    title: "Financial Advances & Funding",
    points: [
      "Upfront capital to fund the artist's living expenses and career.",
      "A fair recoupment structure — the advance functions as an interest-free loan, recouped from streaming and sales revenue.",
    ],
  },
  {
    title: "Music Production & Project Management",
    points: [
      "Studio access — we cover the logistical costs of recording, including booking high-end commercial studios.",
      "Creative collaborations with established producers, audio engineers, session musicians and mastering specialists.",
    ],
  },
  {
    title: "Global Distribution & Logistics",
    points: [
      "DSP delivery to Spotify, Apple Music, Amazon Music and more.",
      "Physical manufacturing — vinyl, CDs and merchandise, with shipping and inventory management.",
    ],
  },
  {
    title: "Marketing, PR & Promotion",
    points: [
      "Funded and coordinated advertising campaigns, billboard placements and press coverage.",
      "Playlist and radio pitching directly to influential DSP curators and commercial radio programmers.",
    ],
  },
  {
    title: "Legal Support & Rights Management",
    points: [
      "Copyright and licensing — metadata registration, IP protection and sample clearance.",
      "Sync licensing — pitching the catalog for placements in film, TV, games and commercials.",
    ],
  },
];

function Services() {
  return (
    <div className="relative overflow-hidden">
      <div className="pointer-events-none absolute inset-0">
        <div className="spot absolute -left-40 top-24 h-[36rem] w-[36rem] rounded-full bg-accent/15 blur-[150px]" />
      </div>

      <section className="relative z-10 mx-auto max-w-7xl px-6 pb-16 pt-16 lg:px-10">
        <p className="rise text-sm font-semibold uppercase tracking-[0.3em] text-accent">Our services</p>
        <h1 className="rise mt-4 max-w-[18ch] text-balance font-display text-[clamp(3rem,10vw,8rem)] leading-[0.9]">
          Everything your brand needs to <span className="text-accent">stand out</span>
        </h1>
      </section>

      <section className="relative z-10 mx-auto max-w-7xl px-6 pb-24 lg:px-10">
        <div className="grid gap-px overflow-hidden rounded-xl bg-white/10 ring-1 ring-white/10 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s) => (
            <div key={s.n} className="bg-white/5 p-7 backdrop-blur-md transition-colors hover:bg-accent/10">
              <span className="font-display text-2xl text-accent">{s.n}</span>
              <h3 className="mt-3 text-lg font-semibold">{s.title}</h3>
              <p className="mt-2 text-pretty text-sm text-brand/60">{s.text}</p>
            </div>
          ))}
          <div className="bg-accent/10 p-7 backdrop-blur-md sm:col-span-2">
            <span className="font-display text-2xl text-accent">08</span>
            <h3 className="mt-3 text-lg font-semibold">Public Relations Management</h3>
            <p className="mt-2 max-w-[70ch] text-pretty text-sm text-brand/70">
              PR shapes public perception — for individuals and businesses alike. Through greater media
              coverage, PR enhances credibility, raises brand awareness and encourages productive
              relationships with the relevant stakeholders. Whether you want greater brand awareness, higher
              sales, or to be seen as a thought leader in your industry, we tailor our efforts toward your
              goals and help you achieve them.
            </p>
          </div>
        </div>
      </section>

      <section className="relative z-10 border-t border-border">
        <div className="mx-auto max-w-7xl px-6 py-24 lg:px-10">
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-accent">Record label services</p>
          <h2 className="mt-4 max-w-[20ch] text-balance font-display text-4xl leading-[0.95] md:text-6xl">
            Briseman Star Records
          </h2>
          <p className="mt-5 max-w-[52ch] text-pretty text-brand/70">
            A home for artists who need more than a handshake — home of Brian J Official. We scout, develop,
            fund and release, then build the stage around it.
          </p>
          <div className="mt-12 grid gap-px overflow-hidden rounded-xl bg-white/10 ring-1 ring-white/10 md:grid-cols-2">
            {labelServices.map((s, i) => (
              <div key={s.title} className="bg-white/5 p-7 backdrop-blur-md">
                <span className="font-display text-2xl text-accent">{String(i + 1).padStart(2, "0")}</span>
                <h3 className="mt-3 text-lg font-semibold">{s.title}</h3>
                <ul className="mt-3 list-disc space-y-2 pl-5 text-sm text-brand/60">
                  {s.points.map((p) => (
                    <li key={p}>{p}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <div className="mt-10">
            <Link
              to="/contact"
              className="inline-flex items-center gap-3 rounded-full bg-accent py-3 pl-3 pr-7 text-sm font-semibold text-accent-foreground ring-1 ring-accent transition-colors hover:bg-brand hover:text-ink hover:ring-brand"
            >
              <span className="grid size-6 place-items-center rounded-full bg-white/20">→</span>
              Start a project
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
