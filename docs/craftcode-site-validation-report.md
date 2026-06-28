# Validacao das mudancas do site CraftCode

Data: 2026-06-27

## Veredito

O site esta bem alinhado ao reposicionamento geral da CraftCode como consultoria de tecnologia e IA aplicada para empresas do Vale do Paraíba. A direcao esta correta: diagnostico como oferta principal, IA sem hype, operacao real, dados, automacao e integracao.

Ainda nao esta pronto como versao final sem ajustes. A validacao encontrou pontos prioritarios de conversao, SEO tecnico, analytics, privacidade, copy e precisao tecnica.

Nao foi encontrado desalinhamento forte como mensagem product-first, software house generica ou Cardapio Facil como oferta principal na home.

## Agentes e aspectos validados

- Estrategia de marca e posicionamento.
- Estrategia comercial e oferta de entrada.
- Copy B2B.
- UX e arquitetura de informacao.
- UX/UI e percepcao visual.
- SEO organico.
- SEO tecnico e QA.
- Analytics e conversao.
- Precisao tecnica das promessas.

## Achados prioritarios

### Alta prioridade

1. Fortalecer a pagina `/diagnostico-tecnologia-ia`

A pagina ainda e rasa para funcionar como oferta de entrada principal. Precisa explicar melhor:

- para quem e indicada;
- quando faz sentido;
- quais problemas evita;
- o que sera analisado;
- formato do entregavel;
- profundidade da analise;
- proximos passos;
- objecoes comuns;
- limites do diagnostico.

Arquivos relacionados:

- `src/pages/DiagnosticoTecnologiaIa.tsx`
- `src/components/PageSections.tsx`
- `src/components/Contact.tsx`

2. Consolidar a jornada dos CTAs

Os CTAs principais estao divididos entre ir para `/diagnostico-tecnologia-ia` e pular direto para `/#contact`. Isso enfraquece a rota criada para o diagnostico e confunde a intencao de conversao.

Recomendacao: definir uma jornada principal:

- CTAs de decisao levam para `/diagnostico-tecnologia-ia`.
- CTAs dentro da pagina de diagnostico levam ao formulario ou WhatsApp.
- Textos como "Solicitar diagnostico" devem corresponder a uma acao real de pedido de contato.

Arquivos relacionados:

- `src/components/Header.tsx`
- `src/components/Hero.tsx`
- `src/components/PageSections.tsx`
- `src/components/Footer.tsx`
- `src/pages/CardapioFacil.tsx`

3. Reposicionar o Cardapio Facil como caso tecnico B2B

O Cardapio Facil e o maior ponto de risco. A home o trata como prova secundaria, mas a pagina do caso ainda puxa para produto consumer/B2C e usa claims fortes.

Riscos encontrados:

- linguagem de produto para consumidor final;
- foto lifestyle e emojis que enfraquecem percepcao premium/sobria;
- claims sensiveis sobre nutricao, restricoes alimentares e recomendacoes nutricionais;
- afirmacoes fortes sobre monitoramento de abertura de mensagens, automacao total e adaptacao continua por IA;
- pouca sustentacao tecnica para pagamentos, integracao e operacao fisico-digital;
- CTA "Visitar produto" pode roubar foco da oferta principal.

Recomendacao: transformar a pagina em caso tecnico sobre IA, WhatsApp, dados, recorrencia, integracao, operacao e limites claros. Evitar promessas nutricionais sem disclaimer, curadoria ou lastro.

Arquivos relacionados:

- `src/pages/CardapioFacil.tsx`
- `src/components/ProductHighlight.tsx`
- `src/lib/site-metadata.ts`

4. Corrigir SEO tecnico de rotas sem barra final

O QA encontrou que URLs publicas sem barra final podem servir HTML/metadados da home no preview local, enquanto a versao com barra final serve os metadados corretos.

Exemplo:

- `/diagnostico-tecnologia-ia` retornou title/canonical da home no preview.
- `/diagnostico-tecnologia-ia/` retornou title/canonical corretos.

Como sitemap e canonical usam URLs sem barra, isso pode causar indexacao incorreta se o host nao redirecionar automaticamente.

Arquivos relacionados:

- `src/lib/site-metadata.ts`
- `scripts/prerender.mjs`
- `src/App.tsx`

5. Corrigir fallback do GitHub Pages

O `public/404.html` parece configurado para GitHub Pages em subdiretorio com `pathSegmentsToKeep = 1`, mas o site usa dominio proprio. O usual para dominio proprio seria `0`.

Risco: fallback de rotas invalidas ou novas rotas nao prerenderizadas pode redirecionar para caminho errado.

Arquivos relacionados:

- `public/404.html`
- `public/CNAME`

6. Ajustar analytics, privacidade e page views

Riscos encontrados:

- Google Analytics inicializa no carregamento sem consentimento previo.
- Link "Privacidade" abre `mailto:` em vez de politica publica.
- Possivel duplicacao de page view inicial: `ReactGA.initialize()` pode disparar page view automatico e `PageViewTracker` tambem envia page view no mount.
- Mudancas de hash, como `#contact`, podem inflar page views.
- `cta_click` esta sendo usado tambem para links de navegacao/conteudo, diluindo leitura de conversao.

Recomendacoes:

- criar politica publica de privacidade;
- implementar Consent Mode ou bloquear analytics ate consentimento;
- configurar `send_page_view: false` se o rastreamento manual de SPA for mantido;
- ignorar mudancas apenas de hash no rastreamento de page view;
- padronizar eventos com `location`, `label`, `href`, `page_path`, `conversion_goal` e `form_name`;
- separar `cta_click` comercial de eventos de navegacao/conteudo.

