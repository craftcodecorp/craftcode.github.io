# CraftCode Site Repositioning Implementation Plan

## Summary

Refactor the current CraftCode site from a generic software/technology company into a consultoria de tecnologia e IA aplicada for companies in the Vale do Paraíba.

Default v1 scope:

- Implement the repositioned core site, SEO, navigation, contact/diagnóstico conversion flow, WhatsApp CTA, analytics events, and prerendered routes.
- Treat CardápioFácil as secondary proof/case content, not a primary product offer.
- Keep “Conteúdos” outside the primary public navigation until real articles are published.
- Use sober data/process/UI visuals from existing brand assets and code-native components, not AI cliché imagery.

## Key Changes

- Replace primary messaging with:
    - “IA, automação e sistemas sob medida para empresas do Vale do Paraíba.”
    - “IA sem hype. Tecnologia com aplicação real.”
    - Primary CTA: Solicitar diagnóstico
    - Secondary CTA: Conhecer soluções

- Remove or demote generic/software-house framing:
    - Product-first and generic software-house messaging from primary solutions.
    - “Fale com nossa equipe” as main CTA.
    - CardápioFácil as homepage product centerpiece.
    - Vague innovation/disruption language.

- New main navigation:
    - Início
    - Soluções
    - Setores
    - Método
    - Sobre
    - Contato

- Home section order:
    - Hero
    - Authority block
    - Pain block
    - Solutions
    - Method
    - Sectors
    - Founder/About
    - CardápioFácil proof/case teaser
    - Final diagnóstico CTA
    - Contact form

## Implementation Changes

- Add structured content/data modules for reusable page content:
    - Solutions: IA aplicada, automação de processos, integração de sistemas, dados/BI, sistemas sob medida, consultoria técnica.
    - Sectors: serviços, indústria, varejo/franquias, operações físico-digitais, B2B.
    - Method: diagnóstico, priorização, prototipação, implementação, evolução.
    - Content topics from the proposal.

- Add routes and metadata in src/lib/site-metadata.ts and src/App.tsx:
    - /
    - /solucoes
    - /diagnostico-tecnologia-ia
    - /ia-aplicada
    - /automacao-processos
    - /dados-bi
    - /sistemas-sob-medida
    - /setores
    - /sobre
    - /cardapio-facil

- Keep /cardapio-facil, but rewrite its framing as a CraftCode case/proof of IA aplicada, WhatsApp automation, integration and físico-digital operation.
- Update SEO:
    - Route-specific titles/descriptions focused on IA aplicada, automação, sistemas sob medida, dados, Vale do Paraíba.
    - Update organization JSON-LD to reflect consulting/service positioning.
    - Keep prerender sitemap generation via existing publicRoutes.

- Update conversion flow:
    - Contact form becomes “Agendar Diagnóstico de Tecnologia e IA Aplicada”.
    - Add fields for company context only if low friction: company, sector, main challenge.
    - Preserve EmailJS.
    - Update WhatsApp default message to ask for diagnóstico.

- Update analytics:
    - Standardize events: page_view, cta_click, whatsapp_click, contact_form_submit, contact_form_success, contact_form_error.
    - Track CTA location labels such as hero, header, final_cta, solution_page, contact_form.

- Update visual system:
    - Preserve current Tailwind/shadcn stack.
    - Use restrained layouts, clear hierarchy, data/process/flow elements, compact cards, and consulting-style sections.
    - Avoid robots, brain imagery, futuristic AI clichés, excessive gradients, and generic agency visuals.

## Agent Review Flow

Use the existing local agents as review gates during implementation:

- Strategy: fundador-decisor, estrategista-marca, estrategista-comercial, especialista-tecnico.
- Architecture/copy: ux-strategist, estrategista-conteudo, seo-strategist, copywriter-b2b.
- Visual/build: ux-ui-designer, diretor-arte, desenvolvedor-front-end.
- Technical validation: desenvolvedor-back-end-full-stack, especialista-seo-tecnico, analytics-specialist, qa-tester.

