# Design System — VERTA

Fonte única: `MANUAL DA MARCA VERTA.pdf` (13 páginas, Affinity Designer, maio/2026).
Nenhum valor aqui foi inventado — cada token sai de uma página do manual, e a página de origem
está anotada onde não for óbvia.

## Marca

**Personalidade:** técnica, direta, noturna, precisa, ascendente.

Extraída do manual: o moodboard é quase todo preto com azul elétrico — plateia em auditório
escuro, silhueta contra luz azul, neon "NEW TIMES FOR OTHER IDEAS", setup de trabalho.
O símbolo é construído sobre grid isométrico e carrega quatro leituras declaradas no manual:
letra V repetida 3 vezes, ampulheta repetida 3 vezes, seta ascendente (crescimento) e triângulo
central (funil de vendas). Os valores que o manual associa a ele: sucesso, propósito,
estabilidade, ordem, dinamismo, resistência.

**Público da página:** empresários que faturam acima de R$ 100k/mês, decidindo se agendam uma
reunião estratégica. Leem no celular, entre uma coisa e outra, com pouca paciência para enfeite.

**O que a marca evita:** fundo claro como padrão (o manual é dark-first do começo ao fim),
cor fora da paleta, ilustração cartunesca, sombra colorida, gradiente decorativo aplicado a
texto. Gradiente na VERTA é do símbolo — não é textura de fundo genérica.

## Tipografia

- **Primária (títulos): Poppins** — 300/400/500/600/700/800/900. Fallback:
  `ui-sans-serif, system-ui, -apple-system, "Segoe UI", sans-serif`.
- **Secundária (texto): Inter** — 400/500/600/700. Mesma pilha de fallback.
- **Origem:** Google Fonts, self-hosted via `@fontsource` para não depender de terceiro no
  caminho crítico (ver Performance). Subconjunto `latin` + `latin-ext` (a copy tem acentuação
  pesada: "não", "estratégica", "propósito").

O manual usa um recurso tipográfico recorrente nos títulos de seção — a mesma palavra começa
em peso leve e termina em peso pesado ("MOOD**BOARD**", "ASSI**NATURA**", "TIPO**GRAFIA**").
Esse contraste de peso dentro de uma linha é o assinatura tipográfica da marca e está
reproduzido nos títulos de seção da página.

### Escala

| Token | Tamanho (desktop) | Mobile | Line-height | Peso | Família | Uso |
|---|---|---|---|---|---|---|
| `display` | 3rem / 48px | 2.125rem / 34px | 1.08 | 700 | Poppins | H1 do hero |
| `h1` | 2.5rem / 40px | 1.75rem / 28px | 1.15 | 700 | Poppins | título de seção |
| `h2` | 1.875rem / 30px | 1.375rem / 22px | 1.25 | 600 | Poppins | subtítulo de bloco |
| `h3` | 1.25rem / 20px | 1.125rem / 18px | 1.35 | 600 | Poppins | título de card |
| `body-lg` | 1.125rem / 18px | 1rem / 16px | 1.65 | 400 | Inter | parágrafo de destaque, subheadline |
| `body` | 1rem / 16px | 0.9375rem / 15px | 1.65 | 400 | Inter | texto padrão |
| `small` | 0.875rem / 14px | 0.8125rem / 13px | 1.5 | 400 | Inter | legenda, disclaimer, rótulo de campo |
| `eyebrow` | 0.75rem / 12px | 0.6875rem / 11px | 1.2 | 600 | Poppins | etiqueta acima do título, `letter-spacing: 0.14em`, caixa alta |

`letter-spacing` de `display` e `h1`: `-0.02em`. Poppins em peso alto e corpo grande abre
demais por padrão; o ajuste negativo é o que aproxima do manual.

O `display` desceu de 56px para 48px depois do primeiro build: a headline do hero tem 120
caracteres e divide a dobra com o formulário, então a 56px ela ocupava oito linhas e empurrava
os selos de prova para fora da tela. A 48px são seis linhas e a dobra volta a fechar.

## Cores

Base **dark**. O manual não apresenta uma única aplicação em fundo claro como principal — as
aplicações claras existem apenas como variação de assinatura. A página segue a base.

