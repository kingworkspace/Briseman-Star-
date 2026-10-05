import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
  HeadContent,
  Scripts,
  type ErrorComponentProps,
} from "@tanstack/react-router";
import { useEffect, type ReactNode } from "react";

import appCss from "../styles.css?url";
import brisemanLogo from "../assets/briseman-star-logo.png.asset.json";
import { SupportChat } from "../components/SupportChat";
import { reportLovableError } from "../lib/lovable-error-reporting";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="font-display text-7xl text-foreground">404</h1>
        <h2 className="mt-4 text-xl font-semibold text-foreground">Page not found</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <div className="mt-6">
          <Link
            to="/"
            className="inline-flex items-center justify-center rounded-full bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground transition-colors hover:bg-brand hover:text-ink"
          >
            Go home
          </Link>
        </div>
      </div>
    </div>
  );
}

function ErrorComponent({ error, reset }: ErrorComponentProps) {
  console.error(error);
  const router = useRouter();
  useEffect(() => {
    reportLovableError(error, { boundary: "tanstack_root_error_component" });
  }, [error]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-xl font-semibold tracking-tight text-foreground">
          This page didn't load
        </h1>
        <p className="mt-2 text-sm text-muted-foreground">
          Something went wrong on our end. You can try refreshing or head back home.
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-2">
          <button
            onClick={() => {
              router.invalidate();
              reset();
            }}
            className="inline-flex items-center justify-center rounded-full bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Try again
          </button>
          <a
            href="/"
            className="inline-flex items-center justify-center rounded-full border border-input bg-background px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-secondary"
          >
            Go home
          </a>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "Briseman Star — Events Production & Record Label" },
      {
        name: "description",
        content:
          "Briseman Star is a cutting-edge digital and lifestyle agency in Kampala — events production, brand strategy, PR and record label services. We make your brand stand out.",
      },
      { property: "og:title", content: "Briseman Star — Events Production & Record Label" },
      {
        property: "og:description",
        content:
          "Events production, brand strategy, PR and record label services from Kampala. We make your brand stand out.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      { rel: "icon", type: "image/png", href: "/favicon.png" },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Anton&family=Manrope:wght@400;500;600;700;800&display=swap",
      },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function SiteHeader() {
  return (
    <header className="relative z-10 mx-auto flex max-w-7xl items-center justify-between px-6 py-6 lg:px-10">
      <Link to="/" className="flex items-center gap-2.5">
        <img
          src={brisemanLogo.url}
          alt="Briseman Star — Events & Records"
          className="h-16 w-auto md:h-[72px]"
        />
      </Link>
      <nav className="hidden items-center gap-8 text-sm font-medium text-brand/60 md:flex">
        <Link to="/" className="transition-colors hover:text-accent" activeProps={{ className: "text-brand" }}>
          Home
        </Link>
        <Link to="/about" className="transition-colors hover:text-brand" activeProps={{ className: "text-brand" }}>
          About us
        </Link>
        <Link to="/services" className="transition-colors hover:text-brand" activeProps={{ className: "text-brand" }}>
          Services
        </Link>
        <Link to="/contact" className="transition-colors hover:text-brand" activeProps={{ className: "text-brand" }}>
          Contact us
        </Link>
      </nav>
      <Link
        to="/contact"
        className="rounded-full bg-brand px-5 py-2 text-sm font-semibold text-ink ring-1 ring-brand/40 transition-colors hover:bg-accent hover:text-accent-foreground hover:ring-accent"
      >
        Start a project
      </Link>
    </header>
  );
}

function SiteFooter() {
  return (
    <footer className="relative z-10 mx-auto flex max-w-7xl flex-col justify-between gap-6 border-t border-border px-6 py-10 md:flex-row md:items-center lg:px-10">
      <div className="flex items-center gap-2.5">
        <img src={brisemanLogo.url} alt="Briseman Star — Events & Records" className="h-14 w-auto" />
      </div>
      <nav className="flex flex-wrap gap-6 text-sm text-brand/50">
        <Link to="/" className="transition-colors hover:text-brand">Home</Link>
        <Link to="/about" className="transition-colors hover:text-brand">About us</Link>
        <Link to="/services" className="transition-colors hover:text-brand">Services</Link>
        <Link to="/contact" className="transition-colors hover:text-brand">Contact us</Link>
      </nav>
      <p className="text-xs text-brand/40">© 2026 Briseman Star Events &amp; Records — Kansanga, Kampala</p>
    </footer>
  );
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();

  return (
    <QueryClientProvider client={queryClient}>
      <div className="min-h-screen bg-stage font-body text-brand">
        <SiteHeader />
        <Outlet />
        <SiteFooter />
        <SupportChat />
      </div>
    </QueryClientProvider>
  );
}
