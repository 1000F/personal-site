# Design preview themes (alt directions)

These are **CSS-only** themes (same markup/content) with **routes**:
- `/drive`
- `/brutal`
- `/miami`

Also supported on the homepage via `/?theme=drive|brutal|miami|default`.

## 1) Drive — neo-noir / synthwave (edgy)
**Route:** `/drive`  
**Vibe:** *night city*, neon magenta/cyan, subtle scanlines, glowing edges.  
**Strengths:** distinctive, memorable, “this is an artist/experimenter” signal; still readable due to high-contrast ink.  
**Tradeoffs:** the strongest personality; could feel “styled” for people expecting pure PG simplicity.

Screenshot: `design-previews/drive.jpg`

## 2) Brutal — minimal / brutalist (edgy, utilitarian)
**Route:** `/brutal`  
**Vibe:** stark mono, thick borders, underline links, almost zine-like / raw HTML.  
**Strengths:** extremely fast + legible; feels serious and direct; great for writing-first.  
**Tradeoffs:** intentionally less “warm”; less decorative delight.

Screenshot: `design-previews/brutal.jpg`

## 3) Miami — glossy retro maximal (fun)
**Route:** `/miami`  
**Vibe:** pastel gradients, glossy/glass cards, sunset accents (Vice / poolside).  
**Strengths:** approachable + playful; keeps the original “Miami neon where it won’t hurt readability” premise.  
**Tradeoffs:** more visual energy; could be slightly less “academic” than PG.

Screenshot: `design-previews/miami.jpg`

## Implementation notes
- Themes are implemented by setting `data-theme` on `<html>` and overriding CSS variables in `src/styles/themes/*.css`.
- The Substack feed logic is unchanged (still pulled via `fetchSubstackPosts`).
- Build is static and passes.