## Test Plan

- Run:
    - npm run typecheck
    - npm run lint
    - npm run test
    - npm run build

- Verify:
    - All new routes render and prerender.
    - Sitemap includes every public route.
    - Header/mobile navigation works.
    - CTAs point to diagnóstico/contact/WhatsApp correctly.
    - EmailJS contact flow still submits and shows success/error states.
    - GA wrapper records CTA, WhatsApp and form events.
    - SEO metadata and canonical URLs are route-specific.
    - Mobile and desktop layouts have no overlapping text or broken cards.

## Assumptions

- V1 is the core public site refactor, not the full ecosystem rollout.
- “Conteúdos” remains a non-primary route until the editorial area has complete articles.
- No new backend infrastructure is needed.
- No new visual asset production is required for v1.
- The existing .agents/ and .codex/agents/ files remain untracked unless you explicitly decide to commit them.



# CraftCode Repositioning Implementation Plan
## Status

All implementation steps are pending.

## Pending Steps

- [ ] Align final v1 scope around the core public site refactor.
- [ ] Preserve the proposal document as the source of truth.
- [ ] Refactor primary positioning to “consultoria de tecnologia e IA aplicada”.
- [ ] Replace the main CTA with “Solicitar diagnóstico”.
- [ ] Use “Conhecer soluções” as the secondary CTA.
- [ ] Demote CardápioFácil from primary product offer to proof/case content.
- [ ] Remove generic software house, product-first, and vague innovation messaging.
- [ ] Update the main navigation: Início, Soluções, Integração, Setores, Diagnóstico, Sobre, Contato.
- [ ] Rebuild the home page with this sequence: hero, authority, pains, solutions, method, sectors, founder/about, CardápioFácil proof, final CTA, contact.
- [ ] Create reusable content/data modules for solutions, sectors, method steps, pains, authority points, and content topics.
- [ ] Add public routes for /solucoes, /diagnostico-tecnologia-ia, /ia-aplicada, /automacao-processos, /dados-bi, /sistemas-sob-medida, /setores, and /sobre.
- [ ] Update src/lib/site-metadata.ts with route metadata, canonical paths, sitemap priority, and descriptions.
- [ ] Update src/App.tsx routing and lazy page imports.
- [ ] Rewrite /cardapio-facil as a CraftCode case/proof page.
- [ ] Update SEO defaults, Open Graph text, route titles, descriptions, and structured data.
- [ ] Preserve prerender and sitemap generation through existing publicRoutes.
- [ ] Refactor the contact section into “Diagnóstico de Tecnologia e IA Aplicada”.
- [ ] Update WhatsApp default message for diagnostic scheduling.
- [ ] Preserve EmailJS submission flow.
- [ ] Add or standardize analytics events: page_view, cta_click, whatsapp_click, contact_form_submit, contact_form_success, contact_form_error.
- [ ] Track CTA locations such as hero, header, final_cta, solution_page, and contact_form.
- [ ] Refresh visual direction using sober UI, data, process, map, and flow elements.
- [ ] Avoid robots, brain imagery, futuristic AI clichés, excessive gradients, and generic agency visuals.
- [ ] Validate copy against brand guardrails: technical, accessible, consultive, direct, regional but premium.
- [ ] Run npm run typecheck.
- [ ] Run npm run lint.
- [ ] Run npm run test.
- [ ] Run npm run build.
- [ ] Verify all public routes render and prerender correctly.
- [ ] Verify sitemap includes all public routes.
- [ ] Verify desktop and mobile navigation.
- [ ] Verify CTAs, WhatsApp links, contact form states, SEO metadata, and responsive layout.

## Assumptions

- V1 focuses on the core public site, SEO, conversion flow, analytics, and contact experience.
- “Conteúdos” should stay out of navigation and sitemap until the first complete articles are published.
- No new backend infrastructure is required.
- No new visual asset production is required for v1.
- Existing .agents/ and .codex/agents/ files remain untracked unless explicitly committed later.
