# Desenvolvimento Assistido por IA - Relatório

**Ferramentas Utilizadas:** Stitch AI (Design/Mockups), Antigravity (Pair Programming/Code) e Gemini (Arquitetura).
**Etapas de Maior Impacto:** A IA acelerou drasticamente a **composição visual** (Stitch) e o **boilerplate técnico** inicial, permitindo focar em refinamentos de UX.
**Ajustes Manuais e Motivações:**
1. **Tipagem do Framer Motion:** Corrigi manualmente uniões de tipos literais para evitar erros de compilação no build da Vercel.
2. **Performance de Animação:** Refatorei o efeito de shadow para utilizar apenas `opacity` e `transform`, garantindo processamento via GPU.
3. **Acessibilidade (a11y):** Injeção manual de `aria-labels` e tratamento de `useReducedMotion` para conformidade técnica.
4. **Deploy Monorepo:** Configuração manual do `Root Directory` na Vercel para suporte a múltiplas aplicações estáticas.