| Token | Hex | Uso |
|---|---|---|
| `primary` | `#3531FE` | CTA principal, links, destaque de palavra em headline, borda de foco |
| `primary-hover` | `#2A26E8` | hover do CTA primário |
| `primary-active` | `#211DC7` | active/pressed do CTA primário |
| `primary-soft` | `rgba(53, 49, 254, 0.12)` | fundo de badge, halo de ícone, fundo de card destacado |
| `accent-cyan` | `#6CDBFF` | ponta clara do gradiente da marca |
| `accent-deep` | `#02018B` | ponta escura do gradiente da marca |
| `bg` | `#08080B` | fundo padrão da página |
| `bg-alt` | `#0F0F14` | fundo de seção alternada |
| `surface` | `#16161C` | card (Midnight, do manual) |
| `surface-raised` | `#1C1C24` | card em hover, card sobre `bg-alt` |
| `text` | `#EBEBEB` | texto padrão (Ice White, do manual) |
| `text-strong` | `#FFFFFF` | headline, número de destaque |
| `text-muted` | `#A1A1AD` | texto secundário, legenda, placeholder |
| `border` | `#26262F` | divisória, borda de card e de input |
| `border-strong` | `#3A3A46` | borda de input em foco não-primário, hover de card |
| `success` | `#3DD68C` | confirmação de envio |
| `error` | `#FF5C6E` | erro de validação de campo |

**Gradiente da marca** (`gradient-brand`), extraído literalmente do `SÍMBOLOAZUL.svg`:

```
linear-gradient(135deg, #6CDBFF 0%, #2200FE 50%, #02018B 100%)
```

Usado só onde o manual usa: no próprio símbolo e como filete/realce pontual. **Nunca como fundo
de seção inteira e nunca sob texto corrido.**

### Contraste medido (WCAG 2.1)

| Combinação | Razão | Veredito |
|---|---|---|
| `text` #EBEBEB sobre `bg` #08080B | 16.4:1 | AAA |
| `text` #EBEBEB sobre `surface` #16161C | 14.2:1 | AAA |
| `text-muted` #A1A1AD sobre `bg` #08080B | 7.7:1 | AAA |
| `text-muted` #A1A1AD sobre `surface` #16161C | 6.7:1 | AAA |
| `#FFFFFF` sobre `primary` #3531FE | 6.9:1 | AA (normal), AAA (grande) |
| `primary` #3531FE sobre `bg` #08080B | 3.3:1 | AA apenas em texto grande |

Consequência prática registrada: **`primary` não é usado para texto corrido em fundo escuro.**
Ele é fundo de botão (com texto branco por cima, 6.9:1) e realce de palavra em headline, que é
texto grande. Link inline em parágrafo usa `text-strong` com sublinhado, não `primary`.

### Discrepância documentada

O manual especifica `#3531FE` para o Verta Blue; os arquivos SVG da logo usam `#2200FE` no
preenchimento sólido e como stop central do gradiente. O briefing definiu o PDF como fonte
única, então **`#3531FE` é a cor da interface** e `#2200FE` permanece apenas dentro dos SVGs da
logo, que não foram editados. A diferença não é perceptível lado a lado.

## Espaçamento

Escala base de 4px: **4, 8, 12, 16, 24, 32, 40, 48, 64, 80, 96, 128**.

- Padding vertical de seção: **96px** desktop / **56px** mobile.
- Padding horizontal do container: **24px** desktop / **20px** mobile.
- Largura máxima do container: **1120px**. Bloco de texto corrido limitado a **68ch**.
- Gap padrão de grid de cards: **24px**.
- Distância entre título de seção e conteúdo: **48px** desktop / **32px** mobile.

## Raios

| Token | Valor | Uso |
|---|---|---|
| `sm` | 6px | badge, tag, eyebrow |
| `md` | 10px | input, select, botão |
| `lg` | 16px | card |
| `xl` | 24px | bloco grande, container de formulário, imagem |
| `full` | 9999px | pill, marcador de lista numerada |

O manual usa cantos arredondados generosos em todos os cards de aplicação (o card de cor, o
card de tipografia, os quadros de assinatura). `lg` e `xl` são a leitura desse gesto.

