# Landing Pages System — Operable Build Spec

Status: Active build specification  
Supersedes: the reverse-engineering profile of `landingpage`, `landingsyria`, `landing_algeria`, `mauritania`, `landing_morroco`, `landing_saudi`, and `landing_yemen`  
Primary use: generate and maintain additional market landing systems (home + partnership) from a single reusable system  
Motion library: **Anime.js only** (use it in an advanced manner, tuned timing, no expermintal ideas)

---

## 1) Objective

Build the next set of market landing systems from a **single configurable system** instead of cloning per-market codebases. Each market should default to a paired build: a player-facing home page and a business-facing partnership page.

This file is intentionally operational. It defines:
- what agents must build
- what can vary
- what must stay shared
- how pages are composed
- how motion is implemented with Anime.js
- what counts as done

The goal is to support at least **15 additional market systems** without creating new one-off architectures.

---

## 2) Product Decision

Use **one shared codebase** with:
- shared design tokens
- shared section components
- shared motion utilities
- shared content schema
- market theme presets
- locale and RTL support

Do **not** create a new project per country.

Do **not** fork existing page implementations unless a new reusable variant is being promoted into the system.

Operate inside the same main repository/directory while the system is being normalized. Experimental pages created by Codex may exist in that same working directory, may be tuned manually afterward, and may later be used as references — but they do not become source of truth until explicitly promoted into the shared system.

### Ownership model

The system is split into four non-overlapping ownership layers:

1. **Global system layer**  
   Owns tokens, motion presets, direction helpers, shared primitives, approved variants, and system vocabulary.

2. **Market layer**  
   Owns theme files, localized content, imagery choices, and allowed terminology overrides.

3. **Page layer**  
   Owns page purpose, section order, density, CTA emphasis, and the background system selected for that page.

4. **Section layer**  
   Owns rendering of supplied config only. A section does not invent its own market logic.

### Ownership rules

- Shared layout components own structure. Pages own composition. Themes own visual tokens. Content owns copy. These responsibilities must not bleed into one another.
- Global visual systems may not force page-specific styling. A shared primitive must be neutral by default and receive emphasis through tokens, props, or a section wrapper.
- Background systems belong to the page shell or layout wrapper, not to arbitrary child components, unless the approved variant explicitly defines a stage surface.
- A market-specific exception is not part of the system until it is normalized, named, and promoted back into shared config or shared variants.

---


## 3) System Principles

1. **Config over cloning**  
   Every new market page must be created from config, content, and approved section variants.

2. **Tokens over hardcoding**  
   Colors, spacing, radii, shadows, type, and motion timing must come from shared tokens.

3. **Variants over one-offs**  
   A market may choose an approved hero, benefits, paths, tools, and final CTA variant. New custom layouts are not allowed unless added back into the system as reusable variants.

4. **Content separate from layout**  
   Copy, stats, labels, and URLs belong in structured content files, not in components.

5. **Theme swap, not rewrite**  
   Market identity should mostly come from theme tokens, imagery, localized content, and chosen variants.

6. **RTL is a system feature**  
   RTL support must be handled by shared layout and spacing rules, not duplicate components.

7. **Anime.js only for motion**  
   Do not use Framer Motion for new landing pages in this system.

8. **Dual-page market model by default**  
   Every market should default to a player-facing home page and a business-facing partnership page unless explicitly scoped otherwise.

9. **Tight rhythm over airy spacing**  
   Section spacing should be kept to the minimum that preserves readability and hierarchy. Large decorative gaps between sections are discouraged.

10. **Visual identity must be market-specific**  
   A page may borrow skeleton, architecture, and approved variants from earlier work, but it must not feel like a visual clone of another market. Color, typography, surface treatment, imagery, and composition must establish a distinct market identity.

11. **References are inputs, not templates**  
   Existing pages — including experimental Codex-generated pages that are later tuned manually — may be used as references for structure or ideas, but new work should only inherit skeleton and reusable system behavior, not copy the exact look and feel.

12. **Neutral primitives before styling**  
   Shared buttons, cards, shells, and panels should begin visually neutral enough to serve more than one page intent.

13. **Page purpose drives presentation**  
   Home pages optimize energy, browsing, and discovery. Partnership pages optimize clarity, proof, and operational trust.

14. **Identity comes from coordinated axes**  
   Distinctiveness must come from multiple axes working together — typography, palette, background, surface mix, motion temperament, imagery, and density — not from color swaps alone.

15. **Information hierarchy is a system rule**  
   Each section should answer one primary question, add one new layer of proof, and hand off cleanly to the next section.

16. **Terminology is part of the system**  
   Role names, route names, CTA labels, and business labels must come from approved vocabulary, not ad hoc copy drift.

17. **Encoded rules over implied taste**  
   If a design decision keeps recurring, encode it into the system instead of relying on memory or review comments.

---


## 4) Supported Tech Assumptions

This spec assumes:
- Next.js
- React
- TypeScript
- Tailwind CSS
- Anime.js
- optional lightweight utilities for class composition and localization

If the implementation environment differs, preserve the same system structure.

---

## 5) Required Repository Shape

```text
/src
  /app
    /[market]
      /layout.tsx
      /page.tsx
      /partnership
        /page.tsx
  /components
    /layout
      Header.tsx
      Footer.tsx
      MarketPageShell.tsx
      SectionShell.tsx
      SectionHeader.tsx
    /ui
      Button.tsx
      StatCard.tsx
      SurfaceCard.tsx
      Eyebrow.tsx
      LanguageSwitch.tsx
      Metric.tsx
      Orb.tsx
      BrowserMockup.tsx
      PhoneMockup.tsx
    /sections
      /home
        HeroStageHome.tsx
        HomeFeaturedGrid.tsx
        HomeSportsShowcase.tsx
        HomeOffersGrid.tsx
        PlayerVisual.tsx
        PlayerStarRating.tsx
        types.ts
      /hero
        HeroSplit.tsx
        HeroCentered.tsx
        HeroTypographic.tsx
        HeroEditorial.tsx
      /benefits
        BenefitsGlassGrid.tsx
        BenefitsDashboard.tsx
        BenefitsLightShell.tsx
      /steps
        StepsThreeCol.tsx
        StepsTimeline.tsx
      /paths
        PathsDualCard.tsx
        PathsChoiceCards.tsx
        ModelsTabs.tsx
      /tools
        ToolsCalculator.tsx
        ToolsCarousel.tsx
        ToolsShowcase.tsx
      /final-cta
        FinalCtaPanel.tsx
        FinalCtaExpand.tsx
        FinalCtaDualCard.tsx
  /content
    /markets
      yemen.ts
      yemen-home-benchmark.ts
      tunisia.ts
      market-01.ts
      market-02.ts
    /system
      terminology.ts
  /config
    yemen.ts
    tunisia.ts
  /themes
    base.ts
    yemen.ts
    tunisia.ts
  /motion
    anime.ts
    presets.ts
    observers.ts
  /schemas
    landing.ts
    market-theme.ts
    market-content.ts
    terminology.ts
  /lib
    rtl.ts
    direction.ts
    layout-contract.ts
    locale.ts
    format.ts
/public
  /player
    /hero
    /games
    /sports
  /offer
  /messaging
```

