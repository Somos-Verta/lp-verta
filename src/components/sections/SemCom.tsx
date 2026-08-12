import { Check, X } from 'lucide-react'
import { Reveal } from '../Reveal'

const SEM = [
  'Mês depende de quem vai lembrar de você',
  'Vendedor parado ou inventando prospecção nas redes sociais',
  'Você aceita qualquer cliente que aparece (não tem ICP definido)',
  'Baixa preço para competir em vez de aumentar valor percebido',
  'Folha de pagamento te tira o sono porque não sabe se a demanda vai vir',
]

const COM = [
  'Você acorda com reuniões agendadas na agenda sem ter feito nada',
  'Time comercial alimentado com leads qualificados todo dia',
  'Você atrai o perfil de cliente ideal (e repele quem só quer preço)',
  'Concorrência vira irrelevante quando você educa o mercado antes de vender',
  'Você contrata com confiança porque sabe que a máquina sustenta o crescimento',
]

export function SemCom() {
  return (
    <section className="secao bg-bg">
      <div className="container-lp">
        <Reveal>
          <span className="eyebrow-chip">Sem × Com</span>
          <h2 className="titulo-secao mt-4 max-w-[26ch]">
            A diferença entre depender de indicação e ter um sistema de demanda previsível
          </h2>
        </Reveal>

        <div className="mt-10 grid gap-5 sm:mt-12 lg:grid-cols-2">
          <Reveal>
            <div className="h-full rounded-lg border border-line bg-surface p-6 sm:p-8">
              <h3 className="font-display text-h3 text-text-muted">
                Sua empresa dependendo de indicação
              </h3>
              <ul className="mt-6 space-y-4">
                {SEM.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-text-muted">
                    <X
                      className="mt-0.5 h-5 w-5 shrink-0 text-text-muted"
                      strokeWidth={1.5}
                      aria-hidden="true"
                    />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>

          <Reveal delay={100}>
            <div className="h-full rounded-lg border border-[rgba(53,49,254,0.35)] bg-surface p-6 shadow-glow sm:p-8">
              <h3 className="font-display text-h3 text-text-strong">
                Com o sistema de demanda previsível
              </h3>
              <ul className="mt-6 space-y-4">
                {COM.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <Check
                      className="mt-0.5 h-5 w-5 shrink-0 text-primary"
                      strokeWidth={1.5}
                      aria-hidden="true"
                    />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
