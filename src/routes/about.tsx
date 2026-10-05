import { createFileRoute, Link } from "@tanstack/react-router";
import artistImg from "@/assets/artist.jpg";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Us — Briseman Star" },
      {
        name: "description",
        content:
          "Briseman Star is a cutting-edge digital and lifestyle agency in Kampala with 15 years of digital experience across events, branding and music.",
      },
      { property: "og:title", content: "About Us — Briseman Star" },
      {
        property: "og:description",
        content: "15 years of digital experience across events, branding and music in Kampala.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: About,
});

const values = [
  { title: "Honesty", text: "We deliver quality with honesty and client satisfaction at the centre of every brief." },
  { title: "Data-driven", text: "It is our goal to deliver data-driven products to you, our customer." },
  { title: "Design-led", text: "We collectively focus on design that delivers exceptional content to different audiences." },
];

function About() {
  return (
    <div className="relative overflow-hidden">
      <div className="pointer-events-none absolute inset-0">
        <div className="spot absolute -right-40 top-0 h-[38rem] w-[38rem] rounded-full bg-accent/15 blur-[150px]" />
      </div>

      <section className="relative z-10 mx-auto max-w-7xl px-6 pb-20 pt-16 lg:px-10">
        <p className="rise text-sm font-semibold uppercase tracking-[0.3em] text-accent">About us</p>
        <h1 className="rise mt-4 max-w-[18ch] text-balance font-display text-[clamp(3rem,10vw,8rem)] leading-[0.9]">
          A stage-first studio from <span className="text-accent">Kampala</span>
        </h1>
        <p className="rise mt-8 max-w-[52ch] text-pretty text-lg text-brand/70" style={{ animationDelay: ".15s" }}>
          Briseman Star is a cutting-edge digital and lifestyle agency. For fifteen years we've produced
          events, built brands and developed artists — delivering quality with honesty and client
          satisfaction.
        </p>
      </section>

      <section className="relative z-10 mx-auto grid max-w-7xl items-center gap-12 px-6 pb-24 md:grid-cols-2 lg:px-10">
        <img
          src={artistImg}
          alt="Performer under a single spotlight"
          loading="lazy"
          width={1024}
          height={1024}
          className="aspect-square w-full rounded-xl object-cover outline-1 -outline-offset-1 outline-white/10"
        />
        <div>
          <p className="font-display text-[clamp(4rem,10vw,8rem)] leading-none text-accent">
            15<span className="text-brand/30">yrs</span>
          </p>
          <h2 className="mt-4 font-display text-4xl leading-[1.05] md:text-5xl">Of digital experience</h2>
          <p className="mt-5 max-w-[46ch] text-pretty text-brand/70">
            From warehouse gigs to full production stage sets, from brand strategy to a signed record label
            roster — we turn briefs into nights people can't stop talking about.
          </p>
          <div className="mt-10 space-y-6">
            {values.map((v) => (
              <div key={v.title} className="border-l-2 border-accent/60 pl-5">
                <h3 className="font-semibold">{v.title}</h3>
                <p className="mt-1 text-sm text-brand/60">{v.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="relative z-10 border-t border-border">
        <div className="mx-auto max-w-7xl px-6 py-20 text-center lg:px-10">
          <h2 className="mx-auto max-w-[16ch] text-balance font-display text-[clamp(2.5rem,7vw,5.5rem)] leading-[0.9]">
            Let's work together
          </h2>
          <Link
            to="/contact"
            className="mt-8 inline-flex items-center gap-3 rounded-full bg-accent py-3 pl-3 pr-7 text-sm font-semibold text-accent-foreground ring-1 ring-accent transition-colors hover:bg-brand hover:text-ink hover:ring-brand"
          >
            <span className="grid size-6 place-items-center rounded-full bg-white/20">→</span>
            Contact us
          </Link>
        </div>
      </section>
    </div>
  );
}
