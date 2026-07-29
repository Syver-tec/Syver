# Syver - Site Institucional

Site institucional multi-página da Syver, empresa de soluções em tecnologia (desenvolvimento web, suporte de TI e automação de processos). Desenvolvido com HTML, CSS e JavaScript puros, sem frameworks ou build step.

## 🚀 Funcionalidades

### Design & Experiência do Usuário
- **Tema escuro moderno:** visual limpo, com tons escuros e detalhes em azul, alinhado à identidade da marca
- **Responsivo:** layout mobile-first, adaptado para todos os dispositivos
- **Animações suaves:** fade-in, hover, rolagem suave e mensagens de sucesso animadas
- **Transições entre páginas:** navegação suavizada via View Transitions API (compatível com Chrome/Edge recentes; degrada normalmente nos demais navegadores)
- **Tipografia exclusiva:** fonte Space Grotesk customizada para toda a identidade visual
- **Logo personalizada:** logo Syver em destaque no header e footer
- **Favicons e manifestos:** ícones para todas as plataformas e dispositivos
- **Performance:** carregamento assíncrono do Font Awesome (`preload`) e `loading="lazy"` em imagens abaixo da dobra

### Navegação & Estrutura
- **Menu fixo:** navegação sempre visível no topo, com destaque automático da página atual
- **Menu mobile:** ícone de hambúrguer para dispositivos móveis
- **Rolagem suave:** navegação fluida entre seções e páginas
- **Botão "Voltar ao Topo"**
- **WhatsApp flutuante:** botão fixo de contato rápido em todas as páginas

### Páginas
1. **Início (`index.html`):** hero, resumo "quem somos", teaser de serviços, projetos em destaque (visual bento), depoimentos e chamada para ação
2. **Sobre (`sobre.html`):** quem somos, missão/visão/valores e equipe
3. **Serviços (`servicos.html`):** páginas detalhadas de Desenvolvimento Web, Suporte de TI e Automação de Processos, cada uma com "o que fazemos", "como funciona", benefícios, público-alvo e CTA própria
4. **Portfólio (`portfolio.html`):** tipos de projeto, sistema Portex (galeria interativa de imagens, perfis de acesso e stack técnica) e carrossel de sites em destaque
5. **Contato (`contato.html`):** canais de contato, formulário de orçamento (AJAX + Formspree) e perguntas frequentes

### Interatividade
- **Formulários AJAX:** orçamento e newsletter enviam via AJAX para o Formspree, exibindo mensagem de sucesso animada sem redirecionamento
- **Galeria interativa:** miniaturas clicáveis trocam a imagem principal na seção do sistema Portex (Portfólio)
- **FAQ em acordeão:** perguntas frequentes expansíveis nativamente (`<details>`), sem JavaScript adicional
- **Acessibilidade:** navegação por teclado e contraste adequado

## 📁 Estrutura do Projeto

```
Syver/
├── index.html               # Início
├── sobre.html                # Sobre a Syver
├── servicos.html              # Desenvolvimento Web, Suporte de TI e Automação
├── portfolio.html             # Sistema Portex + sites em destaque
├── contato.html               # Contato, orçamento e FAQ
├── sitemap.xml                # Mapa do site para SEO
├── css/
│   └── style.css              # Estilos de todas as páginas
├── js/
│   └── script.js              # Funcionalidades JS compartilhadas
├── assets/
│   ├── img/                   # Imagens, logo, favicons, manifestos
│   │   └── sistemas/          # Capturas de tela dos sistemas (ex: Portex)
│   └── fonts/                 # Fontes customizadas (Space Grotesk)
└── README.md                  # Este arquivo
```

## 🛠️ Tecnologias Utilizadas

- **HTML5:** estrutura semântica, multi-página
- **CSS3:** Grid, Flexbox, variáveis, animações, fontes customizadas e View Transitions API
- **JavaScript (ES6+):** funcionalidades interativas e AJAX, sem dependências externas de build
- **Font Awesome:** ícones (carregamento assíncrono)
- **Swiper:** carrossel de sites em destaque (apenas na página Portfólio)
- **Formspree:** recebimento de formulários sem backend

## 🎨 Paleta de Cores
- **Fundo principal:** `#373B43`
- **Fundo secundário:** `#2B3A5B`
- **Azul destaque:** `#1A9BF6`
- **Texto:** `#FFFFFF`
- **Cinza claro:** `#AAB2BD`

## 🚀 Como Rodar Localmente

1. **Clone ou baixe** os arquivos do projeto
2. **Abra** o `index.html` no navegador (ou sirva a pasta com um servidor estático local)
3. **Navegue** pelas páginas pelo menu — todos os links são relativos, sem necessidade de build

## 🌐 Deploy no Netlify

1. Acesse [netlify.com](https://netlify.com)
2. Faça login ou crie uma conta gratuita
3. Clique em "Add new site" > "Deploy manually"
4. Arraste a pasta do projeto (ou selecione os arquivos) para a área de upload
5. Aguarde o deploy
6. Renomeie o site para `syver` (opcional, em Site Settings)
7. Compartilhe a URL gerada pelo Netlify (ex: `https://syver.netlify.app`)

## 📝 Personalização

- **Logo:** substitua `assets/img/logo.png` pela sua logo
- **Favicons:** atualize os arquivos em `assets/img/` se quiser outros ícones
- **Informações de contato:** edite a seção de contato em `contato.html`
- **Serviços:** atualize cada seção correspondente em `servicos.html`
- **Portfólio e sistemas:** adicione novos projetos em `portfolio.html`; para novos sistemas, siga o padrão da seção "Sistemas Desenvolvidos" (galeria + descrição + link de acesso)
- **Imagens de sistemas:** adicione em `assets/img/sistemas/`
- **Cores e fontes:** altere as variáveis no início do `css/style.css`
- **Fontes:** substitua ou adicione arquivos `.woff2` em `assets/fonts/` e ajuste o `@font-face` no CSS
- **Sitemap:** ao adicionar ou remover páginas, atualize `sitemap.xml`

## 🔧 Dicas de Melhoria
- Integre formulários com outros serviços se desejar (ex: EmailJS, Netlify Forms)
- Adicione Google Analytics ou Google Search Console para monitoramento
- Use domínio próprio para mais profissionalismo
- Otimize novas imagens antes de subir (compressão) para manter a performance

## 🤝 Contribuição

1. **Fork** o repositório
2. **Crie** uma branch para sua feature
3. **Faça** as alterações
4. **Abra** um Pull Request

## 📄 Licença

Este projeto é open source sob a licença MIT.

## 📞 Suporte

Dúvidas ou sugestões? Entre em contato:
- **E-mail:** contato@syver.tec.br
- **WhatsApp:** +55 (81) 99713-0782

---

**Feito com ❤️ para a Syver**

*Última atualização: Julho de 2026*