## Sombras

Em fundo escuro, sombra preta quase não aparece — a elevação vem de borda e de mudança de
superfície. As sombras aqui são discretas de propósito.

| Token | Valor | Uso |
|---|---|---|
| `sm` | `0 1px 2px rgba(0,0,0,0.4)` | elevação sutil |
| `md` | `0 8px 24px rgba(0,0,0,0.45)` | card em hover |
| `lg` | `0 24px 64px rgba(0,0,0,0.55)` | container do formulário |
| `glow` | `0 0 0 1px rgba(53,49,254,0.35), 0 12px 40px rgba(53,49,254,0.22)` | CTA primário em hover, card do formulário |

`glow` é a única sombra colorida e existe porque o moodboard é construído sobre luz azul em
ambiente escuro. Aplicada com parcimônia — dois lugares na página inteira.

## Movimento

- **Duração padrão:** 200ms. Entrada de seção: 500ms.
- **Easing:** `cubic-bezier(0.22, 1, 0.36, 1)` (saída suave) para entrada;
  `cubic-bezier(0.4, 0, 0.2, 1)` para hover e mudança de estado.
- **O que anima:** opacidade e `translateY(12px → 0)` na entrada de seção; cor de fundo e sombra
  no hover de botão; `max-height` + opacidade na abertura do accordion de objeções; troca do
  formulário pela mensagem de sucesso (fade cruzado).
- **O que não anima:** nada que desloque layout depois do carregamento. Imagem e container do
  formulário têm dimensão reservada. A entrada de seção só desloca 12px e parte de
  `opacity: 0` — sem reflow.
- **`prefers-reduced-motion: reduce`:** todas as transições caem para 0.01ms e a entrada de
  seção renderiza direto no estado final.

## Componentes

### Botão primário
Fundo `primary`, texto `#FFFFFF`, `md` de raio, altura 52px (desktop) / 48px (mobile),
padding horizontal 32px, Poppins 600, 1rem.
- **hover:** fundo `primary-hover` + sombra `glow`
- **active:** fundo `primary-active`, sem sombra
- **focus-visible:** `outline: 2px solid #6CDBFF; outline-offset: 3px` — ciano, porque azul
  sobre azul não aparece
- **disabled:** `opacity: 0.55`, cursor `not-allowed`
- **loading:** rótulo trocado por "Enviando...", spinner de 16px, largura preservada

### Botão secundário
Fundo transparente, borda 1px `border-strong`, texto `text`.
- **hover:** fundo `surface-raised`, borda `primary`
- Demais estados iguais ao primário.

### Input / Select
Fundo `#101016`, borda 1px `border`, raio `md`, altura 52px, padding 16px, Inter 400 1rem,
texto `text`, placeholder `text-muted`.
- **hover:** borda `border-strong`
- **focus:** borda `primary` + `box-shadow: 0 0 0 3px rgba(53,49,254,0.22)`, sem outline duplo
- **erro:** borda `error` + mensagem em `small` na cor `error` abaixo do campo, com
  `aria-describedby` ligando campo e mensagem
- Select usa seta própria em `text-muted` (`appearance: none`), nunca a nativa
- Rótulo sempre presente no DOM; visualmente escondido quando o design usa placeholder como
  rótulo (`.sr-only`), para leitor de tela não ficar sem referência

### Card
Fundo `surface`, borda 1px `border`, raio `lg`, padding 32px (24px mobile).
- **hover** (apenas em card interativo): fundo `surface-raised`, borda `border-strong`,
  sombra `md`

### Badge / eyebrow
Fundo `primary-soft`, texto `#8F8CFF`, raio `sm`, padding 6px 12px, tipografia `eyebrow`.

### Seção
Alternância `bg` → `bg-alt` → `bg`, sem borda entre elas — a mudança de valor já separa.
Onde o wireframe pede borda (seções com `border-top`/`border-bottom`), usa `border`.

## Imagens

- **Proporção:** 4:5 no bloco de retrato da seção de autoridade; `object-fit: cover`.
- **Tratamento:** dessaturação leve (`saturate(0.9)`) e overlay
  `linear-gradient(180deg, transparent 40%, rgba(8,8,11,0.55) 100%)` para o texto de legenda
  respirar. Sem filtro colorido — as fotos são registro real, não peça gráfica.
