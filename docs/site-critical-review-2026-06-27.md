# Revisao critica da versao atual do site

Data: 2026-06-27

## Veredito

- [x] A direcao estrategica esta correta: o site comunica consultoria de tecnologia e IA aplicada, diagnostico, operacao real, dados, automacao e integracao.
- [x] A versao ainda nao parece final: falta acabamento editorial, clareza comercial e validacao dos fluxos criticos.
- [x] O site esta tecnicamente saudavel no basico: `typecheck`, `build`, `lint` e `test` passaram.
- [x] A cobertura de testes ainda e baixa para o risco comercial do site.

## Principais falhas

- [x] Revisar a pagina `/conteudos`, que ainda parece inacabada.
  - Evidencia: a pagina diz que artigos completos podem ser publicados em uma proxima etapa.
  - Risco: passa percepcao de area em construcao e gera pagina fina para SEO.
  - Arquivo: `src/pages/Conteudos.tsx`.
  - Resolucao: removida das superficies publicas e retirado o texto de etapa futura.

- [x] Corrigir falta de acentuacao em textos publicos.
  - Exemplos: `Priorizacao`, `Prototipacao`, `Implementacao`, `Evolucao`, `Servicos`, `informacao`, `Gestao`.
  - Risco: reduz percepcao de cuidado e acabamento em portugues.
  - Arquivo principal: `src/lib/repositioning-content.ts`.

- [x] Ajustar o item `Metodo` no menu.
  - Problema: o menu promete metodo, mas leva para a pagina de diagnostico.
  - Caminhos possiveis: renomear para `Diagnostico` ou criar uma secao/rota real de metodo.
  - Arquivo: `src/components/Header.tsx`.

- [x] Padronizar a promessa dos CTAs.
  - Problema: o site alterna entre `Agendar diagnostico` e `Solicitar diagnostico`.
  - Observacao: como nao ha calendario/agendamento direto, `Solicitar diagnostico` parece mais honesto.
  - Arquivos: `src/components/Header.tsx`, `src/components/Hero.tsx`, `src/components/Contact.tsx`, `src/components/PageSections.tsx`.

- [x] Impedir deploy com EmailJS default.
  - Problema: `contactService.ts` usa valores default se variaveis de ambiente nao existirem.
  - Risco: build passa, mas formulario pode quebrar em producao.
  - Arquivo: `src/services/contactService.ts`.

## Itens a remover ou rebaixar

- [x] Remover temporariamente `/conteudos` do menu, rodape e sitemap ate haver artigos reais.
- [x] Ou, alternativamente, publicar 2 a 3 artigos reais antes de manter `/conteudos` como pagina publica.
  - Resolucao: alternativa nao aplicada; a decisao foi ocultar `/conteudos` ate haver artigos reais.
- [x] Atualizar ou remover `TODO.md`, pois ainda reflete fases antigas e genericas do projeto.
- [x] Revisar documentos antigos em `docs/` que mencionam Web3/blockchain ou decisoes ja superadas.
- [x] Remover o link `Termos` do rodape se nao existir uma pagina publica de termos.
- [x] Se o link `Termos` for mantido, criar uma rota real de termos em vez de abrir email.
  - Resolucao: alternativa nao aplicada; o link `Termos` foi removido.

## Melhorias recomendadas

- [x] Fazer revisao editorial completa de acentos, titulos, microcopy e consistencia de tom.
- [x] Reforcar a home com mais prova concreta: exemplos de problemas, resultados, tipos de projeto ou mini-casos.
- [x] Melhorar `/sobre` com evidencias de experiencia sem transformar a pagina em curriculo longo.
- [x] Tornar `/cardapio-facil` visualmente mais B2B/case tecnico.
- [x] Reavaliar a imagem lifestyle do Cardapio Facil, que ainda puxa a percepcao para produto consumer.
- [x] Adicionar testes para navegacao principal.
- [x] Adicionar testes para formulario de diagnostico.
- [x] Adicionar testes para consentimento de analytics.
- [x] Adicionar verificacao de prerender/metadados das rotas publicas.
- [x] Corrigir warnings de lint de `react-refresh/only-export-components` para reduzir ruido tecnico.

## Pontos positivos mantidos

- [x] Manter diagnostico como CTA principal.
- [x] Manter Cardapio Facil como prova/case secundario, nao como oferta principal.
- [x] Manter narrativa `IA sem hype. Tecnologia com aplicacao real.`
- [x] Manter rotas especificas para IA aplicada, automacao, integracao, dados/BI e sistemas sob medida.
- [x] Manter consentimento de analytics antes da inicializacao do GA.
- [x] Manter WhatsApp flutuante como link real.
- [x] Manter prerender das rotas com e sem barra final.

## Validacoes executadas

- [x] `npm run typecheck`
- [x] `npm run build`
- [x] `npm run lint`
- [x] `npm run test`

## Prioridade sugerida

- [x] 1. Revisar copy e acentuacao do site inteiro.
- [x] 2. Ocultar ou completar `/conteudos`.
- [x] 3. Padronizar CTAs entre solicitacao e agendamento.
- [x] 4. Validar EmailJS obrigatoriamente antes do deploy.
- [x] 5. Adicionar testes dos fluxos comerciais.
- [x] 6. Atualizar ou remover documentacao antiga.
