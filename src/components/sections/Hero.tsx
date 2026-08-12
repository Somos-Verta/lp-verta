import { CalendarCheck, ShieldCheck, ToggleRight, Users } from 'lucide-react'
import { LeadForm } from '../LeadForm'
import { Padrao } from '../Padrao'

const BULLETS = [
  'Sem depender que alguém lembre de você',
  'Sem vendedor parado implorando por lead',
  'Sem medo de contratar porque a demanda é previsível',
]

const SELOS = [
  { icone: CalendarCheck, texto: 'Reunião 100% sem compromisso' },
  { icone: ToggleRight, texto: 'Máquina de demanda que liga e desliga' },
  { icone: Users, texto: 'Sistema validado por +50 empresários' },
  { icone: ShieldCheck, texto: 'Previsibilidade real em 60-90 dias' },
]

export function Hero() {
  return (
    <section className="relative overflow-hidden border-b border-line bg-bg pb-14 pt-10 sm:pb-24 sm:pt-16">
      <Padrao className="text-text opacity-[0.045]" />

      <div className="container-lp relative grid items-start gap-10 lg:grid-cols-[1.05fr_minmax(0,440px)] lg:gap-16">
        <div>
          <span className="eyebrow-chip">Sistema de Previsibilidade Comercial</span>

          <h1 className="mt-5 font-display text-display-m text-text-strong sm:text-display">
            Como empresários que faturam +100k/mês estão{' '}
            <span className="text-primary">acordando com reuniões agendadas</span> sem depender de
            indicação (e você pode ser o próximo)
          </h1>

          <ul className="mt-7 space-y-3">
            {BULLETS.map((bullet) => (
              <li key={bullet} className="flex items-start gap-3 text-body-lg">
                <span
                  className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary"
                  aria-hidden="true"
                />
                {bullet}
              </li>
            ))}
          </ul>

          <ul className="mt-9 grid gap-3 sm:grid-cols-2">
            {SELOS.map(({ icone: Icone, texto }) => (
              <li
                key={texto}
                className="flex items-center gap-3 rounded-md border border-line bg-surface px-4 py-3 text-sm"
              >
                <Icone className="h-5 w-5 shrink-0 text-primary" strokeWidth={1.5} aria-hidden="true" />
                {texto}
              </li>
            ))}
          </ul>
        </div>

        <div id="form" className="scroll-mt-8 lg:sticky lg:top-8">
          <LeadForm />
        </div>
      </div>
    </section>
  )
}
