# Workflow: Como Adicionar Projetos Sob Medida no Site

---

## Passo a Passo

### 1. Acessar o Admin do Shopify
- Entre no admin do Shopify
- Vá em **Products** → **Add product**

### 2. Informações Básicas do Projeto
Preencha os seguintes campos:

**Título**
- Nome do projeto (ex: "Estante Sob Medida - Cliente X")

**Descrição**
- Conte a história do projeto
- Descreva os materiais utilizados
- Explique desafios ou detalhes especiais
- Dimensões ou características únicas

**Mídia (Fotos)**
- Adicione todas as fotos do projeto
- Use fotos de qualidade
- A primeira foto será a imagem de destaque
- Adicione fotos de diferentes ângulos

### 3. Organização

**Status de Venda**
- ⚠️ **Importante:** Desmarque a opção **"Available for sale"**
- Isso garante que o projeto apareça no site mas não pode ser comprado

**Collections**
- Adicione o produto à collection **"Projetos Sob Medida"**
- Isso fará o projeto aparecer automaticamente na seção correta do site

### 4. Informações Adicionais (Metafields)

<!--  CORRIGIR METAFIELDS TUTORIAL -->

Role até a seção **Metafields** e preencha:

**Nome do Cliente** (opcional)
- Campo: `custom.client_name`
- Você pode omitir se preferir manter privacidade

**Ano do Projeto**
- Campo: `custom.project_year`
- Ex: 2024, 2025

**Tipo de Projeto**
- Campo: `custom.project_type`
- Ex: "Cozinha", "Estante", "Mesa", "Armário"

**Materiais**
- Campo: `custom.materials`
- Ex: "Madeira de Nogueira, Aço Inox, Vidro Temperado"

**Localização** (opcional)
- Campo: `custom.location`
- Ex: "São Paulo - SP", "Curitiba - PR"

### 5. Traduções (Multi-idioma)

Se você quiser que o projeto apareça em outros idiomas, preencha:

**Título em outros idiomas:**
- `translations.title_pt` - Português
- `translations.title_en` - Inglês
- `translations.title_es` - Espanhol

**Descrição em outros idiomas:**
- `translations.description_pt` - Português
- `translations.description_en` - Inglês
- `translations.description_es` - Espanhol

### 6. Publicar

- Clique em **Save**
- O projeto aparecerá automaticamente na seção "Projetos Sob Medida" do site

---

## Dicas Importantes

✅ **Sempre Desabilite Vendas:** Projetos sob medida não devem estar disponíveis para compra

✅ **Use a Collection Correta:** Sempre adicione à "Projetos Sob Medida" para aparecer no lugar certo

---

## Perguntas Frequentes

**Q: Posso editar um projeto depois de publicado?**
A: Sim! Basta ir em Products, encontrar o projeto e editar normalmente.

**Q: E se eu quiser remover um projeto do site?**
A: Você pode:
- Remover da collection "Projetos Sob Medida"
- Ou mudar o status para "Draft"

**Q: Quantas fotos posso adicionar?**
A: Recomendamos entre 3-10 fotos por projeto. Qualidade > Quantidade.

**Q: Preciso preencher todos os metafields?**
A: Não! Os únicos obrigatórios são título, descrição e fotos. Os metafields são opcionais mas ajudam a organizar.

---

## Contato para Suporte

Se tiver dúvidas ou problemas para adicionar um projeto, entre em contato com o desenvolvedor do site.