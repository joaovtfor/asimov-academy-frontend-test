<!-- BEGIN:nextjs-agent-rules -->
# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` before writing any code. Heed deprecation notices.
<!-- END:nextjs-agent-rules -->


# Auditoria de SEO Técnico e Performance (Monitoramento Automático)

Sempre que um componente for gerado ou alterado em `src/components/`, os alertas correspondentes serão registrados aqui.

## ⚠️ Auditoria Inicial (Baseada no estado atual)

### `app/layout.tsx`
- **[SEO] Metadados**: Ausência de metadados OpenGraph (`openGraph` no objeto `metadata`).

### `src/components/Hero.tsx`
- **[Performance] Formatos Legados**: Uso de arquivos `.png` (`/amazon.png`, `/dribbble.png`, `/hubspot.png`, `/notion.png`, `/netflix.png`, `/hero-logo.png`). O padrão obrigatório é `.webp` ou `.svg`.

### `src/components/Services.tsx`
- **[Performance] Formatos Legados**: Referências a arquivos `.png` nas imagens (ex: `/services/seo.png`).
- **[Acessibilidade] Labels**: Links com texto genérico "Learn more". É necessário incluir `aria-label` descritivos contextualizando a ação.

### `src/components/CaseStudies.tsx`
- **[Acessibilidade] Labels**: Links com texto genérico "Learn more". Adicionar atributo `aria-label` descritivo.

### `src/components/CtaBanner.tsx`
- **[Performance] Formatos Legados**: Referência a arquivo `.png` (`/cta-illustration.png`).
- **[SEO/Semântica] Hierarquia de Cabeçalhos**: Componente inicia com um `h3` mas não possui um `h2` interno. É necessário garantir que ele sempre seja renderizado em uma página onde um `h2` o preceda para manter a estrutura semântica correta.
