// UTMs e dataLayer.
//
// Nota de contexto: esta LP subiu SEM container do GTM (decisão do briefing, ver DECISOES.md).
// Os pushes abaixo acontecem mesmo assim — hoje ninguém escuta, e no dia em que o snippet do
// GTM entrar no index.html os eventos passam a chegar sem tocar em nada aqui.

export const CHAVES_UTM = [
  'utm_source',
  'utm_medium',
  'utm_campaign',
  'utm_term',
  'utm_content',
] as const

export type ChaveUtm = (typeof CHAVES_UTM)[number]
export type Utms = Record<ChaveUtm, string>

const CHAVE_STORAGE = 'verta_utms'

declare global {
  interface Window {
    dataLayer?: Record<string, unknown>[]
  }
}

const vazio = (): Utms =>
  CHAVES_UTM.reduce((acc, k) => ({ ...acc, [k]: '' }), {} as Utms)

/**
 * Lê as UTMs da query string na primeira visita e persiste em sessionStorage.
 *
 * O visitante costuma chegar pelo anúncio, navegar e só converter depois — se lêssemos a query
 * string só na hora do envio, o lead chegaria sem origem. Por isso persiste.
 */
export function capturarUtms(): Utms {
  if (typeof window === 'undefined') return vazio()

  const query = new URLSearchParams(window.location.search)
  const daQuery = vazio()
  let temNaQuery = false

  for (const chave of CHAVES_UTM) {
    const valor = query.get(chave)
    if (valor) {
      daQuery[chave] = valor
      temNaQuery = true
    }
  }

  try {
    if (temNaQuery) {
      window.sessionStorage.setItem(CHAVE_STORAGE, JSON.stringify(daQuery))
      return daQuery
    }

    const salvo = window.sessionStorage.getItem(CHAVE_STORAGE)
    if (salvo) return { ...vazio(), ...(JSON.parse(salvo) as Partial<Utms>) }
  } catch {
    // sessionStorage bloqueado (aba anônima com restrição, iframe): segue com o que veio na URL.
  }

  return daQuery
}

export function pushDataLayer(evento: Record<string, unknown>): void {
  if (typeof window === 'undefined') return
  window.dataLayer = window.dataLayer || []
  window.dataLayer.push(evento)
}

export function eventoLeadSubmit(formId: string): void {
  pushDataLayer({ event: 'lead_submit', form_id: formId, method: 'form' })
}