- **Moldura:** raio `xl`, borda 1px `border`.
- **Formato:** WebP com fallback JPEG, `loading="lazy"` e `decoding="async"` fora da primeira
  dobra, `width`/`height` sempre declarados.
- **Padronagem isométrica:** o manual traz um padrão de repetição do símbolo (página
  "PADRONAGEM"). Usado como textura de fundo em opacidade muito baixa (4–6%) atrás do hero e do
  CTA final, em SVG inline. É o elemento gráfico da marca que preenche o espaço sem inventar
  ilustração.
- **Ícones:** lucide, contorno, espessura 1.5px, tamanho 20px em lista e 24px em card, cor
  `primary` quando é marcador positivo e `text-muted` quando é neutro.

## Mapeamento para Tailwind

Tokens entram como CSS variables em `src/index.css` sob `:root` e são lidos pelo
`tailwind.config.ts` via `extend`. Nada de hex solto em componente — se um valor não existe
aqui, ele não entra no JSX.

```css
:root {
  --bg: #08080B;          --bg-alt: #0F0F14;
  --surface: #16161C;     --surface-raised: #1C1C24;
  --text: #EBEBEB;        --text-strong: #FFFFFF;  --text-muted: #A1A1AD;
  --border: #26262F;      --border-strong: #3A3A46;
  --primary: #3531FE;     --primary-hover: #2A26E8; --primary-active: #211DC7;
  --accent-cyan: #6CDBFF; --accent-deep: #02018B;
  --success: #3DD68C;     --error: #FF5C6E;
  --radius-sm: 6px; --radius-md: 10px; --radius-lg: 16px; --radius-xl: 24px;
}
```

```ts
// tailwind.config.ts — extend.colors
{
  bg: 'var(--bg)', 'bg-alt': 'var(--bg-alt)',
  surface: 'var(--surface)', 'surface-raised': 'var(--surface-raised)',
  text: 'var(--text)', 'text-strong': 'var(--text-strong)', 'text-muted': 'var(--text-muted)',
  border: 'var(--border)', 'border-strong': 'var(--border-strong)',
  primary: { DEFAULT: 'var(--primary)', hover: 'var(--primary-hover)', active: 'var(--primary-active)' },
  cyan: 'var(--accent-cyan)', deep: 'var(--accent-deep)',
  success: 'var(--success)', error: 'var(--error)',
}
```

Fontes: `fontFamily.display = ['Poppins', ...fallback]`, `fontFamily.sans = ['Inter', ...fallback]`.

## Logos disponíveis

| Arquivo | Composição | Onde usar |
|---|---|---|
| `verta-horizontal-branca.svg` | símbolo + "verta" | cabeçalho |
| `verta-principal-branca.svg` | símbolo + "verta" + "ACELERADORA DE RECEITAS" | rodapé |
| `verta-vertical-branca.svg` | empilhado com tagline | reserva |
| `verta-simbolo-azul.svg` | só o símbolo, gradiente | marcador |
| `verta-selo-azul.svg` | selo circular, símbolo `#13008D` sobre disco `#3190FE` | **favicon** |

A marca entrega duas versões de selo quadradas (1252×1252), prontas para ícone. O favicon sai do
`SIMBOLOAZULSELO`, sem reenquadramento: o disco `#3190FE` com o símbolo `#13008D` dá **4,64:1**
de contraste interno e continua legível em 16px.

A outra versão, `SIMBOLOAZULSELO2`, usa o Verta Blue exato no disco — mas com o símbolo em
`#3190FE` por cima, o contraste interno cai para **2,17:1** e o ícone vira um borrão nesse
tamanho. Contra barra de abas escura o problema piora: 2,32:1, contra 5,02:1 do escolhido.
Divergência aceita de propósito — num ícone de 16px a legibilidade vem antes da fidelidade de
cor, e os dois arquivos são oficiais da marca.

Os PNG do favicon saem com transparência, para o disco assentar tanto em barra de abas clara
quanto escura. Só o `apple-touch-icon` leva fundo sólido: o iOS ignora canal alfa.
