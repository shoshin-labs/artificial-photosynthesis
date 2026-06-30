# Made from Air — visual/design direction

## 1) Core direction

**Working theme:** `atmospheric industrial editorial`

The current site already has the right instinct: light, readable, slightly premium, with soft gradients and rounded cards. The redesign should keep the clarity but shift the overall feel from **"nice startup landing page"** to **"authoritative public index for a new industrial category."**

The best hybrid here is:

- **Stripe-like clarity** for sectioning, hierarchy, and the sense that complex subject matter can be made legible
- **Linear-like restraint** for density, spacing discipline, and interaction polish
- **Original Made from Air layer** built from atmospheric color, material cues, and quiet industrial details

The site should feel like:

- a modern editorial library
- a product-grade research interface
- a category-defining public reference, not a climate blog

## 2) What to change from the current system

### Keep
- Light overall theme
- Rounded surfaces
- Strong typography-first layout
- Pill navigation and compact CTAs
- Calm blue/teal atmosphere

### Shift
- Reduce the “general glass card” feeling; use it selectively, not everywhere
- Introduce a more **structured grid rhythm** so the library feels curated instead of stacked
- Make the hero feel more **category-defining** and less like a conventional SaaS intro
- Give cards more **data-library behavior**: metadata first, image second, clearer ranking and scanning affordances
- Add a sharper **type contrast** between editorial headline language and utilitarian metadata/UI

## 3) Visual identity system

## Palette

Use a cooler, more rarefied atmospheric base with one warm industrial accent. That warm note matters because otherwise the site risks feeling like generic climate-tech blue.

### Primary neutrals
- `--bg-0: #F7FAFD` — page ground
- `--bg-1: #F2F6FB` — section band
- `--panel: rgba(255,255,255,0.78)` — elevated translucent panel
- `--panel-solid: #FFFFFF` — reading surface
- `--line-soft: rgba(16,32,51,0.08)`
- `--line-strong: rgba(16,32,51,0.14)`
- `--text-1: #0F1D2E` — primary copy
- `--text-2: #4F6175` — secondary copy
- `--text-3: #7B8A9A` — tertiary/meta

### Atmosphere colors
- `--air: #5AA7FF` — oxygen / sky / signal blue
- `--teal: #5FD1C3` — chemistry / process / circulation
- `--cobalt: #315BFF` — interactive emphasis
- `--mint-glow: #B9FFE7` — soft highlight / chart or hover glow

### Warm industrial accent
- `--amber: #C97A2B` — category accent for tags, charts, highlighted metrics
- `--amber-soft: #F4E2CF`

### Usage rule
- Use **blue/cobalt for interface emphasis**
- Use **teal/mint for ambient gradients and process visuals**
- Use **amber sparingly** for category markers, “featured” content, or commercial-signal badges

This gives the site a distinct signature: **air + chemistry + industrial warmth**.

## 4) Type posture

The site needs two simultaneous voices:

1. **Editorial voice** for the headline story
2. **Operational voice** for metadata, categories, source labels, counts, and navigation

### Recommended pairing
- **Display / headline:** `Manrope`, `Söhne Breit` equivalent, or `General Sans` if staying open/free
- **UI / body:** `Inter`

If only one family is practical, use **Inter Tight for headings** and **Inter for body/UI**.

### Type rules
- Hero H1: large, tight, confident, but not oversized to the point of startup cliché
  - target: `clamp(3rem, 7vw, 6.5rem)`
  - line-height around `0.92–0.98`
  - tracking `-0.045em`
- Section H2s should feel editorial, not dashboard-y
  - `clamp(1.75rem, 3.6vw, 2.8rem)`
- Body should stay highly readable
  - `17–18px` equivalent on desktop
  - line-height `1.65–1.75`
- Metadata, pills, tags, counts:
  - slightly smaller
  - more tracking
  - use uppercase sparingly, mostly for source/type labels

### Tone rule
Avoid “soft friendly sustainability startup” typography. Favor **precise, calm, slightly technical** typography.

## 5) Layout rhythm

The redesign should move from mostly uniform cards to a **clear editorial rhythm**.

### Global container
- Increase max width slightly: `1180–1240px`
- Use a 12-column desktop grid
- Standard section padding should breathe more:
  - mobile: `56–72px`
  - desktop: `88–120px`

### Vertical rhythm
Use three section densities:
- **Hero density:** spacious and dramatic
- **Library density:** tighter, scannable, metadata-led
- **Explainer density:** medium, with longer reading line lengths

