import { useEffect, useRef, useState, type FormEvent } from 'react'
import { AlertCircle, Check, Loader2 } from 'lucide-react'
import { aplicarMascaraBR, normalizarTelefoneBR, validarTelefoneBR } from '../lib/phone'
import { capturarUtms, eventoLeadSubmit, type Utms } from '../lib/tracking'
import { FORM_ID, timestampLocalISO, WEBHOOK_URL } from '../lib/config'

/** Opções na ordem e com a grafia exata definidas no briefing. */
const FATURAMENTO = [
  'Ainda não faturo',
  'de R$ 1.000,00 a R$ 10.000,00 por mês',
  'de R$ 11.000,00 até R$ 30.000,00 por mês',
  'de R$ 31.000,00 até R$ 50.000,00 por mês',
  'de R$ 51.000,00 até R$ 80.000,00 por mês',
  'de R$ 81.000,00 até R$ 100.000,00 por mês',
  'acima de R$ 100.000,00 por mês',
]

type Campos = {
  nome: string
  telefone: string
  email: string
  empresa: string
  faturamento: string
}

type Erros = Partial<Record<keyof Campos, string>>

const INICIAL: Campos = { nome: '', telefone: '', email: '', empresa: '', faturamento: '' }

function validar(campos: Campos): Erros {
  const erros: Erros = {}

  if (campos.nome.trim().length < 2) erros.nome = 'Informe seu nome'

  const erroTelefone = validarTelefoneBR(campos.telefone)
  if (erroTelefone) erros.telefone = erroTelefone

  if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(campos.email.trim())) {
    erros.email = 'Informe um e-mail válido'
  }

  if (campos.empresa.trim().length < 2) erros.empresa = 'Informe o nome da sua empresa'
  if (!campos.faturamento) erros.faturamento = 'Selecione o faturamento mensal'

  return erros
}

async function enviar(payload: Record<string, string>): Promise<void> {
  const resposta = await fetch(WEBHOOK_URL, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(payload),
  })

  // Sem resposta OK não existe sucesso. Mostrar a tela de confirmação sem isso é mentir
  // para o visitante e perder o lead em silêncio.
  if (!resposta.ok) throw new Error(`webhook respondeu ${resposta.status}`)
}

