# LP VERTA — Reunião estratégica

Landing page de captação da VERTA, construída a partir do wireframe aprovado.

- **Stack:** Vite + React + TypeScript + Tailwind
- **Design system:** [`DESIGN.md`](./DESIGN.md) — todos os valores visuais saem de lá
- **Conversão:** formulário no hero → webhook n8n → planilha `VERTA Leads BD`

## Rodando

```bash
npm install
cp .env.example .env    # preencha VITE_WEBHOOK_URL
npm run dev
```

## Build

```bash
npm run build      # gera dist/
npm run preview    # serve o build em :4173
```

Meça performance sempre contra o build, nunca contra o dev server.

## Variáveis de ambiente

| Variável | Uso |
|---|---|
| `VITE_WEBHOOK_URL` | URL de **produção** do webhook do n8n. A de teste só responde com o editor aberto. |

Cadastre também no painel da Vercel (Settings → Environment Variables), nos três ambientes.
Variável nova só vale depois de um redeploy — a Vercel injeta no momento do build.

## Estrutura

```
src/
  components/
    sections/     uma seção do wireframe por arquivo
    LeadForm.tsx  formulário, honeypot, UTMs, retry
    Reveal.tsx    entrada de seção (respeita prefers-reduced-motion)
    Padrao.tsx    padronagem isométrica da marca
  lib/
    phone.ts      normalização e máscara de telefone BR
    tracking.ts   captura e persistência de UTM, dataLayer
    config.ts     webhook e timestamp local
```

## Observações

- **Sem GTM nesta versão.** O `dataLayer.push({ event: 'lead_submit' })` já acontece;
  falta apenas o container. Quando existir, o snippet entra no `index.html` e os eventos
  passam a chegar sem tocar no resto do código.
- A seção "O sistema" do wireframe está fora: a copy dela era placeholder.
- Há **um** formulário, no hero. O CTA final rola até ele.