### Repository intent

- `components/ui` should stay neutral and reusable.
- `components/sections/home` is allowed for richer player-facing patterns that should not leak into partnership pages.
- `components/sections` should express approved section variants only.
- `content/system/terminology.ts` is the shared vocabulary source for partner, agent, affiliate, and navigation labels that must stay consistent across markets.
- `content/markets/<market>-home-benchmark.ts` is the optional media-rich benchmark layer for player home pages.
- `lib/layout-contract.ts` and `lib/direction.ts` exist to prevent responsive and RTL behavior from being improvised inside section files.
- `MarketPageShell` resolves locale, direction, header/footer content, and route-aware page chrome.

### Naming and namespace rules

- Shared CSS should use page-intent namespaces for dense sections, for example `player-*`, `signal-*`, `calculator-*`, and `cta-*`.
- Home-specific styles may not reuse partnership-specific block names just because the shapes look similar.
- Namespace choice should reflect intent, not only appearance. This makes future extraction safer.

---

## 6) Canonical Market Deliverable Model

Every market should default to a **two-page system** unless the scope explicitly says otherwise:

1. **Home page** — player-facing
2. **Partnership page** — business-facing

Both pages must share the same market identity system:
- theme tokens
- background language
- typography family
- localization structure
- header/footer logic
- CTA language and trust cues

But both pages must also remain purposefully distinct in emphasis and browsing behavior.

### 6.1 Home page purpose
The home page is for players. It should attract attention, showcase what is currently hot, and route users toward registration, play, or product exploration.

The home page should usually include:
1. Header
2. Hero
3. Trending games
4. Trending sports
5. Optional offers or promos
6. Optional final player CTA
7. Footer

Rules for the home page:
- It should feel broader, faster, and more discoverable than the partnership page.
- It should explicitly support showcasing top trending games and top trending sports.
- It may be more dynamic in presentation, but must still stay readable and conversion-oriented.
- It must not read like a business-deck page.
- A dedicated final CTA is recommended, but may be omitted when the last home section already acts as the conversion close and the header CTA remains persistent.

### 6.2 Partnership page purpose
The partnership page is for agents, partners, and affiliate-partner recruitment. It should explain the opportunity, show tools and support, and convert business-side interest.

The partnership page must follow this sequence unless a market config explicitly disables an optional section.

```text
Header
Hero
Benefits or Why Us
Steps
Paths or Models
Tools or Calculator
Final CTA
Footer
```

Default order:
1. Header
2. Hero
3. Benefits
4. Steps
5. Paths or Models
6. Tools / Calculator / Showcase
7. Final CTA
8. Footer

Allowed omissions:
- `steps` may be omitted only if `models` is unusually deep and the market content is already self-explanatory
- `tools` may be omitted only for minimal pages
- `benefits` may not be omitted
- `hero` and `finalCta` may never be omitted

### 6.3 Shared rules across both pages
- Both pages must feel like they belong to the same market, but they must not look like duplicates.
- Section spacing should be intentionally tight; do not leave large dead zones between sections.
- The page skeleton may be inherited from earlier approved work, but the visual identity must be re-authored for each market.
- Home = player-facing discovery and trend surfacing.
- Partnership = partner/agent recruitment and operational conversion.

### 6.4 Page data layering
When a market uses a richer player-facing home page, split the content into two layers:

1. **Core home content**  
   Owns SEO, nav, hero promise, final CTA, footer, and lightweight section labels.

2. **Home benchmark content**  
   Owns media-heavy stage content, carousel items, featured game cards, sports showcase cards, live preview boards, and offer cards.

Rules:
- Benchmark content is optional. Use it only when the home page genuinely needs richer discovery patterns.
- Benchmark content is still structured content, not JSX.
- The benchmark layer may be more editorial and media-led than the partnership layer, but it must still stay localized and route-aware.
- Do not force partnership pages to use benchmark-style content structures.

### 6.5 Deep-link navigation model
A mature market page pair should expose one shared information architecture in navigation and footer:
- home anchors such as `#top`, `#games`, `#sports`, `#offers`
- partnership anchors such as `#top`, `#benefits`, `#steps`, `#paths`, `#tools`, `#final-cta`

Rules:
- Header and footer links must map to real rendered sections.
- Home and partnership links may coexist inside one dropdown or grouped nav item.
- Locale switching must preserve path intent and anchor intent whenever possible.

---

## 7) Approved Theme Families

These replace market-by-market freeform styling.

### `gold-classic`
Use when the market needs the canonical gold-on-dark partnership look.
- base background: near-black
- primary accent: gold
- surfaces: dark frosted glass
- best with `hero-split` or `hero-centered`

### `green-depth`
Use for markets that follow the Syria / Algeria / Mauritania family.
- base background: deep black-green
- primary accent: green
- optional secondary accent: local red or yellow
- background includes depth glows and vertical shafts
- best with `hero-centered` or `hero-split`

### `editorial-premium`
Use for markets that need typographic boldness.
- base background: black or graphite
- primary accent: local brand color
- oversized headings
- light contrast cards allowed
- best with `hero-editorial`

### `saudi-premium`
Use for premium regulated-market styling.
- base background: dark green-black
- primary accent: amber or gold
- secondary accent: deep green
- cleaner, denser layouts
- best with `hero-typographic`, `models-tabs`, `tools-carousel`

### `red-green-national`
Use for flag-driven identity pages.
- primary accent: strong red
- secondary accent: green
- background remains dark
- best with restrained visual components to avoid visual overload

### Identity axis rule

Every market must establish its identity through a coordinated mix of at least **four** of the following axes:
- palette behavior
- typography posture
- background character
- dominant surface family
- motion temperament
- imagery direction
- density profile

Rules:
- Changing color alone is not enough to claim a unique market identity.
- Two markets should not ship with the same theme family, background variant, hero variant, and surface strategy unless one is intentionally derivative.
- Home and partnership pages in the same market should share some axes and intentionally diverge on others.

---


## 8) Canonical Design Tokens

All themes must extend the same base token schema.

