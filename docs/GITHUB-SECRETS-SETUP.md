# Configuração de Secrets no GitHub para o EmailJS

Este documento explica como configurar os secrets no GitHub para permitir que o workflow de deploy utilize as credenciais do EmailJS corretamente.

## Passo a Passo para Configurar Secrets no GitHub

### 1. Acessar as Configurações do Repositório

1. Acesse o repositório do projeto no GitHub
2. Clique na aba "Settings" (Configurações)
3. No menu lateral esquerdo, clique em "Secrets and variables" e depois em "Actions"

### 2. Adicionar os Secrets Necessários

Adicione os seguintes secrets (um por vez):

1. **EMAILJS_SERVICE_ID**
   - Nome: `EMAILJS_SERVICE_ID`
   - Valor: Seu Service ID do EmailJS (obtido no dashboard do EmailJS)

2. **EMAILJS_TEMPLATE_ID**
   - Nome: `EMAILJS_TEMPLATE_ID`
   - Valor: Seu Template ID do EmailJS (obtido no dashboard do EmailJS)

3. **EMAILJS_PUBLIC_KEY**
   - Nome: `EMAILJS_PUBLIC_KEY`
   - Valor: Sua Public Key do EmailJS (obtida no dashboard do EmailJS)

Para cada secret:
- Clique no botão "New repository secret"
- Preencha o nome do secret conforme indicado acima
- Cole o valor correspondente
- Clique em "Add secret"

### 3. Verificar a Configuração

1. Após adicionar todos os secrets, eles aparecerão na lista de secrets do repositório
2. Os valores dos secrets não serão visíveis, apenas os nomes
3. Os secrets estarão disponíveis para uso nos workflows do GitHub Actions

### 4. Testar o Deploy

1. Faça um commit e push para a branch principal (main ou develop)
2. Acesse a aba "Actions" no GitHub para acompanhar o progresso do workflow
3. Verifique se o build e o deploy foram concluídos com sucesso
4. Teste o formulário de contato no site publicado para confirmar que o EmailJS está funcionando corretamente

## Observações Importantes

- Os secrets no GitHub são criptografados e só podem ser acessados pelos workflows do GitHub Actions
- Nunca compartilhe suas credenciais do EmailJS em arquivos públicos do repositório
- Se precisar atualizar um secret, você precisará criar um novo com o mesmo nome
- Para ambientes de desenvolvimento local, continue usando o arquivo `.env.local` (não commitado no git)

## Solução de Problemas

Se o formulário não estiver funcionando no ambiente de produção:

1. Verifique se os secrets foram configurados corretamente no GitHub
2. Confirme que os nomes dos secrets correspondem exatamente aos esperados pelo workflow
3. Verifique os logs do workflow de deploy para identificar possíveis erros
4. Teste o formulário em ambiente de desenvolvimento para confirmar que a integração com EmailJS está funcionando corretamente