export function LeadForm() {
  const [campos, setCampos] = useState<Campos>(INICIAL)
  const [erros, setErros] = useState<Erros>({})
  const [estado, setEstado] = useState<'ocioso' | 'enviando' | 'sucesso' | 'falha'>('ocioso')
  const [utms, setUtms] = useState<Utms | null>(null)
  const honeypot = useRef<HTMLInputElement>(null)
  const sucessoRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    setUtms(capturarUtms())
  }, [])

  useEffect(() => {
    if (estado === 'sucesso') sucessoRef.current?.focus()
  }, [estado])

  function alterar<K extends keyof Campos>(chave: K, valor: string) {
    setCampos((atual) => ({ ...atual, [chave]: valor }))
    setErros((atual) => ({ ...atual, [chave]: undefined }))
  }

  async function submeter(evento: FormEvent) {
    evento.preventDefault()
    if (estado === 'enviando') return

    // Honeypot preenchido: mostra sucesso e não chama o webhook. O bot não percebe
    // e o workflow do n8n continua com dois nós.
    if (honeypot.current?.value) {
      setEstado('sucesso')
      return
    }

    const encontrados = validar(campos)
    if (Object.keys(encontrados).length > 0) {
      setErros(encontrados)
      const primeiro = Object.keys(encontrados)[0]
      document.getElementById(`campo-${primeiro}`)?.focus()
      return
    }

    const payload = {
      nome: campos.nome.trim(),
      telefone: campos.telefone,
      email: campos.email.trim(),
      empresa: campos.empresa.trim(),
      faturamento: campos.faturamento,
      hp_website: '',
      page_url: window.location.href,
      referer: document.referrer,
      ...(utms ?? capturarUtms()),
      timestamp: timestampLocalISO(),
    }

    setEstado('enviando')

    try {
      await enviar(payload)
    } catch {
      // Uma tentativa de retry antes de desistir — falha de rede momentânea é comum
      // em 4G, e perder o lead por causa dela é caro.
      try {
        await new Promise((r) => setTimeout(r, 1200))
        await enviar(payload)
      } catch {
        setEstado('falha')
        return
      }
    }

    eventoLeadSubmit(FORM_ID)
    setEstado('sucesso')
  }

  if (estado === 'sucesso') {
    return (
      <div
        ref={sucessoRef}
        tabIndex={-1}
        role="status"
        className="flex min-h-[560px] flex-col items-center justify-center gap-4 rounded-xl border border-line bg-surface p-8 text-center shadow-lg focus:outline-none sm:min-h-[620px]"
      >
        <div className="flex h-14 w-14 items-center justify-center rounded-full bg-[rgba(61,214,140,0.12)]">
          <Check className="h-7 w-7 text-success" strokeWidth={1.8} aria-hidden="true" />
        </div>
        {/* h2 e não h3: dentro do hero o título anterior é o h1, e pular nível reprova
            na auditoria de ordem de cabeçalho. O tamanho continua o do token h3. */}
        <h2 className="font-display text-h3 text-text-strong">Recebemos seus dados</h2>
        <p className="max-w-[38ch] text-sm text-text-muted">
          Nossa equipe entra em contato pelo WhatsApp para confirmar o horário da sua reunião
          estratégica.
        </p>
      </div>
    )
  }

  return (
    <form
      onSubmit={submeter}
      noValidate
      // A altura mínima acompanha a da tela de sucesso: a troca não pode mexer no layout.
      className="min-h-[560px] rounded-xl border border-line bg-surface p-6 shadow-lg sm:min-h-[620px] sm:p-8"
    >
      <h2 className="font-display text-h3 text-text-strong">
        Preencha para agendar sua reunião estratégica gratuita
      </h2>

      <div className="mt-6 space-y-4">
        <Campo
          id="nome"
          rotulo="Qual é o seu nome?"
          erro={erros.nome}
          input={
            <input
              id="campo-nome"
              name="nome"
              type="text"
              autoComplete="name"
              placeholder="Qual é o seu nome?"
              className="campo-base"
              value={campos.nome}
              aria-invalid={!!erros.nome}
              aria-describedby={erros.nome ? 'erro-nome' : undefined}
              onChange={(e) => alterar('nome', e.target.value)}
            />
          }
        />

        <Campo
          id="telefone"
          rotulo="Qual é o seu Whatsapp?"
          erro={erros.telefone}
          input={
            <input
              id="campo-telefone"
              name="telefone"
              type="tel"
              inputMode="numeric"
              // Sem maxlength: ele trunca colagens longas antes da normalização.
              autoComplete="tel-national"
              placeholder="Qual é o seu Whatsapp?"
              className="campo-base"
              value={aplicarMascaraBR(campos.telefone)}
              aria-invalid={!!erros.telefone}
              aria-describedby={erros.telefone ? 'erro-telefone' : undefined}
              onChange={(e) => alterar('telefone', normalizarTelefoneBR(e.target.value))}
            />
          }
        />

        <Campo
          id="email"
          rotulo="Qual seu melhor email?"
          erro={erros.email}
          input={
            <input
              id="campo-email"
              name="email"
              type="email"
              autoComplete="email"
              placeholder="Qual seu melhor email?"
              className="campo-base"
              value={campos.email}
              aria-invalid={!!erros.email}
              aria-describedby={erros.email ? 'erro-email' : undefined}
              onChange={(e) => alterar('email', e.target.value)}
            />
          }
        />

        <Campo
          id="empresa"
          rotulo="Qual o nome da sua empresa?"
          erro={erros.empresa}
          input={
            <input
              id="campo-empresa"
              name="empresa"
              type="text"
              autoComplete="organization"
              placeholder="Qual o nome da sua empresa?"
              className="campo-base"
              value={campos.empresa}
              aria-invalid={!!erros.empresa}
              aria-describedby={erros.empresa ? 'erro-empresa' : undefined}
              onChange={(e) => alterar('empresa', e.target.value)}
            />
          }
        />

        <Campo
          id="faturamento"
          rotulo="Faturamento mensal da empresa"
          erro={erros.faturamento}
          input={
            <select
              id="campo-faturamento"
              name="faturamento"
              className="campo-base appearance-none bg-[right_1rem_center] bg-no-repeat pr-12 [background-image:url('data:image/svg+xml;charset=utf-8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%2220%22%20height%3D%2220%22%20viewBox%3D%220%200%2024%2024%22%20fill%3D%22none%22%20stroke%3D%22%23A1A1AD%22%20stroke-width%3D%221.5%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%3E%3Cpath%20d%3D%22m6%209%206%206%206-6%22%2F%3E%3C%2Fsvg%3E')]"
              value={campos.faturamento}
              aria-invalid={!!erros.faturamento}
              aria-describedby={erros.faturamento ? 'erro-faturamento' : undefined}
              onChange={(e) => alterar('faturamento', e.target.value)}
            >
              <option value="" disabled>
                Faturamento mensal da empresa
              </option>
              {FATURAMENTO.map((opcao) => (
                <option key={opcao} value={opcao}>
                  {opcao}
                </option>
              ))}
            </select>
          }
        />

        {/* Honeypot: escondido por CSS, fora da ordem de tabulação, invisível para leitor de tela. */}
        <input
          ref={honeypot}
          type="text"
          name="hp_website"
          tabIndex={-1}
          autoComplete="off"
          aria-hidden="true"
          className="honeypot"
        />
      </div>

      <button type="submit" className="btn-primario mt-6 w-full" disabled={estado === 'enviando'}>
        {estado === 'enviando' ? (
          <>
            <Loader2 className="h-4 w-4 animate-spin" aria-hidden="true" />
            Enviando...
          </>
        ) : (
          'Quero minha reunião gratuita'
        )}
      </button>

      {estado === 'falha' && (
        <p role="alert" className="mt-4 flex items-start gap-2 text-sm text-error">
          <AlertCircle className="mt-0.5 h-4 w-4 shrink-0" strokeWidth={1.8} aria-hidden="true" />
          <span>
            Não conseguimos enviar seus dados agora. Tente novamente em instantes ou fale com a
            gente pelo WhatsApp.
          </span>
        </p>
      )}

      <p className="mt-4 text-center text-[0.8125rem] text-text-muted">
        Reunião 100% sem compromisso
      </p>
    </form>
  )
}

function Campo({
  id,
  rotulo,
  erro,
  input,
}: {
  id: string
  rotulo: string
  erro?: string
  input: React.ReactNode
}) {
  return (
    <div>
      {/* O rótulo fica escondido porque o design usa o placeholder — mas existe no DOM,
          senão o leitor de tela fica sem referência quando o campo é preenchido. */}
      <label htmlFor={`campo-${id}`} className="sr-only">
        {rotulo}
      </label>
      <div className={erro ? '[&_.campo-base]:border-error' : undefined}>{input}</div>
      {erro && (
        <p id={`erro-${id}`} className="mt-2 flex items-center gap-1.5 text-sm text-error">
          <AlertCircle className="h-4 w-4 shrink-0" strokeWidth={1.8} aria-hidden="true" />
          {erro}
        </p>
      )}
    </div>
  )
}