```ts
export type ThemeTokens = {
  color: {
    bg: string
    bgTop: string
    foreground: string
    foregroundSoft: string
    primary: string
    primarySoft: string
    primaryStrong: string
    secondary?: string
    surface: string
    surfaceStrong: string
    surfaceAccent: string
    borderSoft: string
    borderStrong: string
    gridLine: string
    glow: string
    success?: string
    danger?: string
  }
  type: {
    display: string
    heading: string
    subheading: string
    cardTitle: string
    bodyLg: string
    body: string
    label: string
    meta: string
    metric: string
    metricSecondary: string
    stat: string
  }
  radius: {
    sm: string
    md: string
    lg: string
    xl: string
    pill: string
  }
  space: {
    sectionY: string
    sectionYMobile: string
    containerX: string
    cardPadding: string
    gridGap: string
  }
  shadow: {
    soft: string
    card: string
    hero: string
    glow: string
  }
  motion: {
    durationFast: number
    durationBase: number
    durationSlow: number
    durationLoop: number
    easingStandard: string
    easingEntrance: string
    easingEmphasis: string
  }
}
```

### Required token rules

- No raw hex values inside section components unless the value is coming from the active theme file.
- No raw spacing values inside section components unless mapped from spacing tokens or Tailwind utilities defined by design tokens.
- The same radius scale must be used across all markets.
- Motion timing must use the shared motion token set.

---

## 9) Standard Surface Vocabulary

All pages use only these surface types.

### `surface-glass`
Dark frosted card.
- dark translucent gradient
- light soft border
- inset highlight
- heavy dark shadow
- radius `lg` or `xl`

### `surface-accent`
Dark card with accent tint.
- tinted by `primary`
- stronger border accent
- used for emphasis blocks and active states

### `surface-light`
White or near-white contrast card.
- used sparingly
- allowed mainly in editorial and premium pages
- must preserve text contrast and brand tone

### `surface-stage`
High-focus container for hero visuals, calculators, dashboards, and model tabs.
- may use grid overlays, glow orbs, browser frames, phone mockups
- must still inherit theme tokens

### `surface-media`
Media-led card for player discovery sections.
- built for image-backed or illustration-backed cards
- may combine gradient overlays with foreground copy
- must still inherit tokenized border, radius, and shadow behavior
- image treatment must be intentional: `object-cover` for immersive category cards, `object-contain` for product or offer art

### Surface rules
- A page should have one dominant surface family and at most one supporting family, plus `surface-stage` when needed.
- `surface-light` is an accent strategy, not a default page mode.
- CTA panels and proof panels should feel related. Do not mix unrelated materials inside the same viewport cluster.
- Surface contrast should increase hierarchy, not create random attention spikes.
- Do not invent additional card families unless the system is updated.

---


## 10) Typography Standard

Use a unified scale with market-specific emphasis through weight and tracking, not ad hoc size rewrites.

### Required type roles
- `display`
- `heading`
- `subheading`
- `cardTitle`
- `bodyLg`
- `body`
- `label`
- `meta`
- `metric`
- `metricSecondary`
- `stat`

### Rules
- Hero line-height: `0.94` to `1.02`
- Heading line-height: `1.05` to `1.12`
- Body line-height: `1.6` to `1.8`
- Eyebrows are uppercase, compact, and letter-spaced
- Metrics and numbers always render with `dir="ltr"`
- Arabic pages may change alignment and order, but not the token scale itself

### Eyebrow component standard

Use one shared component with theme-driven divider style.

Supported eyebrow styles:
- `eyebrow-divider`
- `eyebrow-pill`
- `eyebrow-text-only`

Do not build market-specific eyebrow JSX by hand.

---

## 11) Background Variants

Only these background systems are allowed.

### `bg-spotlight`
Derived from the canonical gold page.
- layered radial glows
- subtle grid
- optional pointer spotlight reveal
- use sparingly on high-impact pages

### `bg-depth`
Derived from Syria / Algeria / Mauritania.
- base tint gradient
- corner glows
- vertical shafts
- low-opacity perspective plane

### `bg-grid-minimal`
Used when typography or product content should dominate.
- radial body glows
- static or slow-moving grid
- no heavy pointer effects

### `bg-premium-minimal`
Used for premium pages.
- low-noise body gradients
- restrained corner glow
- optional fixed grid mask

### Rules
- Background systems must be selected by page config, not implied globally for the whole market.
- A page may use one main background variant only.
- Interactive pointer-based backgrounds are not allowed on low-end or mobile-first market configs unless performance budget is explicitly approved.
- Background ownership belongs to the page shell, not to ad hoc section wrappers.
- `bg-premium-minimal` may include a restrained wash, a fixed grid mask, and one or two side glows, but it must still stay low-noise enough for dense editorial layouts.

---

## 12) Approved Section Variants

Each market page must assemble from this catalog.

### Home page variants

#### Home hero variants

##### `home-hero-stage`
Stage-led hero with editorial copy, a focused CTA row, and a media-rich carousel or spotlight area.
Use for stronger player pages where discovery and imagery matter.

##### `home-hero-centered`
Centered player hero with simpler media and lighter supporting proof.
Use for leaner home pages.

#### Home discovery variants

##### `home-featured-grid`
Featured game cards with one lead card and supporting cards.
Use when game discovery is a major conversion driver.

##### `home-sports-showcase`
Large sports category cards or a sports board with editorial emphasis.
Use when sports need stronger visual priority than standard icon grids.

##### `home-offers-grid`
Offer cards with media, bullets, and clean CTA actions.
Preferred over banner stacks.

### Partnership page variants

#### Hero variants

##### `hero-split`
Text on one side, visual or stage on the other.
Use for canonical partner pages.

##### `hero-centered`
Centered panel with headline, CTA, and stat cards.
Use for focused conversion pages.

##### `hero-typographic`
Text-led hero with minimal media and strong stats.
Use for premium and mature markets.

##### `hero-editorial`
Oversized typographic hero, optional phone mockup or stage.
Use for markets where brand boldness matters more than dashboard density.

### Benefits variants

#### `benefits-glass-grid`
3–6 cards in a glass surface grid.

#### `benefits-dashboard`
Dashboard shell with stats, metrics, progress bars, or fake browser frame.

#### `benefits-light-shell`
Light contrast cards on dark page for editorial premium markets.

### Steps variants

#### `steps-three-col`
Three clear numbered cards.
Default.

#### `steps-timeline`
Vertical or horizontal ordered journey.
Use when the process needs more narrative continuity.

### Paths / Models variants

#### `paths-dual-card`
Two large choice cards for agent vs partner.