### Grid behavior
- Homepage should alternate between:
  - full-width statement band
  - 2-column editorial split
  - 3-card scan blocks
  - 1 featured + 2 secondary modules
- Library page should feel more like a publication index:
  - `featured story card` spanning 2 columns
  - then a repeatable 3-column card grid
  - audience rails as horizontal grouped modules

## 6) Homepage hero treatment

## Direction
The hero should feel like **a category cover page**, not just a pitch.

### Structure
**Left side:**
- Eyebrow: `The public library for carbon-made products`
- Large H1 with stronger conceptual framing
- One short paragraph max
- 2 primary actions, not 3

**Right side:**
Replace the generic summary card with a **live library panel** that looks like a blend of:
- table-of-contents
- signal monitor
- category map

### Recommended hero composition
A layered panel with 3 stacked bands:

1. **Now in the archive**
   - AirPlant One
   - Mercedes-Benz pilot
   - Product innovation survey
2. **What this tracks**
   - Fuels
   - Materials
   - Chemicals
   - Brand pilots
3. **Why it matters**
   - replaces fossil inputs
   - turns CO2 into feedstock
   - shows commercial traction

### Background treatment
Use a very subtle atmospheric field behind the hero:
- large radial blue haze top-left
- mint/teal field top-right
- thin grid/noise overlay at 2–4% opacity
- optional faint orbital lines or process arcs to imply circulation

This keeps the page premium without turning it into a sci-fi illustration.

### Stronger H1 options
Current H1 is solid but can be more ownable. Better directions:

- **The public library for products made from air.**
- **A living index of the carbon-made products category.**
- **Where the “made from air” category becomes legible.**

The first is strongest if the goal is memorability.

## 7) Card system

The site currently uses one card language for almost everything. That makes it clean, but not expressive enough. Split cards into **three roles**.

### A. Editorial cards
Use for homepage highlights and featured stories.

Specs:
- Larger padding
- Minimal border
- stronger headline
- optional gradient edge or top rule
- can support a small illustration or thumbnail

Visual cue:
- 1px border
- one soft inner highlight
- shadow only on hover/focus, not always heavy

### B. Library cards
Use for story entries on `library.html`.

Specs:
- metadata first
- source, date, type grouped in one row
- title second
- note third
- action last
- thumbnail optional and smaller, not dominant

Recommended structure:
- top row: source / kind / date
- title
- 2–3 line summary
- audience tags
- `Open source ↗`

Key change: the card should feel like a **catalog entry**, not a blog post tile.

### C. Index/stat cards
Use in hero panel and section transitions.

Specs:
- compact
- denser text
- subtle tinted background
- monospace or tabular numerals for counts

### Card styling direction
- Radius: `20–24px` for large surfaces, `16–18px` for content cards
- Border is more important than shadow
- Use shadow as a state change, not permanent decoration
- Introduce **top-edge highlight lines** or subtle gradient borders on featured items

## 8) Homepage section patterns

### Section 1: “Why this exists”
Instead of two equal callout cards, use:
- left: one strong editorial blockquote-style statement
- right: a stacked list of practical promises

Example structure:
- `Understand the category quickly`
- `See real products and pilots`
- `Follow commercial proof, not vague claims`

### Section 2: Featured signals
Replace the simple 4-up uniform grid with:
- 1 featured signal card
- 3 supporting cards beneath or beside it

This better communicates hierarchy.

### Section 3: Start here / audience routes
This is already strong conceptually. Make it more “tool-like”:
- give each audience path a distinct tint or icon marker
- include 2–3 micro tags in each card: `products`, `economics`, `coverage`, `supply`
- add estimated reading path: `4 links`, `6 links`, etc.

### Section 4: Market map
Use a more diagrammatic block instead of generic cards.
A 4-lane map could work:
- Feedstocks
- Conversion
- Outputs
- Buyers

Even if static, this makes the homepage feel like a knowledge object.

## 9) Library page direction

This page should become the clearest premium layer of the site.

## Library hero
Keep the copy concise, then add **filter-like affordances** visually, even if the first version is static.

Recommended hero substructure:
- mini stat strip
- category chips: `All`, `Fresh signals`, `Brand`, `Commercial`, `Press`, `Explainers`
- short note about curation rule

Even if chips only anchor-scroll at first, they give the page a product-grade framing.

## Grid behavior
- First card in each major section can be `featured`
- Remaining cards use tighter, more index-like layout
- Audience sections should feel grouped, with subtle background wash and stronger internal spacing

