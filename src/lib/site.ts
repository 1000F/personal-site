import { fetchSubstackPosts } from "./substack";

export const SUBSTACK_PUBLICATION = "https://moreblood.substack.com";
export const SUBSTACK_HANDLE = "moreblood";

export const site = {
  name: "Adam O’Brien",
  title: "Strategy & Growth (Partnerships)",
  headline: "Writing on partnerships, momentum, and craft.",
  substackUrl: SUBSTACK_PUBLICATION,

  // Canonical domain (Vercel should redirect root → www)
  domain: "www.adamsobrien.com",

  about:
    "I’m Adam O’Brien. I do strategy & growth work. I write at More Blood — short notes on momentum, learning, and craft.",

  projects: [
    {
      name: "Staple",
      blurb: "A one‑tap habit tracker with a month grid + year heatmap.",
      bullets: [
        "Dark-mode first UI with a ‘drive’ aesthetic",
        "Reminders + streak logic + zero-noise check-ins",
      ],
      links: [
        { label: "TestFlight", href: "" },
        { label: "App Store", href: "" },
      ],
    },
    {
      name: "Personal site",
      blurb: "Fast personal site that pulls writing from RSS and ships as static HTML.",
      bullets: [
        "Astro static build, theme variants",
        "Deployed on Vercel with proper social previews",
      ],
      links: [
        { label: "Live", href: "https://www.adamsobrien.com" },
        { label: "GitHub", href: "https://github.com/1000f/personal-site" },
      ],
    },
    {
      name: "Automation / agents",
      blurb: "I use and build automation that actually ships work (not just demos).",
      bullets: [
        "App Store submission workflows, screenshot pipelines",
        "Operational checklists + tooling that reduces friction",
      ],
      links: [],
    },
  ],

  // Optional contact
  email: "adamsobrien@gmail.com",
  twitter: "",
};

export async function getPosts(limit = 12) {
  return fetchSubstackPosts({
    publicationUrl: SUBSTACK_PUBLICATION,
    handle: SUBSTACK_HANDLE,
    limit,
  });
}