#### `paths-choice-cards`
Large split cards with stronger visual identity.

#### `models-tabs`
Tabbed browser or tablet mockup with model comparison.
Use only where model explanation is a selling point.

### Tools variants

#### `tools-calculator`
Interactive estimator.
Use only when calculation genuinely improves conversion.

#### `tools-carousel`
Scroll-linked or paginated showcase of offers, tools, or workflows.
Use only on premium pages and only if content volume justifies it.

#### `tools-showcase`
Static or lightly animated app / product showcase.
Preferred default over complex horizontal scroll.

### Final CTA variants

#### `final-cta-panel`
Simple conversion panel with one or two buttons.

#### `final-cta-expand`
Expandable contact buttons.
Use when messaging apps are the core CTA.

#### `final-cta-dual-card`
Two destination cards for distinct actions or audiences.

### Footer variants

#### `footer-minimal`
Brand + small links + copyright.

#### `footer-full`
Brand block, nav links, contact methods, and legal lines.

### Variant use rules
- Home and partnership pages may not be driven by one shared section map when their structures differ materially.
- Home variants may be richer in imagery, but must still stay content-driven.
- Partnership variants carry the heavier proof burden and should avoid player-home theatrics.

---

## 13) Section Contract

Each section component must receive typed config only.

```ts
export type HomeSectionVariantMap = {
  hero: 'home-hero-stage' | 'home-hero-centered'
  trendingGames: 'home-featured-grid'
  trendingSports: 'home-sports-showcase'
  offers?: 'home-offers-grid'
  finalCta?: 'final-cta-panel' | 'final-cta-dual-card'
  footer: 'footer-minimal' | 'footer-full'
}

export type PartnershipSectionVariantMap = {
  hero: 'hero-split' | 'hero-centered' | 'hero-typographic' | 'hero-editorial'
  benefits: 'benefits-glass-grid' | 'benefits-dashboard' | 'benefits-light-shell'
  steps?: 'steps-three-col' | 'steps-timeline'
  paths?: 'paths-dual-card' | 'paths-choice-cards'
  models?: 'models-tabs'
  tools?: 'tools-calculator' | 'tools-carousel' | 'tools-showcase'
  finalCta: 'final-cta-panel' | 'final-cta-expand' | 'final-cta-dual-card'
  footer: 'footer-minimal' | 'footer-full'
}
```

Each section must support:
- locale text
- RTL mode
- theme tokens
- reduced motion mode
- optional stat items
- analytics hooks
- width-contract compliance on mobile collapse

### Section contract rules
- Home sections may be more media-led, but they must still read from structured content.
- Partnership sections may use stronger proof surfaces, but they may not invent player-home affordances without explicit design intent.
- Section files may not decide market vocabulary on their own.

---

## 14) Market Config Schema

Every market is created from one config object with **page-specific profiles**.

```ts
export type LocaleDefinition = {
  code: 'en' | 'ar' | 'fr'
  direction: 'ltr' | 'rtl'
}

export type PageComposition = {
  density: 'compact' | 'balanced' | 'editorial'
  textMeasure: 'sm' | 'md' | 'lg'
  surfaceMode: 'glass-dominant' | 'accent-led' | 'light-contrast' | 'restrained-mix'
  motionProfile: 'subtle' | 'standard' | 'showcase'
}

export type HomePageProfile = {
  backgroundVariant: 'bg-spotlight' | 'bg-depth' | 'bg-grid-minimal' | 'bg-premium-minimal'
  composition: PageComposition
  sections: HomeSectionVariantMap
  flags?: {
    showLanguageSwitch?: boolean
    enableCountUp?: boolean
    enableHeroAutoRotate?: boolean
    enableHeroGlow?: boolean
  }
}

export type PartnershipPageProfile = {
  backgroundVariant: 'bg-spotlight' | 'bg-depth' | 'bg-grid-minimal' | 'bg-premium-minimal'
  composition: PageComposition
  sections: PartnershipSectionVariantMap
  flags?: {
    showLanguageSwitch?: boolean
    showHeroStage?: boolean
    showPhoneMockup?: boolean
    showDashboardShell?: boolean
    enablePointerBackground?: boolean
    enableCountUp?: boolean
    enableScrollScenes?: boolean
  }
}

export type MarketBuildConfig = {
  market: string
  slug: string
  locales: LocaleDefinition[]
  defaultLocale: 'en' | 'ar' | 'fr'
  themeFamily:
    | 'gold-classic'
    | 'green-depth'
    | 'editorial-premium'
    | 'saudi-premium'
    | 'red-green-national'
  themeFile: string
  pages: {
    home: HomePageProfile
    partnership: PartnershipPageProfile
  }
}
```

### Rules
- Every new market must define a config before implementation starts.
- Home and partnership pages must have separate section maps and may have separate background variants and composition profiles.
- Direction must be resolved from the active locale at runtime. Do not treat direction as a single immutable market property when multiple locales are supported.
- `enableHeroAutoRotate` is off by default and should only be enabled when there is meaningful stage content to rotate through.
- `enableScrollScenes` should remain `false` by default.
- `hero-editorial` may not be combined with `benefits-dashboard` unless design signoff exists.

---

## 15) Content Schema

All copy and data must come from structured content.

