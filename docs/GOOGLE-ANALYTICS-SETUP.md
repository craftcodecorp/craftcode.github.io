# Configuração do Google Analytics

Este documento descreve como o Google Analytics (GA4) foi implementado no site da CraftCode.

## Visão Geral

O Google Analytics 4 (GA4) foi implementado para rastrear o comportamento dos usuários no site, fornecendo insights valiosos sobre o tráfego, interações e conversões. A implementação utiliza a biblioteca `react-ga4` para integração com o React.

## Arquivos Modificados

1. **src/lib/analytics-init.ts** - Arquivo de inicialização do Google Analytics
2. **src/App.tsx** - Implementação do rastreamento de páginas
3. **.env.development** e **.env.example** - Configuração das variáveis de ambiente
4. **.github/workflows/deploy.yml** - Configuração do CI/CD para incluir a variável do GA

## Variáveis de Ambiente

O ID de medição do Google Analytics é configurado através de variáveis de ambiente:

```
VITE_GA_MEASUREMENT_ID=G-XXXXXXXXXX
```

- Em desenvolvimento, um ID de espaço reservado é usado e o modo de teste é ativado
- Em produção, o ID real deve ser configurado como um secret no GitHub

## Como Funciona

1. **Inicialização**: O Google Analytics é inicializado quando o aplicativo é carregado através da função `initializeAnalytics()` no `App.tsx`

2. **Rastreamento de Páginas**: Um componente `PageViewTracker` foi adicionado ao `BrowserRouter` para rastrear automaticamente as visualizações de página quando o usuário navega pelo site

3. **Rastreamento de Eventos**: A função `trackEvent()` está disponível para rastrear eventos personalizados quando necessário

## Configuração em Produção

Para configurar o Google Analytics em produção:

1. Crie uma propriedade GA4 no [Google Analytics](https://analytics.google.com/)
2. Obtenha o ID de medição (formato G-XXXXXXXXXX)
3. Adicione o ID como um secret no GitHub:
   - Nome: `GA_MEASUREMENT_ID`
   - Valor: Seu ID de medição do GA4

## Funções Disponíveis

O arquivo `src/lib/analytics-init.ts` fornece as seguintes funções:

- `initializeAnalytics()`: Inicializa o Google Analytics
- `trackPageView(path)`: Rastreia uma visualização de página
- `trackEvent(category, action, label?, value?)`: Rastreia um evento personalizado

## Exemplo de Uso para Eventos Personalizados

Para rastrear eventos personalizados, como cliques em botões ou envios de formulários, importe a função `trackEvent` e use-a da seguinte forma:

```tsx
import { trackEvent } from '@/lib/analytics-init';

// Em um manipulador de eventos
const handleButtonClick = () => {
  trackEvent('Interação', 'Clique no Botão', 'Botão Fale Conosco');
};

// Em um envio de formulário
const handleFormSubmit = () => {
  trackEvent('Formulário', 'Envio', 'Formulário de Contato');
};
```

## Modo de Desenvolvimento

Em ambiente de desenvolvimento:
- O modo de teste é ativado (`testMode: true`)
- Os eventos são registrados no console, mas não são enviados para o Google Analytics
- O debug está ativado para facilitar a depuração

## Verificação da Implementação

Para verificar se o Google Analytics está funcionando corretamente:

1. Substitua o ID de espaço reservado por um ID de medição real
2. Abra o console do navegador para ver os logs de rastreamento
3. Use o Google Analytics Debugger ou o GA Debug Chrome Extension para verificar os eventos
4. Verifique o painel do Google Analytics para confirmar que os dados estão sendo recebidos
