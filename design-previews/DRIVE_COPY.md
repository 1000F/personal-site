# Drive / Neo‑Noir Copy + UI Notes

Tasteful, readable, *Drive*-adjacent energy: night air, sodium vapor, neon edges, calm confidence. No fake specifics; placeholders included.

---

## 1) Hero headline / tagline options (short)

Use as **site.headline** or as a two-line hero.

1. **Words in the rearview. Code in the headlights.**
2. **Writing, with a clean signal.**
3. **Quiet systems. Loud ideas.**
4. **Notes from the night shift.**
5. **Builds, drafts, and deliberate motion.**
6. **Neon‑lit clarity.**
7. **Essays and engineering, side by side.**
8. **Make it readable. Make it real.**
9. **Shipping, revising, repeating.**
10. **A calm place for sharp work.**

Optional “badge” / small label pairings:
- **DRIVE MODE** / **NOIR** / **NIGHT RUN** / **NEON** / **AFTER HOURS**

---

## 2) About section copy (3 variants)

Each version includes placeholders so you can drop in real details.

### A) Tight (2–3 sentences)

I’m **[TITLE/ROLE]** who writes about **[TOPICS—e.g., product, tools, systems, craft]** and builds **[TYPE OF THINGS]**. I care about **clarity, constraints, and shipping**—then revising.

**Highlights:** [HIGHLIGHT 1] · [HIGHLIGHT 2] · [HIGHLIGHT 3]

### B) Medium (a short paragraph)

I’m **[TITLE/ROLE]**—part writer, part builder. I like work that’s calm on the surface and rigorous underneath: **clear ideas, simple interfaces, reliable systems**. This site is where I keep the trail: drafts that became essays, notes that became tools, and the occasional teardown of something that *almost* works.

If you want the quick version: **[HIGHLIGHT 1]**, **[HIGHLIGHT 2]**, **[HIGHLIGHT 3]**.

### C) Poetic (still usable / not cringe)

Most things get better when you dim the noise.

I’m **[TITLE/ROLE]**. I write to find the clean line through messy problems, and I build to make that line usable. I’m drawn to **good constraints, sharp language, and tools that disappear**—the kind that feel like driving at night: focused, steady, inevitable.

**Currently:** [WHAT YOU’RE FOCUSED ON]

---

## 3) Palette + font pairing suggestions (CSS-ready)

### Palette (neo‑noir, accessible)

**Core**
- **Near‑black:** `#0B0D13` (background)
- **Ink:** `#101522` (cards)
- **Fog:** `#E6E9F2` (primary text)
- **Muted:** `#A9B1C6` (secondary text)

**Neon accents (use sparingly)**
- **Neon pink:** `#FF3EA5`
- **Electric blue:** `#32C5FF`
- **Amber (streetlight):** `#FFB020`

**Utility**
- **Border/line:** `rgba(230,233,242,0.12)`
- **Glow:** `rgba(255,62,165,0.22)` or `rgba(50,197,255,0.18)`

Suggested gradient (for tiny highlights only):
```css
--grad-neon: linear-gradient(90deg, #FF3EA5 0%, #32C5FF 55%, #FFB020 110%);
```

### Font pairings

#### Option 1: System-first (fast, crisp)
```css
--font-sans: ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto, Helvetica, Arial, "Apple Color Emoji", "Segoe UI Emoji";
--font-mono: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace;
```
Use **mono** for small labels, dates, nav microcopy; keep body in sans.

#### Option 2: Google Fonts (tasteful noir)
If you’re okay with loading Google Fonts:
- **Sans:** `Inter` or `IBM Plex Sans`
- **Mono:** `IBM Plex Mono` or `JetBrains Mono`

CSS:
```css
/* Google Fonts example: Inter + IBM Plex Mono */
--font-sans: "Inter", ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto, Helvetica, Arial;
--font-mono: "IBM Plex Mono", ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace;
```

#### Option 3: “Neo-noir editorial” (more writerly, still readable)
- **Sans (UI + body):** `Space Grotesk` (Google)
- **Mono (labels):** `JetBrains Mono`

Keep sizes conservative; let spacing and contrast do the mood.

---

## 4) Microcopy + hover/interaction ideas (small, classy)

### Microcopy
- Hero helper line: **“Start with the latest writing.”** / **“Browse the log.”**
- Writings empty/error state: **“The feed’s out for a minute. The archive is still open.”**
- About helper line: **“If you send a title + 2–3 highlights, I’ll tighten this.”** (already close to current)
- Contact: **“Short emails welcome. Clear subject lines appreciated.”**

### Hover / focus effects (subtle neon, accessible)

**1) Link underline that ‘turns on’**
```css
a {
  text-underline-offset: 0.18em;
  text-decoration-color: rgba(230,233,242,0.25);
  transition: text-decoration-color 160ms ease, color 160ms ease;
}
a:hover {
  text-decoration-color: rgba(255,62,165,0.75);
}
a:focus-visible {
  outline: 2px solid rgba(50,197,255,0.75);
  outline-offset: 3px;
}
```

**2) Card edge glow (only on hover-capable devices)**
```css
@media (hover: hover) {
  .card {
    border: 1px solid rgba(230,233,242,0.10);
    box-shadow: 0 10px 30px rgba(0,0,0,0.35);
    transition: box-shadow 180ms ease, border-color 180ms ease, transform 180ms ease;
  }
  .card:hover {
    border-color: rgba(255,62,165,0.28);
    box-shadow:
      0 14px 40px rgba(0,0,0,0.42),
      0 0 0 1px rgba(50,197,255,0.10),
      0 0 24px rgba(255,62,165,0.14);
    transform: translateY(-1px);
  }
}
```

**3) “Neon sweep” for badges (tiny + restrained)**
```css
.badge {
  background: rgba(16,21,34,0.65);
  border: 1px solid rgba(230,233,242,0.14);
}
@media (hover: hover) {
  .badge:hover {
    background: linear-gradient(90deg, rgba(255,62,165,0.18), rgba(50,197,255,0.16));
  }
}
```

**4) Reduce motion respect**
```css
@media (prefers-reduced-motion: reduce) {
  * { transition: none !important; scroll-behavior: auto !important; }
}
```

---

## Optional: favicon concept (Drive-adjacent, non-copyright)

A simple “night road” mark: two converging lane lines + a small sun glow. Clean geometry, no movie references.

If you want it theme-specific, point the Drive theme to `/favicon-drive.svg`.