```ts
export type LinkItem = {
  label: string
  href: string
  children?: LinkItem[]
}

export type BrandInfo = {
  eyebrow: string
  title: string
  href?: string
  logoSrc?: string
  logoAlt?: string
}

export type StatItem = {
  label: string
  value: string
  note?: string
  numericValue?: number
  prefix?: string
  suffix?: string
}

export type HeroStageContent = {
  eyebrow?: string
  title: string
  badge?: string
  metrics?: StatItem[]
  lanes?: Array<{ label: string; value: number; note?: string }>
  note?: string
}

export type PartnershipContent = {
  seo: {
    title: string
    description: string
  }
  nav: {
    brand: BrandInfo
    items: LinkItem[]
    primaryCta: LinkItem
  }
  lexicon?: {
    partnerLabel?: string
    agentLabel?: string
    affiliateLabel?: string
    contactLabel?: string
  }
  hero: {
    eyebrow: string
    title: string
    highlightedWords?: string[]
    body: string
    primaryCta: LinkItem
    secondaryCta?: LinkItem
    stats?: StatItem[]
    stage?: HeroStageContent
  }
  benefits: {
    eyebrow?: string
    title: string
    body?: string
    items: Array<{ title: string; body: string; icon?: string }>
  }
  steps?: {
    eyebrow?: string
    title: string
    body?: string
    items: Array<{ step: string; title: string; body: string }>
  }
  paths?: {
    eyebrow?: string
    title: string
    body?: string
    items: Array<{
      type: 'agent' | 'partner' | 'custom'
      eyebrow?: string
      title: string
      body: string
      bullets: string[]
      primaryCta?: LinkItem
      secondaryCta?: LinkItem
    }>
  }
  tools?: {
    eyebrow?: string
    title: string
    body?: string
    stats?: StatItem[]
    panel?: {
      eyebrow?: string
      title: string
      badge?: string
      summaryItems?: Array<{ label: string; value: string }>
    }
    calculator?: {
      roleOptions: string[]
      inputs: Array<{
        key: string
        label: string
        min: number
        max: number
        step: number
        defaultValue: number
        prefix?: string
        suffix?: string
      }>
      outputs: Array<{ key: string; label: string; prefix?: string; suffix?: string; decimals?: number }>
      note?: string
      helperItems?: string[]
    }
  }
  finalCta: {
    eyebrow?: string
    title: string
    body: string
    helperText?: string
    primary: LinkItem
    secondary?: LinkItem
  }
  footer: {
    brand: string
    body?: string
    homeLabel?: string
    homeLinks?: LinkItem[]
    partnershipLabel?: string
    partnershipLinks?: LinkItem[]
    contactLabel?: string
    contactLinks?: LinkItem[]
    legal?: string
  }
}

export type PlayerHomeContent = {
  seo: {
    title: string
    description: string
  }
  nav: {
    brand: BrandInfo
    items: LinkItem[]
    primaryCta: LinkItem
  }
  hero: {
    eyebrow: string
    title: string
    highlightedWords?: string[]
    body: string
    primaryCta: LinkItem
    secondaryCta?: LinkItem
    stats?: StatItem[]
    highlights?: string[]
    spotlight?: {
      eyebrow?: string
      title: string
      badge?: string
      items: Array<{ title: string; value: string; note?: string; tone?: 'accent' | 'glass' }>
    }
  }
  trendingGames: {
    eyebrow?: string
    title: string
    body?: string
    items: Array<{ title: string; body?: string; eyebrow?: string; badge?: string; metrics?: string[] }>
  }
  trendingSports: {
    eyebrow?: string
    title: string
    body?: string
    items: Array<{ title: string; body?: string; badge?: string; tags: string[] }>
  }
  promos?: {
    eyebrow?: string
    title: string
    body?: string
    items: Array<{ title: string; body?: string; badge?: string; tags: string[] }>
  }
  finalCta?: {
    eyebrow?: string
    title: string
    body: string
    primary: LinkItem
    secondary?: LinkItem
  }
  footer: PartnershipContent['footer']
}

export type PlayerHomeBenchmarkContent = {
  heroStage: {
    lead?: {
      eyebrow: string
      title: string
      highlightedWords?: string[]
      body: string
      highlights?: string[]
    }
    eyebrow?: string
    title: string
    body: string
    carousel: Array<{
      id: string
      title: string
      badge?: string
      description: string
      highlights?: string[]
      rating: number
      reviewLabel: string
      details: Array<{ label: string; value: string }>
      href: string
      ctaLabel?: string
      visual: {
        kind: 'icon' | 'image'
        icon?: string
        src?: string
        alt?: string
        theme?: string
        label?: string
      }
    }>
  }
  trendingGames: {
    eyebrow?: string
    title: string
    body?: string
    featured: Array<unknown>
    secondaryFeatured?: Array<unknown>
    categories?: Array<unknown>
  }
  trendingSports: {
    eyebrow?: string
    title: string
    body?: string
    liveBoard?: unknown
    categoriesEyebrow?: string
    categoriesTitle?: string
    categories: Array<unknown>
  }
  offers?: {
    eyebrow?: string
    title: string
    body?: string
    cards: Array<unknown>
  }
}
```

### Content rules
- Do not place strings directly into components.
- Contact methods must be content-driven.
- Number formatting must be centralized.
- Localized assets must be referenced from content or market config, not embedded in JSX.
- Home benchmark content may be richer in media, but it still must be localized, route-aware, and typed.

### 15.1 Benchmark layer rule
- Use `PlayerHomeContent` for the stable shell of the player page.
- Use `PlayerHomeBenchmarkContent` only for richer discovery modules.
- Do not collapse both layers into one oversized content object when the home page becomes media-heavy.

### 15.2 Asset taxonomy rule
When a market uses a richer home page, keep asset placement predictable:
- `/public/player/hero` for hero-stage art
- `/public/player/games` for game thumbnails and discovery cards
- `/public/player/sports` for sports category art
- `/public/offer` for offer/promo art
- `/public/logo.svg` for shared brand mark usage
- `/public/messaging` or equivalent for CTA platform icons

---

## 16) Header Standard

Use one shared header component with variant styling from tokens.

Required support:
- brand mark
- nav items
- language switcher
- sticky mode
- blur/glass mode
- mobile collapse
- RTL order handling

### Header rules
- Keep header height consistent across markets.
- Use icon-only nav only if the market config explicitly requests it.
- Language switcher must be shared and token-driven.
- The header must support grouped items with child links for home and partnership deep links.
- Do not hardcode `dir="ltr"` on full page layout. Only use LTR where required for number display or switch mechanics.
- Mobile navigation must support expandable submenus without duplicating the desktop navigation data shape.

### Navigation and overlay rules
- Dropdowns, drawers, sticky states, and hero overlays must align to one shared spatial system.
- Overlay origins must anchor to the header container or the triggering element, never to arbitrary viewport coordinates.
- Z-index ordering for header, dropdown, hero stage, and mobile menu must be defined once and reused.
- On RTL pages, overlay origin, chevron direction, and drawer entrance direction must switch compositionally through direction helpers.
- Navigation interactions should feel attached to the page shell, not like floating UI from another product.

---


## 17) CTA Rules

CTA patterns must be normalized.

### Primary CTA
- high emphasis
- uses theme primary token
- pill or rounded-lg only

### Secondary CTA
- ghost or soft surface button
- must not visually compete with primary CTA

### Contact CTA
- may support Telegram, WhatsApp, phone, or form
- expanding CTAs are allowed only through the shared `final-cta-expand` variant

### Rules
- No market-specific CTA shapes beyond the approved variants.
- Use one button component with `intent` and `size` props.
- Hover behavior must come from shared motion utilities.

---

## 18) RTL and Locale Rules

RTL must be systemic.

### Required behavior
- route shell `dir` reflects the active locale direction at runtime
- text alignment flips by utility or shared helper
- icon spacing and chevrons reverse where appropriate
- grids may reorder through layout helpers
- numbers, percentages, prices, currency blocks, scores, timers, and range values remain LTR