## Metadata treatment
Make metadata much more visible. Right now it exists, but it could do more work.

Suggested metadata row:
- source badge
- content type
- published date
- optional `fresh`, `official`, or `outside view` status

### Thumbnail guidance
On library cards, thumbnails should support recognition, not drive attention.
- reduce visual dominance
- consider `3:2` instead of `16:9` for some cards
- allow cards without thumbnails to look complete

## 10) Motion ideas

Motion should be **quiet, physically plausible, and low-frequency**.
Nothing bouncy.

### Good motion patterns
- Hero atmospheric gradient drifts extremely slowly
- Cards rise `1–2px` with border/emphasis shift on hover
- Staggered fade/slide for sections on first reveal
- Pills/chips get a subtle background bloom on hover
- Sticky nav compresses slightly on scroll

### Signature motion opportunity
A very subtle **flow-line animation** for the hero/library header could reference carbon moving through a system.
Think:
- faint dotted path
- barely animated horizontal drift
- masked so it feels infrastructural, not decorative

### Performance rule
All motion should degrade cleanly with `prefers-reduced-motion`. No motion should be required to understand the interface.

## 11) Interaction patterns worth adding

### A. Active section indication in sticky nav
As the user scrolls, the current section pill should gain:
- stronger fill
- darker text
- tiny inner glow or border emphasis

### B. “Featured / fresh / official” badges
A lightweight badge system will make scanning much faster.
Recommended badge set:
- `Fresh`
- `Official`
- `Press`
- `Brand signal`
- `Commercial signal`

### C. Copyable deep links on section headings
For a public library, this is very useful. On hover, show a small link icon beside section headings.

### D. Card hover preview
Without adding complexity, card hover can:
- slightly brighten thumbnail
- emphasize metadata row
- underline the outbound action

### E. Reading mode discipline
Keep line lengths narrow enough that the site still feels editorial, not app-like. Do not let body copy sprawl across wide cards.

## 12) Original signature elements

To avoid feeling like a Stripe/Linear remix, build in a few ownable motifs:

### Signature motif 1: atmospheric bands
Use soft gradient bands that feel like density layers in air rather than abstract blobs.

### Signature motif 2: process lines
Very thin connector lines, arcs, or segmented rules can hint at feedstock -> conversion -> output.
Use them between sections or inside featured modules.

### Signature motif 3: industrial warmth
Use amber sparingly where the category becomes tangible: materials, manufacturing, or commercial milestones.
This gives the site a more physical, less purely digital feel.

## 13) Concrete CSS/system recommendations

### Tokens to introduce
- `--max: 1200px`
- `--radius-lg: 24px`
- `--radius-md: 18px`
- `--shadow-sm: 0 8px 24px rgba(15, 29, 46, 0.06)`
- `--shadow-md: 0 18px 40px rgba(15, 29, 46, 0.08)`
- `--blur: 14px`
- `--grid-gap: clamp(16px, 2vw, 28px)`

### Surface strategy
Use only 3 surface modes:
1. `solid white reading surface`
2. `translucent elevated surface`
3. `tinted contextual surface`

Right now too many modules share nearly the same treatment. Distinguish them more intentionally.

### Border strategy
- Default: soft border
- Featured: gradient border or stronger top rule
- Hover/focus: darker border before stronger shadow

## 14) Implementation priority order

If redesign time is limited, do this in order:

1. **Refactor typography and spacing scale**
2. **Redesign homepage hero into a category cover + live archive panel**
3. **Split cards into editorial vs library vs stat types**
4. **Improve library metadata rows and badge system**
5. **Add subtle motion + active sticky-nav states**
6. **Introduce signature atmospheric/process visuals**

## 15) Quick page-by-page recommendation

### Homepage
Goal: convince a first-time visitor this is the canonical public entry point.

Needs:
- stronger hero
- clearer hierarchy in highlights
- more diagrammatic market-map treatment
- fewer equal-weight cards

### Library page
Goal: make exploration feel premium, fast, and trustworthy.

Needs:
- stronger metadata rows
- anchor/filter chip system
- featured entries
- tighter card density
- more obvious distinction between official signals and outside coverage

## 16) Bottom line

The most effective direction is **not** to make Made from Air look more futuristic. It should look more **inevitable, organized, and reference-worthy**.

That means:
- calmer and more structured than a startup marketing site
- more polished than a blog
- more human-readable than a dashboard
- visually atmospheric, but operationally precise

If implemented well, the result should feel like:
**the premium public index for a category that is just becoming real.**
