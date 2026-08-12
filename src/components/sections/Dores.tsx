import { ArrowRight } from 'lucide-react'
import { Reveal } from '../Reveal'

const ITENS = [
  {
    dor: 'Você ainda é o melhor vendedor da própria empresa e não consegue sair da operação sem o faturamento cair?',
    solucao:
      'Mostramos como criar um sistema comercial que funciona sem você precisar estar presente em cada venda',
  },
  {
    dor: 'Seu time comercial fica parado esperando indicação aparecer (ou caçando lead no LinkedIn como se fosse prospecção de verdade)?',
    solucao:
      'Implementamos uma máquina de demanda qualificada que alimenta seu time todo dia, no piloto automático',
  },
  {
    dor: 'Você tem medo de contratar mais gente porque não sabe se a demanda vai sustentar a folha no mês que vem?',
    solucao:
      'Com previsibilidade de reuniões qualificadas, você planeja crescimento do time com base em dados reais, não em esperança',
  },
]

export function Dores() {
  return (
    <section className="secao bg-bg-alt">
      <div className="container-lp">
        <Reveal>
          <span className="eyebrow-chip">Dores &amp; soluções</span>
          <h2 className="titulo-secao mt-4 max-w-[22ch]">
            Você reconhece essas situações na sua empresa?
          </h2>
          <p className="mt-3 max-w-prose text-body-lg text-text-muted">
            Se você marcou sim para 2 ou mais, esta reunião foi feita para você
          </p>
        </Reveal>

        <div className="mt-10 space-y-5 sm:mt-12">
          {ITENS.map((item, i) => (
            <Reveal key={item.dor} delay={i * 80}>
              <div className="card card-hover grid gap-5 sm:grid-cols-[1fr_auto_1fr] sm:items-center sm:gap-8">
                <p className="font-display text-h3 text-text-strong">{item.dor}</p>

                <span
                  className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-primary-soft sm:h-10 sm:w-10"
                  aria-hidden="true"
                >
                  <ArrowRight className="h-5 w-5 text-primary" strokeWidth={1.5} />
                </span>

                <p className="text-text-muted">{item.solucao}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