### Composition rules
- Build layouts with logical start/end assumptions, not left/right assumptions.
- Hero stages, mobile drawers, dropdown origins, inline icon slots, and badge positions must derive from shared direction helpers.
- Use LTR islands only where content genuinely requires it, such as metrics, charts, sliders, ranges, prices, and phone numbers.
- Mirror directional structure, not every asset. Product shots, symbols, and illustrations should only be mirrored when composition truly benefits.

### Locale resolution rules
- Mixed-locale markets may resolve locale from pathname, query param, or other approved routing layer.
- Locale switching must preserve route intent, and should preserve anchors and query state when practical.
- A mixed-locale market may still keep the root HTML document language neutral while page shells set `lang` and `dir` correctly.

### Responsive width contract
- Any child placed inside an asymmetric grid or stage surface must declare `min-width: 0`.
- When a two-column stage collapses to one column, all direct children must expand to `width: 100%` and `max-width: none`.
- Desktop fr-ratio choices may be asymmetrical, but those ratios may not leak into mobile assumptions.
- Do not fix mobile overflow by sprinkling breakpoint patches when the real issue is a missing width contract.

### Do not
- create separate Arabic components
- duplicate markup for RTL
- hardcode reversed order in component internals without using shared direction helpers
- patch RTL by pushing elements with ad hoc margin overrides

### Required helpers
- `isRTL(locale)`
- `dirClass(direction, ltrClass, rtlClass)`
- `logicalSpace(direction, leftClass, rightClass)`
- `overlayOrigin(direction, ltrOrigin, rtlOrigin)`
- `directionalTranslate(direction, ltrValue, rtlValue)`

---


## 19) Anime.js Motion Standard

All motion in this system must use **Anime.js**.

### Why
- consistent runtime choice
- easier shared utilities
- lighter mental model for agents
- enough control for entrance, hover, count-up, path drawing, and looping ambience

### Allowed motion categories
1. entrance reveals
2. hover emphasis
3. number count-up
4. looped ambient motion
5. marquee / scrolling tracks
6. chart and path animation
7. tab/content transitions

### Motion design rules
- Motion must support `prefers-reduced-motion`
- Entrance motion is short and directional
- Hover motion is subtle
- Ambient loops must be slow and low amplitude
- Avoid multiple competing infinite loops inside one viewport cluster
- Scroll-hijack behavior is discouraged and opt-in only
- Stateful player-home motion such as hero auto-rotation must separate animate-out, state swap, and animate-in phases instead of mutating content abruptly.
- Auto-rotation is a content device, not a decoration. Use it only when the swapped content meaningfully changes the player decision.

---

## 20) Shared Anime.js Presets

Create a single `motion/presets.ts` file.

```ts
export const motionTokens = {
  duration: {
    fast: 220,
    base: 420,
    slow: 760,
    loop: 5200,
    marquee: 30000,
  },
  easing: {
    standard: 'easeOutCubic',
    entrance: 'cubicBezier(0.22, 1, 0.36, 1)',
    emphasis: 'easeOutExpo',
    linear: 'linear',
  },
  distance: {
    xs: 8,
    sm: 14,
    md: 20,
    lg: 28,
  },
  scale: {
    hover: 1.02,
    lift: 1.01,
  },
}
```

### Required preset functions

```ts
export function revealUp(targets: anime.AnimeTarget, delay = 0) {}
export function revealLeft(targets: anime.AnimeTarget, delay = 0) {}
export function revealScale(targets: anime.AnimeTarget, delay = 0) {}
export function floatLoop(targets: anime.AnimeTarget, amplitude = 10, duration = 5200) {}
export function pulseGlow(targets: anime.AnimeTarget, duration = 3600) {}
export function countMetric(el: HTMLElement, from: number, to: number, duration = 1400) {}
export function animateBar(el: HTMLElement, value: number, delay = 0) {}
export function drawPath(el: SVGPathElement, duration = 800) {}
export function marqueeTrack(el: HTMLElement, distance: string, duration = 30000) {}
export function hoverLift(el: HTMLElement) {}
export function hoverTilt(el: HTMLElement, options?: { maxX?: number; maxY?: number }) {}
```

Agents must use these helpers instead of writing isolated animation logic in each section.

---

## 21) Reference Anime.js Implementations

### Reveal on viewport enter

```ts
import anime from 'animejs'

export function revealUp(targets: anime.AnimeTarget, delay = 0) {
  return anime({
    targets,
    translateY: [20, 0],
    opacity: [0, 1],
    filter: ['blur(8px)', 'blur(0px)'],
    duration: 560,
    delay,
    easing: 'cubicBezier(0.22, 1, 0.36, 1)',
  })
}
```

### Slow ambient float

```ts
import anime from 'animejs'

export function floatLoop(targets: anime.AnimeTarget, amplitude = 10, duration = 5200) {
  return anime({
    targets,
    translateY: [0, -amplitude, 0],
    duration,
    easing: 'easeInOutSine',
    loop: true,
  })
}
```

### Count-up metric

```ts
import anime from 'animejs'

export function countMetric(el: HTMLElement, from: number, to: number, duration = 1400) {
  const state = { value: from }
  return anime({
    targets: state,
    value: to,
    round: 1,
    duration,
    easing: 'easeOutCubic',
    update: () => {
      el.textContent = state.value.toLocaleString('en-US')
    },
  })
}
```

### SVG path draw

```ts
import anime from 'animejs'

export function drawPath(el: SVGPathElement, duration = 800) {
  const length = el.getTotalLength()
  el.style.strokeDasharray = `${length}`
  el.style.strokeDashoffset = `${length}`

  return anime({
    targets: el,
    strokeDashoffset: [length, 0],
    opacity: [0.4, 1],
    duration,
    easing: 'easeOutCubic',
  })
}
```

### Bar animation

```ts
import anime from 'animejs'

export function animateBar(el: HTMLElement, value: number, delay = 0) {
  return anime({
    targets: el,
    height: [`0%`, `${value}%`],
    opacity: [0.35, 1],
    duration: 450,
    delay,
    easing: 'cubicBezier(0.22, 1, 0.36, 1)',
  })
}
```

### Hover lift

```ts
import anime from 'animejs'

export function hoverLift(el: HTMLElement) {
  const enter = () => anime.remove(el) || anime({
    targets: el,
    translateY: -6,
    scale: 1.01,
    duration: 240,
    easing: 'easeOutCubic',
  })

  const leave = () => anime.remove(el) || anime({
    targets: el,
    translateY: 0,
    scale: 1,
    duration: 240,
    easing: 'easeOutCubic',
  })

  el.addEventListener('mouseenter', enter)
  el.addEventListener('mouseleave', leave)

  return () => {
    el.removeEventListener('mouseenter', enter)
    el.removeEventListener('mouseleave', leave)
  }
}
```

