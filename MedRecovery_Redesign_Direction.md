# MedRecovery Solutions — Website Redesign Direction

**A modern, trust-first redesign brief**
Theme · Navigation · Layout · Animation · Tech · Pitch

Prepared as an unsolicited (spec) redesign proposal
Current site: medrecoverysolutions.com · Houston, Texas
Tagline preserved: *"Ensuring physicians get paid for the care they give."*™

---

## 01 — The opportunity (current state)

The current site is a stock Wix template for a Houston-based medical collections and billing agency with 10+ years of history. The bones of a strong business are all here — the presentation is what's dating it. The homepage is essentially one long block of text, the conversion path is weak, and the company's most persuasive assets are buried.

The goal of this redesign is not to reinvent the brand; it's to make a physician landing on the page think, within five seconds, **"this company is established, trustworthy, and technologically modern."**

### What's holding it back

- **Wall-of-text homepage** with no visual hierarchy or scannable structure.
- **Dated Wix-template look** that signals "small and old," not "established and modern."
- **Buried trust signals.** Equifax / Experian / Transworld membership, MGMA and the American Medical Billing Association, all-50-states coverage, and a **Baylor College of Medicine** testimonial are near-invisible.
- **Weak calls to action** — plain text links instead of a clear, repeated "Schedule consultation" path.
- **Bloated navigation** — nine items with "Services" and "Collection Services" competing for the same click.
- **No real mobile-first experience**, where most first impressions now happen.

### What we deliberately keep

A redesign should feel like an upgrade of *their* company, not a replacement of it. We preserve the brand identity and everything that already builds credibility:

- Company name, logo, and the trademarked tagline **"Ensuring physicians get paid for the care they give."**
- Blue as the primary brand color (modernized, not replaced).
- All real content and services — rewritten only for clarity and scannability.
- Every credential and affiliation — but promoted to a prominent, visual role.

---

## 02 — Design direction: the theme to go for

> **Recommended: light, trust-first "modern healthcare SaaS."**
> Near-white canvas, deep professional blue as the primary, one restrained teal/cyan accent, generous whitespace, soft shadows, and rounded corners. Think the calm confidence of Stripe, Linear, Mercury, and Ramp — adapted for healthcare, not copied from a hospital site.

This audience is buying **trust**. They hand you sensitive patient and financial data, so the site has to communicate three things fast: trust, healthcare expertise, and modern, secure technology. A clean, spacious, software-company aesthetic does that better than either a clinical hospital look or a flashy startup look.

### Why light, and not dark

Some references lean toward dark mode. For a trust-first medical-finance brand I'd stay **light-mode dominant**: a mostly-white site reads as transparent and open, which is exactly the feeling a collections partner needs to project. Use dark as an *accent* — one stats band or the footer — for contrast and punch, never as the overall theme.

### Two alternative directions (if you want to weigh them)

| Direction | Feel | Best when the buyers are… |
|---|---|---|
| **Modern SaaS** (recommended) | Clean, confident, software-like | Tech-forward clinics & larger groups; the safest, most impressive default |
| **Warm human healthcare** | Softer blues/greens, real people, approachable | Small independent practices who value the personal, partnership angle |
| **Editorial authority** | Serif headings, magazine-like, credential-heavy | Traditional practices persuaded by 25+ years of expertise and proof |

My pick is the SaaS direction, but the right call depends on whether their clients skew tech-forward clinics or traditional small practices. If unsure, the SaaS look is the strongest all-rounder and the most impressive as a spec piece.

---

## 03 — The visual system (colors, type & spacing)

### Color palette

Blue stays central for brand continuity; teal/cyan is the single accent, used sparingly for highlights and interactive states. The overall page should read as roughly 90% white space with intentional pops of color — not a heavily colored site.

| Swatch | Hex | Role |
|---|---|---|
| Primary blue | `#0B4F9F` | Brand primary, headings, primary buttons |
| Teal accent | `#14B8A6` | Highlights, interactive states, accents |
| Cyan highlight | `#6EE7F9` | Subtle glows, secondary accent |
| Dark section | `#08111F` | The one dark band (stats/footer) |
| Background | `#FAFBFD` | Page background |
| Cards | `#FFFFFF` | Card surfaces |
| Success | `#22C55E` | Positive states |
| Error / alert | `#EF4444` | Errors, alerts |

### Typography

