# AGENTS.md — templatesiteong (Coração Quentinho)

## Visão Geral
Site institucional de página única para a ONG **Coração Quentinho** (Recife - PE). Baseado no template `ongfpd` (Fundação Projeto Diferente), com conteúdo real da ONG e paleta de cores própria.

## Stack
- **HTML + CSS + JS vanilla** (zero dependências, zero build tools)
- **Fonte**: Comic Shanns (em `font/Regular.woff2` e `font/Bold.woff2`) + Google Fonts (Caveat + Inter)
- **Ícones**: Nerd Fonts via CDN (`https://www.nerdfonts.com/assets/css/webfont.css`), classes `nf nf-md-*`

## Paleta
```
#F74242  vermelho principal (--gmain)
#FC7057  coral (--glive / --gmid)
#EDE3DC  fundo creme (--cream)
#F8E7DC  creme claro (--gpast / --offw)
#221B16  texto escuro (--txt)
#B82323  vermelho profundo (--gdeep, footer)
#C92B2B  vermelho sóbrio (--gdark, botões/títulos)
```

## Estrutura
```
templatesiteong/
├── index.html          ← página única
├── css/style.css       ← todos os estilos
├── js/script.js        ← behaviors (peças, contadores, modais, PIX, vídeo)
├── img/                ← todas as mídias (webp salvo vídeo/poster)
├── font/               ← Regular.woff2 + Bold.woff2
└── AGENTS.md           ← este arquivo
```

## Seções
1. **Hero** — logo + texto + botão doar + imagem
2. **Pilares** — 4 cards clicáveis com modais
3. **Sobre / Quem Somos** — texto + contadores (`data-count`) + celular com vídeo
4. **Projetos** — 4 cards reais + imagem
5. **Galeria** — grid 6 fotos linkadas ao Instagram
6. **Diretoria** — texto + foto
7. **Agradecimentos** — texto + botão voluntário + imagem
8. **Footer** — 3 colunas + contatos reais

## Modais
- **modal-doacao**: chave PIX real (copia via botão)
- **modal-voluntario**: guia de voluntariado + WhatsApp real
- **modal-pilar1..4**: textos genéricos dos pilares

## Regras
1. **NUNCA** usar Lucide Icons — sempre Nerd Fonts (`nf nf-md-*`)
2. **NUNCA** adicionar frameworks ou build tools
3. Bordas orgânicas assimétricas no padrão (não `50%` em selos/botões; chips/badges podem usar `999px`)
4. Imagens em `img/*.webp` (não `.png`); vídeo em `.mp4`; texturas/fundos também em `img/`
5. Manter a paleta definida acima; ler as variáveis de `css/style.css` (bloco `:root`)
6. Textos e contadores ("Pessoas atendidas", etc.) ainda são **genéricos/placeholders** — trocar pelos números reais quando o cliente fornecer
7. Texto do hero, tagline do footer e descrições do Sobre/Diretoria são **genéricos** — substituir por conteúdo real da ONG
8. Originais de imagem (png/jpg) podem ser descartados depois da conversão para webp — o site só usa o que está em `img/`