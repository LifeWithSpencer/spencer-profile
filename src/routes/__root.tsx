import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
  HeadContent,
  Scripts,
} from "@tanstack/react-router";
import { useEffect, type ReactNode } from "react";

import appCss from "../styles.css?url";
import { reportLovableError } from "../lib/lovable-error-reporting";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-7xl font-bold text-foreground">404</h1>
        <h2 className="mt-4 text-xl font-semibold text-foreground">Page not found</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          The page you are looking for does not exist or has been moved.
        </p>
        <div className="mt-6">
          <Link
            to="/"
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Go home
          </Link>
        </div>
      </div>
    </div>
  );
}

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  console.error(error);
  const router = useRouter();
  useEffect(() => {
    reportLovableError(error, { boundary: "tanstack_root_error_component" });
  }, [error]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-xl font-semibold tracking-tight text-foreground">
          This page did not load
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
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Try again
          </button>
          <a
            href="/"
            className="inline-flex items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-accent"
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
      { title: "Asafa Mahfuz Abiodun (Spencer) — SOC & Network Analyst" },
      {
        name: "description",
        content:
          "Portfolio of Asafa Mahfuz Abiodun (Spencer). NOC Intern at Galaxy Backbone, SOC Analyst, and student leader specializing in blue team defense.",
      },
      { name: "author", content: "Asafa Mahfuz Abiodun" },
      {
        name: "keywords",
        content:
          "Asafa Mahfuz Abiodun, Spencer, SOC Analyst, Network Analyst, Cybersecurity, Galaxy Backbone, Blue Team, LAUTECH",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://mahfuzasafa.com" },
      { property: "og:title", content: "Asafa Mahfuz Abiodun (Spencer) — SOC & Network Analyst" },
      {
        property: "og:description",
        content:
          "Portfolio of Asafa Mahfuz Abiodun (Spencer). NOC Intern at Galaxy Backbone, SOC Analyst, and student leader specializing in blue team defense.",
      },
      { property: "og:image", content: "https://mahfuzasafa.com/personal.jpg" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:site", content: "@lifewithspencer" },
      { name: "twitter:title", content: "Asafa Mahfuz Abiodun (Spencer) — SOC & Network Analyst" },
      {
        name: "twitter:description",
        content:
          "Portfolio of Asafa Mahfuz Abiodun (Spencer). NOC Intern at Galaxy Backbone, SOC Analyst, and student leader specializing in blue team defense.",
      },
      { name: "twitter:image", content: "https://mahfuzasafa.com/personal.jpg" },
    ],
    links: [
      { rel: "canonical", href: "https://mahfuzasafa.com" },
      {
        rel: "icon",
        type: "image/png",
        href: "/favicon.png",
      },
      {
        rel: "shortcut icon",
        type: "image/png",
        href: "/favicon.png",
      },
      {
        rel: "stylesheet",
        href: appCss,
      },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&family=JetBrains+Mono:wght@400;500&display=swap",
      },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Person",
          name: "Asafa Mahfuz Abiodun",
          alternateName: "Spencer",
          url: "https://mahfuzasafa.com",
          image: "https://mahfuzasafa.com/personal.jpg",
          jobTitle: "SOC Analyst & Network Operations Trainee",
          worksFor: {
            "@type": "Organization",
            name: "Galaxy Backbone Ltd.",
          },
          sameAs: [
            "https://github.com/LifeWithSpencer",
            "https://www.linkedin.com/in/mahfuz-asafa-37832b292/",
            "https://x.com/lifewithspencer",
          ],
        }),
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

function RootComponent() {
  const { queryClient } = Route.useRouteContext();

  return (
    <QueryClientProvider client={queryClient}>
      {/* Required: nested routes render here. Removing <Outlet /> breaks all child routes. */}
      <Outlet />
    </QueryClientProvider>
  );
}