| Role | Typeface | Notes |
|---|---|---|
| Headings | Plus Jakarta Sans (or General Sans) | Modern, confident, distinct from body — 48–72px hero sizes |
| Body | Inter | Highly legible at small sizes; the workhorse for paragraphs & UI |
| Numbers / stats | Space Grotesk | Gives KPIs and metrics a technical, dashboard-grade feel |

### Spacing, shape & depth

- **8px spacing system** throughout for consistent, calm rhythm.
- **16–24px border radii** on cards, inputs, and buttons — friendly but not bubbly.
- **Soft, low-contrast shadows** for depth; avoid heavy drop shadows.
- **Generous whitespace** and large type. Breathing room *is* the premium signal.
- **Accessibility-conscious contrast** — body text and interactive elements meet WCAG AA.

> **My POV on restraint:** For this brand, restraint reads as expensive. A collections agency asking doctors to trust it with patient financial data should **not** look like a crypto or gaming landing page. Limited color, lots of space, and one or two well-placed accents will out-perform a busy, over-designed page every time.

---

## 04 — Navigation & site structure (wayfinding)

> **On the sidebar question: use a sticky top nav, not a sidebar.**
> Sidebars are a **dashboard / app / docs** pattern (the left rail in Notion, Linear's product, admin panels). For a B2B *marketing* site whose visitors are physicians and practice managers, a sidebar feels unfamiliar and eats space on mobile. Every reference brand — Stripe, Vercel, Ramp — uses a **sticky top bar** for their marketing pages. The only place a sidebar belongs here is *inside* the decorative dashboard mockup, to make it look like software.

### Recommended top navigation

- **Items:** Home · Services · Our Approach · About · Resources · Contact.
- **A distinct CTA button on the right:** "Schedule Consultation" — styled and filled, not a plain link.
- **Sticky behavior:** stays pinned on scroll, gains a subtle blur/shadow and shrinks slightly.
- **Mobile:** collapses to a hamburger that opens a clean full-screen menu with the CTA repeated.

### Cleaning up the information architecture

The current menu has nine items with real redundancy. Consolidating to six clear choices (plus footer links) makes the site easier to navigate and improves conversion.

| Current (9 items) | Proposed home |
|---|---|
| Welcome | **Home** |
| Unique Approach | **Our Approach** |
| Services / Collection Services | **Services** (Collection Services becomes a sub-item) |
| Leadership | Folded into **About** |
| Testimonials | Featured on **Home** + **About** |
| Careers | Moved to the **footer** |
| Contact Us / Get Started | **Contact** + persistent CTA button |
| More… | Eliminated — nothing should hide behind "More" |

---

## 05 — The homepage, section by section (page anatomy)

A clear top-to-bottom narrative that takes a visitor from "who are you" to "book a call." Each section earns its place.

| Section | What it does |
|---|---|
| **Sticky navbar** | Glass-blur top bar, logo left, six links center/right, filled "Schedule Consultation" button. Shrinks on scroll. |
| **Hero** | Left: a bold headline (e.g. "Helping healthcare providers recover revenue faster"), one supporting line, and two CTAs ("Schedule Consultation" / "See Services"). Right: a tasteful animated analytics dashboard — floating KPI cards for clean-claim rate, collections, and revenue — signalling a technology-driven company instead of a stock doctor photo. |
| **Trust strip** | Immediately under the hero: Equifax, Experian, Transworld, MGMA, and AMBA marks, plus "Licensed in all 50 states." This is the single highest-impact change. |
| **Services grid** | A 3×2 grid of premium cards — Medical Billing, Revenue Cycle, Medical Coding, Patient Collections, Credentialing, Consulting — each with an icon, one-line description, subtle hover lift, and "Learn more." Replaces the current text blocks. |
| **Our approach / Why choose us** | Feature cards instead of bullet lists: HIPAA-focused workflows, experienced billing specialists, transparent reporting, faster reimbursements, dedicated account management, optimized revenue cycle. |
| **Process timeline** | A visual, scroll-animated line: Assessment → Onboarding → Claims Processing → Revenue Optimization → Ongoing Reporting. |
| **Stats band** | One dark, high-contrast section with count-up metrics: 10+ years, clean-claim rate, dollars recovered, providers served. The one place dark mode earns its keep. |
| **Testimonials** | The Baylor College of Medicine quote featured prominently with name and title, in a clean card carousel — promoted from buried text to a headline trust asset. |
| **Industries served** | Horizontally scrolling chips/cards: private clinics, hospitals, dental, behavioral health, urgent care, specialists, surgery centers. |
| **FAQ** | A smooth, minimal accordion covering onboarding, pricing model, compliance, and reporting — removes friction before the call. |
| **Contact** | Split layout: a short form on one side; phone, email, Houston address, and an embedded map on the other, with a strong final CTA. |
| **Footer** | One dark, organized footer: four columns of links, Careers, affiliations repeated, socials, and a newsletter signup. |

---

## 06 — Animation: my point of view (motion)

You're right that a little motion lifts the whole UI — I fully agree. The distinction that matters is **purposeful** motion versus **decorative** motion. Good animation guides the eye, confirms an action, and adds a sense of polish and life. Too much of it, on a medical-finance site, quietly undermines the trust you're trying to build. The rule I'd design by: **motion should make the page feel more considered, never more distracting.**

**Green-light — keep it**

- Fade / slide-in on scroll (subtle, short, once).
- Cards lifting gently on hover; soft glow on borders.
- Count-up animation on the stats numbers.
- Smooth momentum scrolling (Lenis) and animated section transitions.
- The hero dashboard's KPI cards floating slowly; charts drawing in on load.
- Button hover states and a filled-CTA micro-interaction.
- The process timeline line drawing itself as you scroll.

**Red-flag — avoid here**

- Heavy 3D scenes, particle fields, or spinning objects everywhere.
- Cursor-follow effects and magnetic buttons as a site-wide gimmick.
- Long, blocking intro animations before content appears.
- Motion that competes with the content or delays the CTA.
- Anything that reads as "gaming" or "crypto" rather than "healthcare."

**Two technical must-dos:** honor `prefers-reduced-motion` so users who disable animation get a calm, static site; and keep everything performant — animation should never cost you load speed, since a fast site is itself a trust signal. Reserve any real 3D for a single hero moment, if at all.

---

## 07 — Recommended tech stack (build)

A fast, responsive, maintainable stack that's easy to deploy and hand over — and a clear step up from the current Wix build.

| Layer | Choice | Why |
|---|---|---|
| Framework | Next.js + React | Fast, SEO-friendly, production-grade, easy to deploy |
| Styling | Tailwind CSS | Consistent design system; rapid, maintainable UI |
| Animation | Framer Motion | Declarative scroll/hover/enter animations — the workhorse |
| Advanced motion | GSAP (sparingly) | Only for a section or two that truly benefits |
| Smooth scroll | Lenis | Premium momentum scrolling feel |
| 3D (optional) | React Three Fiber | One tasteful hero element at most — keep it light |
| Icons | Lucide React | Clean, consistent, modern icon set |

**Migration note:** the current site is on Wix. Part of the pitch is that you can deploy this on a proper host (Vercel, or their own server) and migrate their content and domain — giving them a faster, fully owned site instead of a template locked into a builder.

---

## 08 — How to pitch it (outreach)

The framing matters as much as the work. Don't lead with "your site was bad, so I fixed it." Lead with initiative and respect — you admired the company and built something to show what's possible. That earns a reply and a demo instead of defensiveness.

> **Sample outreach message**
>
> "I came across MedRecovery Solutions and admired the work you do helping physicians get paid for the care they give. On my own initiative I built a modern redesign of your website — keeping your brand, content, and identity, but improving the user experience, mobile responsiveness, and visual presentation. If you're interested, I'd love to show you the live demo and talk through deploying it on your server and migrating your content."

### Why this works

- It's a **demonstration, not a promise** — far stronger than "I can redesign your site."
- It **respects their brand** by preserving identity, so it reads as an upgrade, not a critique.
- It positions you at **agency quality** — a polished, deployable site, not a rough concept.
- It opens a concrete next step: a demo and a deployment/migration conversation.

### Scope & suggested build order

To make it feel like a real agency project, redesign every page — not just the homepage — keeping all content and branding:

| Step | Deliverable |
|---|---|
| 1 | Homepage (hero, trust strip, services, stats, testimonial) — the showpiece for the pitch |
| 2 | Services + Collection Services, and Our Approach |
| 3 | About (with Leadership) and Testimonials |
| 4 | Contact, Careers, and the footer |
| 5 | Full responsive/mobile pass, animation polish, accessibility & performance check |
| 6 | Deploy the demo to a live URL to share in the pitch |

---

*Want me to build the homepage mockup next in this exact direction so you have a live piece to show? Just say the word and pick the theme (Modern SaaS recommended).*
