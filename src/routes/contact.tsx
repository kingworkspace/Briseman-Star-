import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact Us — Briseman Star" },
      {
        name: "description",
        content:
          "Get in touch with Briseman Star — Kansanga, Ggaba Road, Kampala. Call +256 705 104 557 or email semandabrian18@gmail.com.",
      },
      { property: "og:title", content: "Contact Us — Briseman Star" },
      {
        property: "og:description",
        content: "Reach Briseman Star in Kansanga, Kampala — events production and record label services.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Contact,
});

const channels = [
  { label: "Phone", value: "+256 705 104 557", href: "tel:+256705104557" },
  { label: "Phone", value: "+256 782 073 095", href: "tel:+256782073095" },
  { label: "Email", value: "semandabrian18@gmail.com", href: "mailto:semandabrian18@gmail.com" },
  { label: "Location", value: "Kansanga, Ggaba Road, Kampala", href: undefined },
];

const artistLinks = [
  { label: "Spotify", href: "https://open.spotify.com/artist/6dnG6QtqXrQxHWGqR0D1Zo" },
  { label: "Mdundo", href: "https://play.mdundo.com/artist/313314/Brian-J-Official" },
  { label: "YouTube", href: "https://www.youtube.com/@brianjofficialmusic" },
];

function Contact() {
  return (
    <div className="relative overflow-hidden">
      <div className="pointer-events-none absolute inset-0">
        <div className="spot absolute left-1/2 top-0 h-[30rem] w-[44rem] -translate-x-1/2 bg-accent/15 blur-[130px]" />
      </div>

      <section className="relative z-10 mx-auto max-w-7xl px-6 pb-24 pt-16 lg:px-10">
        <p className="rise text-sm font-semibold uppercase tracking-[0.3em] text-accent">Contact us</p>
        <h1 className="rise mt-4 max-w-[16ch] text-balance font-display text-[clamp(3rem,10vw,8rem)] leading-[0.9]">
          Ready to take the <span className="text-accent">stage?</span>
        </h1>
        <p className="rise mt-8 max-w-[48ch] text-pretty text-lg text-brand/70" style={{ animationDelay: ".15s" }}>
          Tell us the brief. We'll bring the lights.
        </p>

        <div className="mt-14 grid gap-px overflow-hidden rounded-xl bg-white/10 ring-1 ring-white/10 sm:grid-cols-2">
          {channels.map((c) => (
            <div key={c.value} className="bg-white/5 p-7 backdrop-blur-md transition-colors hover:bg-accent/10">
              <p className="text-xs font-semibold uppercase tracking-[0.25em] text-accent">{c.label}</p>
              {c.href ? (
                <a href={c.href} className="mt-3 block text-lg font-semibold transition-colors hover:text-accent">
                  {c.value}
                </a>
              ) : (
                <p className="mt-3 text-lg font-semibold">{c.value}</p>
              )}
            </div>
          ))}
        </div>

        <div className="mt-16 rounded-xl bg-white/5 p-7 ring-1 ring-white/10 backdrop-blur-md md:p-10">
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-accent">Signed artist</p>
          <h2 className="mt-4 font-display text-4xl leading-[0.95] md:text-5xl">Brian J Official</h2>
          <p className="mt-4 max-w-[52ch] text-pretty text-brand/70">
            The first artist on the Briseman Star Records roster. Stream the music:
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            {artistLinks.map((l) => (
              <a
                key={l.label}
                href={l.href}
                target="_blank"
                rel="noreferrer"
                className="rounded-full bg-white/10 px-5 py-2.5 text-sm font-medium text-brand/80 ring-1 ring-white/10 transition-colors hover:bg-accent hover:text-accent-foreground hover:ring-accent"
              >
                {l.label} ↗
              </a>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