---

## 22) Motion Usage by Section

### Hero
Allowed:
- reveal sequence for eyebrow, title, body, CTA, stats
- subtle loop on orb, emblem, or phone
- slow marquee if hero stage exists
- controlled auto-rotation for player-home hero stages when enabled by config

Not allowed:
- multiple simultaneous aggressive loops
- autoplay motion that distracts from CTA focus
- swapping carousel content without a deliberate out/swap/in transition

### Benefits
Allowed:
- staggered reveal
- subtle hover lift
- optional glow pulse on active accent cards

### Steps
Allowed:
- reveal on viewport
- number badge emphasis
- no perpetual motion needed

### Paths / Models
Allowed:
- tab transitions
- chart bar entry
- line draw
- count-up metrics

### Tools
Allowed:
- calculator value transitions
- showcase float loops
- carousel translation if justified
- count-up only for genuinely numeric outputs and only when the value improves comprehension

### Final CTA
Allowed:
- button reveal
- controlled expand animation
- card hover lift

---

## 23) Performance Rules

Performance is a system requirement.

### Hard limits
- No more than 3 infinite ambient loops visible at once in the same viewport cluster.
- No pointer-tracking transforms on large groups of nodes.
- No background effect that triggers layout thrash.
- No scroll scene taller than necessary.
- No motion on low-priority decorative elements if the section already has data animation.

### Required safeguards
- gate all non-essential motion behind `prefers-reduced-motion`
- lazy-init viewport-triggered animations
- cleanup Anime.js instances on unmount
- use transforms and opacity before filters when possible
- avoid stacking blur-heavy layers on mobile
- keep at most one auto-rotating stage per viewport cluster
- do not run hover-only motion logic when reduced motion is active

---

## 24) Build Workflow for Agents

When generating a new market page, agents must follow this sequence.

### Step 1 — Define market config
Choose:
- supported locales and runtime directions
- theme family
- home page profile
- partnership page profile
- enabled feature flags

### Step 2 — Create content files
Populate structured content for both page types as needed:
- partnership content
- core home content
- optional home benchmark content for richer discovery patterns
- shared footer groups and cross-page navigation labels

### Step 3 — Validate page intent
Before implementation, confirm that:
- the home page reads like a product-discovery page
- the partnership page reads like a recruitment and enablement page
- terminology matches the approved business model
- the same promise is not being repeated section after section

### Step 4 — Choose only approved section variants
Do not invent layout structure.

### Step 5 — Bind tokens
Map the market theme to the base token schema.

### Step 6 — Apply Anime.js presets
Use shared motion helpers only.

### Step 7 — Synchronize content architecture
If a field, label group, or section contract changed, update schema, content, localizers, and renderers together.

### Step 8 — Verify RTL, responsive behavior, and overlay alignment
Check mobile, tablet, desktop, RTL, navigation overlays, and hero/header interaction.

### Step 9 — Run acceptance checks
Use the definition of done below.

---


## 25) Definition of Done

A market page or market page pair is complete only if all of the following are true.

### System compliance
- uses shared codebase
- uses approved section variants only
- uses theme tokens only
- uses structured content only
- uses Anime.js shared motion presets only
- respects ownership boundaries between layout, page composition, content, and theme
- defines separate page profiles for home and partnership when both pages exist

### UX compliance
- hero has a clear promise and CTA
- page order follows the canonical funnel
- final CTA is visible and strong
- numbers remain readable and LTR where needed
- language switching works if enabled
- the section after hero adds new proof instead of paraphrasing the hero
- the page purpose is obvious within the first viewport and first two sections

### Technical compliance
- no duplicated market-specific component copy
- no raw hardcoded copy in JSX
- no Framer Motion import
- reduced-motion behavior is supported
- responsive layout works at mobile, tablet, desktop
- RTL works where applicable
- runtime locale resolution works where applicable
- width contracts remain coherent when layouts collapse to mobile
- overlays and sticky navigation remain spatially coordinated
- image-backed player sections use predictable asset taxonomy and intentional fit modes

### Design compliance
- the market is differentiated across multiple identity axes, not just accent color
- surface treatment is consistent within each page
- page density matches the intended posture
- copy tone sounds user-facing rather than system-facing
- terminology is consistent across hero, navigation, paths/models, and final CTA

### Performance compliance
- no obvious jank on scroll
- ambient motion count is within limits
- heavy visuals are reduced on mobile where needed

---


## 26) Prohibited Patterns

Do not do the following.

- Do not clone an old market page and rename colors.
- Do not create a new codebase per market.
- Do not hardcode market strings inside components.
- Do not use Framer Motion in new sections.
- Do not add unapproved layout variants.
- Do not duplicate Arabic and English component trees.
- Do not hand-roll custom hover physics in each component.
- Do not introduce market-only token names that bypass the base schema.
- Do not use scroll-hijacked horizontal sections unless the config explicitly enables them and the content justifies them.
- Do not let shared primitives ship with page-specific moods baked into their defaults.
- Do not solve repeated review notes with one-off patches when the issue is actually systemic.
- Do not repeat the same business claim in hero, benefits, and final CTA without adding new information.
- Do not let dropdowns, overlays, or sticky states float detached from the page shell.
- Do not patch responsive issues with breakpoint-by-breakpoint guesswork when a width contract is missing.
- Do not use one shared section map when the home and partnership pages clearly need different structures.
- Do not hardcode one market-wide `dir` when locale can change it at runtime.
- Do not store benchmark media content inside JSX or component-local arrays.
- Do not let media-led player cards invent untracked copy, badges, or CTA labels outside content files.

---


## 27) Safe Extension Rules

New variants are allowed only if all of the following are true:
- the need cannot be solved by content or theming alone
- the new variant is reusable across at least 3 markets
- it fits the existing token schema
- it uses Anime.js shared motion helpers
- it is added to the approved section catalog

If a new market asks for something unique, first attempt:
1. theme change
2. content change
3. approved variant swap
4. optional feature flag
5. only then propose a new reusable variant

---

## 28) Recommended Starting Matrix for the Next 15 Markets

Use a limited combination matrix instead of unique designs for each page.

### Family A — Classic conversion
- theme: `gold-classic`
- hero: `hero-split`
- benefits: `benefits-glass-grid`
- steps: `steps-three-col`
- paths: `paths-dual-card`
- tools: `tools-calculator`
- final CTA: `final-cta-expand`

