# CEO Revision - Analysis and Improvement Plan

## Reading of the CEO request

The request is a V1.1 refinement pass, not a repositioning project. The site should keep the current architecture, identity, audience and commercial offer, while improving perceived value, credibility and conversion.

The strongest direction is:

- less "software house", more senior technology consultancy;
- less technology as a feature list, more business impact;
- more clarity for the owner or manager reading quickly;
- stronger diagnosis-oriented CTAs;
- better scanning, especially on mobile;
- no invented proof, cases, metrics or testimonials.

## Current site assessment

The current implementation already follows the approved positioning: diagnosis first, IA without hype, practical automation, data, integrations and systems for real operations in Vale do Paraiba. The homepage journey is also mostly aligned: hero, authority, pains, solutions, method, examples, sectors, about, product proof, CTA and contact.

The V1.1 opportunity is polish, not restructuring. The main gaps are:

- repeated CTA labels such as "Solicitar diagnostico" across many contexts;
- some generic link labels such as "Saiba mais" and "Conhecer solucoes";
- several sections use similar wording around gargalos, retrabalho, dados and sistemas, which can feel repetitive;
- service pages are useful but dense, with long blocks that could scan better;
- the emotional layer is present but light; the site can add controlled human phrases about growth, control, predictability and simpler operations;
- premium perception can improve through spacing, heading rhythm, hover states, consistent icon/card treatment and mobile readability;
- semantic lists and headings can be tightened in repeated page patterns;
- performance should be checked after copy/visual edits, with special attention to hero images and non-critical visuals.

## What should be implemented now

### 1. Copy refinement across shared content

Scope:

- `src/components/Hero.tsx`
- `src/components/HomeNarrative.tsx`
- `src/components/Solutions.tsx`
- `src/components/About.tsx`
- `src/components/Contact.tsx`
- `src/lib/repositioning-content.ts`

Actions:

- reduce repeated phrases where the same idea appears in nearby sections;
- make headings more direct and business-oriented;
- add a few human but corporate lines, for example around companies growing faster than their processes, technology simplifying the operation, and giving management more control;
- keep IA practical and avoid hype;
- preserve the current positioning and regional focus.

Expected impact:

- faster understanding of what CraftCode solves;
- stronger senior consultancy perception;
- less commodity comparison with software houses;
- smoother reading on mobile.

### 2. CTA system cleanup

Scope:

- shared CTA constants in `src/lib/repositioning-content.ts`;
- CTAs in hero, page hero, diagnostic CTA, solutions CTA, final CTA, contact and cards.

Actions:

- standardize the primary CTA around the approved conversion goal: "Agendar diagnostico";
- use contextual variants when helpful, such as "Agendar diagnostico da operacao", "Ver oportunidades de melhoria" or "Entender por onde comecar";
- replace generic card links like "Saiba mais" with more specific labels such as "Ver aplicacoes" or "Entender esta solucao";
- keep the secondary CTA as solution discovery, but make labels less generic where the context allows.

Expected impact:

- clearer next step;
- lower friction for users who are not ready to ask for an implementation;
- better alignment with the consultative offer.

### 3. Service-page readability pass

Scope:

- `src/pages/ServicePage.tsx`
- service route content in `src/pages/IaAplicada.tsx`, `src/pages/AutomacaoProcessos.tsx`, `src/pages/DadosBi.tsx`, `src/pages/SistemasSobMedida.tsx`, `src/pages/IntegracaoSistemas.tsx`
- `src/lib/repositioning-content.ts`

Actions:

- shorten dense descriptions where possible;
- convert manual bullet characters into clean semantic list styling;
- make "Aplicacoes praticas", "Beneficios esperados", "Sinais", "Pre-requisitos" and "Riscos" easier to scan;
- check heading hierarchy so each section has one clear purpose;
- keep risk/limit language because it reinforces seniority and trust.

Expected impact:

- higher confidence from technical and business decision makers;
- better mobile scanning;
- better accessibility and SEO structure.

### 4. Diagnostic page conversion pass

Scope:

- `src/pages/DiagnosticoTecnologiaIa.tsx`
- `src/components/Contact.tsx`

Actions:

- make the diagnostic offer feel like the natural first step, not a contact form;
- clarify what the conversation evaluates and what the client gets afterward;
- reduce repeated "diagnostico" phrasing where it feels mechanical;
- keep validation messages and analytics events intact;
- consider making WhatsApp copy more benefit-led.

Expected impact:

- stronger conversion intent;
- less perceived commitment than asking for a project quote;
- more trust because the process and limits are explicit.

### 5. Premium visual and UX polish

Scope:

- shared sections and cards;
- header/mobile navigation;
- CTA blocks;
- hover/focus states.

Actions:

- refine vertical rhythm between large sections;
- check card heights and internal spacing for consistency;
- ensure icon sizes, backgrounds and hover states are uniform;
- keep cards at the existing restrained radius;
- make mobile sections shorter and easier to scan;
- verify that the first viewport shows the brand promise clearly without feeling like a generic landing page.

Expected impact:

- more mature consulting perception;
- less visual fatigue;
- better mobile experience.

### 6. SEO and performance validation

Scope:

- `src/lib/site-metadata.ts`
- `src/lib/seo-utils.tsx`
- image usage in page components;
- generated `dist` output.

Actions:

- validate title and description per route after copy changes;
- check heading hierarchy and alt strategy;
- confirm favicon, OG image and canonical tags;
- review image loading: eager only for hero-critical imagery, lazy for non-critical visuals;
- check LCP/CLS after build and preview;
- run build, typecheck, lint and route smoke tests.

Expected impact:

- stable discoverability without SEO stuffing;
- less risk of visual regressions;
- better technical confidence before publishing.

## Suggested but not implemented without founder validation

These items would improve credibility, but should not be invented:

- specific founder career milestones beyond what is already approved;
- named companies, sectors or systems from past work;
- measurable results such as hours saved, revenue impact, error reduction or SLA gains;
- client testimonials;
- before/after case studies;
- photos or real operational screenshots from client work;
- a stronger local proof section with known regional relationships or projects.

## What should not be changed

- do not redesign the identity;
- do not change the site architecture;
- do not promote Cardapio Facil as the primary product;
- do not turn the message into a generic AI agency pitch;
- do not create new commercial offers;
- do not add proof points that the founder has not validated.

## Execution order

1. Copy and CTA pass on the homepage and shared content.
2. Diagnostic page and contact conversion pass.
3. Service-page readability and semantic-list cleanup.
4. Visual rhythm and mobile polish.
5. SEO metadata review.
6. Build, lint/typecheck and preview smoke test.
7. Final report with implemented changes, suggestions, client pendencies and expected impact.

## Recommended acceptance criteria

- A business owner can understand the offer in the first viewport.
- Every primary CTA points to diagnosis or scheduling, not generic contact.
- Each major section advances the sequence: problem, impact, CraftCode approach, method, benefits, diagnosis.
- No page feels like a generic software house page.
- No claim depends on unvalidated numbers, cases or testimonials.
- Mobile reading is comfortable, with shorter blocks and clear CTAs.
- Build, typecheck and SEO route smoke tests pass.
