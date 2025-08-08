# Configuração do EmailJS para o Formulário de Contato

Este documento explica como configurar o EmailJS para o formulário de contato do CraftCode Digital Hub.

## Passo a Passo

### 1. Criar uma conta no EmailJS

1. Acesse [EmailJS](https://www.emailjs.com/) e crie uma conta gratuita
2. O plano gratuito permite até 200 emails por mês, o que deve ser suficiente para um site institucional

### 2. Configurar um serviço de email

1. No dashboard do EmailJS, vá para "Email Services" e clique em "Add New Service"
2. Escolha seu provedor de email (Gmail, Outlook, etc.)
3. Siga as instruções para conectar sua conta de email
4. Anote o `Service ID` gerado

### 3. Criar um template de email

1. No dashboard, vá para "Email Templates" e clique em "Create New Template"
2. Crie um template para o email que será enviado quando alguém preencher o formulário
3. Use as seguintes variáveis no template:
   - `{{from_name}}` - Nome da pessoa que enviou o formulário
   - `{{from_email}}` - Email da pessoa
   - `{{company}}` - Empresa (se fornecida)
   - `{{message}}` - Mensagem do formulário
   - `{{reply_to}}` - Email para resposta (mesmo que from_email)
4. Anote o `Template ID` gerado

### 4. Obter a Public Key

1. No dashboard, vá para "Account" > "API Keys"
2. Copie sua "Public Key"

### 5. Configurar as variáveis de ambiente

1. Crie um arquivo `.env.local` na raiz do projeto (este arquivo não deve ser commitado no git)
2. Adicione as seguintes variáveis:

```
VITE_EMAILJS_SERVICE_ID=seu_service_id
VITE_EMAILJS_TEMPLATE_ID=seu_template_id
VITE_EMAILJS_PUBLIC_KEY=sua_public_key
```

3. Para ambiente de produção, configure estas mesmas variáveis no seu serviço de hospedagem

## Testando o Formulário

1. Em ambiente de desenvolvimento, o formulário simulará envios bem-sucedidos mesmo sem as credenciais corretas
2. Para testar o envio real de emails, configure as variáveis de ambiente corretamente
3. Preencha o formulário e verifique se o email é recebido no endereço configurado

## Solução de Problemas

- Se os emails não estiverem sendo enviados, verifique o console do navegador para mensagens de erro
- Confirme que as credenciais do EmailJS estão corretas
- Verifique se o serviço de email está ativo no dashboard do EmailJS
- Certifique-se de que o template está configurado corretamente com as variáveis esperadas

## Limitações do Plano Gratuito

- 200 emails por mês
- Sem suporte a anexos
- Sem suporte a emails transacionais
- Para necessidades mais avançadas, considere fazer upgrade para um plano pago