### Family B — Green local partner
- theme: `green-depth`
- hero: `hero-centered`
- benefits: `benefits-glass-grid`
- steps: `steps-three-col`
- paths: `paths-dual-card`
- tools: `tools-showcase`
- final CTA: `final-cta-panel`

### Family C — Editorial premium
- theme: `editorial-premium`
- partnership hero: `hero-editorial`
- benefits: `benefits-light-shell`
- steps: `steps-timeline`
- paths: `paths-choice-cards`
- tools: `tools-showcase`
- final CTA: `final-cta-dual-card`
- optional home profile: `home-hero-stage` + `home-featured-grid` + `home-sports-showcase` + `home-offers-grid`

### Family D — Premium dashboard
- theme: `saudi-premium`
- hero: `hero-typographic`
- benefits: `benefits-dashboard`
- steps: `steps-three-col`
- models: `models-tabs`
- tools: `tools-carousel` or `tools-showcase`
- final CTA: `final-cta-dual-card`

This matrix should cover the majority of new markets with minimal net-new design work.

---

## 29) Example Market Config

```ts
export const jordanConfig: MarketPageConfig = {
  market: 'Jordan',
  slug: 'jordan',
  locale: 'ar',
  direction: 'rtl',
  themeFamily: 'green-depth',
  themeFile: 'jordan.ts',
  backgroundVariant: 'bg-depth',
  composition: {
    density: 'balanced',
    textMeasure: 'md',
    surfaceMode: 'glass-dominant',
    motionProfile: 'standard',
  },
  sections: {
    hero: 'hero-centered',
    benefits: 'benefits-glass-grid',
    steps: 'steps-three-col',
    paths: 'paths-dual-card',
    tools: 'tools-showcase',
    finalCta: 'final-cta-panel',
    footer: 'footer-full',
  },
  flags: {
    showLanguageSwitch: true,
    showHeroStage: false,
    showPhoneMockup: false,
    showDashboardShell: false,
    enablePointerBackground: false,
    enableCountUp: true,
    enableScrollScenes: false,
  },
}
```

---

## 30) Example Agent Prompt

Use this when instructing coding agents.

```md
# Task
Create a new market landing system using the shared landing system. Default to a home page plus a partnership page unless the scope explicitly says otherwise.

## Inputs
- market config file
- market content JSON
- shared theme tokens
- approved section variants
- Anime.js shared motion helpers

## Requirements
- Use only approved section variants.
- Use only shared tokens.
- Use only Anime.js for motion.
- Keep all strings in content files.
- Support RTL if the market direction is rtl.
- Follow the canonical page order for the page type being built.
- Default to building both a player-facing home page and a partnership page.
- Preserve ownership boundaries between primitives, sections, page composition, and theme.
- Make page identity distinct through more than color alone.
- Keep terminology consistent with the approved business model.

## Do Not
- create a new codebase
- import Framer Motion
- add new layout variants unless explicitly requested
- hardcode colors or copy in components

## Output
Return:
1. files added or changed
2. page types built
3. section variants used
4. theme family used
5. motion presets applied
6. verification notes
```

---

## 31) Migration Rule for Existing Pages

Existing pages should be progressively migrated into this system.

Priority order:
1. extract shared tokens
2. extract shared button, surface, section shell, and language switcher
3. replace old motion with Anime.js presets
4. normalize page configs
5. move copy into structured content
6. deprecate page-specific layout logic once equivalent variants exist

Do not attempt a full rewrite in one pass unless schedule and QA support it.

---

## 32) Final Operating Rule

This file is the source of truth for creating new landing pages.

If an implementation detail from an older market conflicts with this spec:
- follow this spec
- preserve reusable behavior only if it fits the approved system
- convert one-off behavior into a reusable variant before adopting it

The system should grow by **promotion of reuse**, not by accumulation of forks.

---

## 32.1) Yemen-Derived Promotion Rules

The Yemen landing adds the following reusable system learnings:
- player home pages may justify a dedicated benchmark content layer
- runtime locale direction must be resolved per active locale, not frozen globally
- dense player surfaces benefit from page-intent CSS namespaces
- image-backed discovery cards should use an explicit asset taxonomy and fit policy
- mobile integrity depends on hard width contracts, not late breakpoint patches
- editorial partnership pages can combine oversized copy with accountable operational proof without feeling like dashboards for their own sake

Promote these as system rules, not as Yemen-only exceptions.

---

## 33) Spacing and Visual Identity Restrictions

These rules apply to all new market pages and all major refactors.

### Section spacing
- Default to the smallest vertical spacing that still preserves readability, hierarchy, and responsive breathing room.
- Large decorative gaps between sections are not allowed by default.
- When in doubt, make the composition denser rather than airier.
- Tight rhythm is part of the system language, especially for partnership pages.

### Visual identity
- Every page must have its own visual identity.
- It is acceptable to reuse system skeleton, information architecture, approved variants, and shared primitives.
- It is not acceptable to deliver a near-clone that only swaps colors or country names.
- Differentiation should come from a meaningful combination of color, typography, background treatment, surface behavior, art direction, and section composition.

### Reference rule
- Existing pages may be referenced for skeleton and reusable patterns only.
- References must not be used as direct visual templates.
- “Same pattern” means same system logic, not same final appearance.

---

## 34) Working Directory and Experimental Reference Policy

During the current build phase, work may continue inside the same main repository/directory. This is acceptable while the system is being consolidated.

### Rules
- Experimental pages generated by Codex may live alongside the main code while they are being evaluated.
- Those pages may be manually tuned after generation until they fit the quality bar.
- Experimental pages may later be used as references, but only after extracting the reusable ideas from them.
- An experimental page does not automatically become part of the approved system.
- Promotion into the system happens only after deliberate cleanup, normalization, and reuse review.

---

## 35) Existing Market Upgrade Rule

The dual-page model should also be applied progressively to markets that already exist.

### Default assumption for existing markets
- each market should eventually have a home page
- each market should eventually have a partnership page
- both pages should share one market identity system
- both pages should remain distinct in purpose and presentation

When revisiting an existing market:
1. normalize background ownership and layout composition
2. tighten spacing between sections
3. separate player-facing and partner-facing goals clearly
4. preserve market identity while reducing copy-paste feel
5. promote any reusable fix back into the shared system

---

## 36) Final Reminder on Sources of Truth

The source of truth is the shared system plus explicitly promoted reusable variants, not the most recent generated page.

Use this priority order when making future decisions:
1. this spec
2. approved shared tokens, components, and variants
3. market config and structured content
4. manually approved experimental learnings
5. old page implementations

This ensures the system grows through controlled reuse rather than accidental drift.