Arquivos relacionados:

- `src/lib/analytics-init.ts`
- `src/App.tsx`
- `src/components/TrackedLink.tsx`
- `src/components/Footer.tsx`
- `src/components/Contact.tsx`

## Media prioridade

1. H1 da home deve explicitar o recorte regional

O H1 usa "empresas da regiao", enquanto a proposta recomenda explicitar "Vale do Paraíba". A badge regional ajuda, mas o H1 e a superficie mais forte.

Arquivo relacionado:

- `src/components/Hero.tsx`

2. Criar rota indexavel para integracao de sistemas

Integracao de sistemas e pilar central do posicionamento, mas aparece apenas como ancora em `/solucoes#integracao`. Isso limita SEO e reduz profundidade comercial.

Arquivos relacionados:

- `src/lib/repositioning-content.ts`
- `src/pages/Solucoes.tsx`
- `src/lib/site-metadata.ts`
- `src/App.tsx`
- `src/entry-server.tsx`

3. Revisar `/conteudos`

A pagina esta no menu e no sitemap, mas ainda parece uma lista de pautas futuras. Isso pode transmitir area inacabada e gerar pagina fina para SEO.

Opcoes:

- publicar artigos reais;
- transformar em hub editorial com resumos e status claro;
- remover do menu principal;
- reduzir prioridade no sitemap ate haver conteudo publicado.

Arquivos relacionados:

- `src/pages/Conteudos.tsx`
- `src/components/Header.tsx`
- `src/lib/site-metadata.ts`

4. Aprofundar paginas de servico

As paginas de IA aplicada, automacao, dados/BI e sistemas sob medida estao corretas, mas rasas. Falta conteudo de decisao.

Adicionar:

- quando faz sentido;
- sinais de que a empresa precisa disso;
- pre-requisitos;
- exemplos por setor;
- como a CraftCode implementa;
- conexao com diagnostico;
- condicionantes tecnicos como qualidade dos dados, acesso a APIs, governanca e adocao da equipe.

Arquivos relacionados:

- `src/pages/ServicePage.tsx`
- `src/pages/IaAplicada.tsx`
- `src/pages/AutomacaoProcessos.tsx`
- `src/pages/DadosBi.tsx`
- `src/pages/SistemasSobMedida.tsx`
- `src/lib/repositioning-content.ts`

5. Ajustar formulario e expectativa comercial

O CTA deve manter a promessa de "Solicitar diagnostico", porque o texto informa resposta em ate 24 horas uteis, nao agendamento direto.

Recomendacao: decidir se a acao e agendamento, solicitacao de contato ou triagem. Ajustar CTA, sucesso e microcopy.

Arquivo relacionado:

- `src/components/Contact.tsx`

6. Melhorar acessibilidade do formulario e menu mobile

O formulario mostra erros visualmente, mas inputs nao recebem `aria-invalid` e `aria-describedby`. O menu mobile fechado permanece no DOM sem `aria-hidden`.

Arquivos relacionados:

- `src/components/Contact.tsx`
- `src/components/Header.tsx`

7. Validar EmailJS em ambiente de deploy

O build passa mesmo quando EmailJS usa valores default/placeholder. Isso permite deploy aparentemente valido com formulario quebrado.

Arquivo relacionado:

- `src/services/contactService.ts`

8. Trocar WhatsApp flutuante de `button` para link

O botao flutuante usa `window.open`, depende de JS e nao expoe URL no HTML. Melhor usar `<a href>` com rastreamento.

Arquivo relacionado:

- `src/components/WhatsAppButton.tsx`

## Baixa prioridade

- Remover linguagem interna de reposicionamento em superfice publica, especialmente em `ProductHighlight.tsx`.
- Reduzir densidade do hero em mobile.
- Suavizar `hover:scale` em botoes para percepcao mais sobria.
- Harmonizar uso de cards com tokens do design system.
- Melhorar pagina 404, hoje fora da linguagem visual do site.
- Adicionar dados estruturados mais ricos para servico local.
- Considerar acentuacao nos textos publicos para melhor percepcao em SERP e leitura.
- Atualizar Browserslist/caniuse-lite.

## Checks executados

Comandos executados localmente:

```bash
npm run typecheck
npm run lint
npm run build
npm run test
```

Resultado:

- `npm run typecheck`: passou.
- `npm run lint`: passou com 11 warnings de Fast Refresh.
- `npm run build`: passou, incluindo SPA, SSR e prerender.
- `npm run test`: passou, 1 arquivo e 2 testes.

Observacoes:

- O build alertou que Browserslist/caniuse-lite esta desatualizado.
- O lint reportou apenas warnings, sem erros.
- Todas as rotas de `publicRoutes` geraram arquivo em `dist`.
- `robots.txt` aponta para `https://craftcode.com.br/sitemap.xml`.
- `sitemap.xml` lista as 11 rotas publicas esperadas.

## Ordem recomendada de correcao

1. Corrigir SEO tecnico das rotas sem barra final e `404.html`.
2. Ajustar analytics para evitar duplicacao de page view e criar base de privacidade/consentimento.
3. Reescrever e reposicionar Cardapio Facil como caso tecnico B2B.
4. Fortalecer `/diagnostico-tecnologia-ia` como pagina de decisao.
5. Unificar CTAs e jornada de conversao.
6. Ajustar H1 da home com recorte regional explicito.
7. Criar rota de integracao de sistemas.
8. Resolver `/conteudos`: publicar conteudo real ou reduzir visibilidade.
9. Aprofundar paginas de servico.
10. Melhorar acessibilidade, EmailJS e WhatsApp flutuante.
