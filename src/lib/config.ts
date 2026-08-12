export const WEBHOOK_URL = import.meta.env.VITE_WEBHOOK_URL ?? ''

export const FORM_ID = 'reuniao-estrategica'

/** Timestamp ISO com o offset local, não em UTC — quem lê a planilha lê no fuso de Brasília. */
export function timestampLocalISO(): string {
  const agora = new Date()
  const offsetMin = -agora.getTimezoneOffset()
  const sinal = offsetMin >= 0 ? '+' : '-'
  const pad = (n: number) => String(Math.floor(Math.abs(n))).padStart(2, '0')

  return (
    `${agora.getFullYear()}-${pad(agora.getMonth() + 1)}-${pad(agora.getDate())}` +
    `T${pad(agora.getHours())}:${pad(agora.getMinutes())}:${pad(agora.getSeconds())}` +
    `${sinal}${pad(offsetMin / 60)}:${pad(offsetMin % 60)}`
  )
}
