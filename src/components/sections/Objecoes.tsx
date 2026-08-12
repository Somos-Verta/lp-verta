import { useState } from 'react'
import { ChevronDown } from 'lucide-react'
import { Reveal } from '../Reveal'

const OBJECOES = [
  {
    titulo: 'Agora não é o melhor momento, quero organizar a casa primeiro',
    resposta:
      'A verdade é que a casa nunca vai estar 100% organizada. E enquanto você espera o momento perfeito, seus concorrentes estão montando sistemas de demanda. A reunião é justamente para organizar as prioridades certas. Sem custo, sem compromisso.',
  },
  {
    titulo: 'Já testei agência antes e não funcionou, são todas iguais',
    resposta:
      'Entendemos a frustração. A maioria das agências vende lead barato e some. Nós não somos agência genérica: somos especialistas em montar sistemas comerciais para empresas que faturam +100k/mês. A reunião existe justamente para você entender a diferença antes de assumir qualquer compromisso.',
  },
  {
    titulo: 'Meu nicho é muito específico, tráfego pago não funciona pra esse público',
    resposta:
      'Essa é a objeção mais comum (e a que mais cai por terra na reunião). Já trabalhamos com nichos ultra específicos: de máquinas industriais a consultorias técnicas. O segredo não é tráfego genérico, é construir estratégia de educação antes da oferta. Vamos provar na reunião.',
  },
]

export function Objecoes() {
  const [aberta, setAberta] = useState<number | null>(0)

  return (
    <section className="secao border-t border-line bg-bg-alt">
      <div className="container-lp">
        <Reveal>
          <span className="eyebrow-chip">Objeções</span>
          <h2 className="titulo-secao mt-4 max-w-[26ch]">
            Objeções que todo empresário tem antes de agendar (e a verdade sobre cada uma)
          </h2>
        </Reveal>

        <div className="mt-10 space-y-3 sm:mt-12">
          {OBJECOES.map((objecao, i) => {
            const estaAberta = aberta === i
            return (
              <Reveal key={objecao.titulo} delay={i * 80}>
                <div className="overflow-hidden rounded-lg border border-line bg-surface">
                  <h3>
                    <button
                      type="button"
                      onClick={() => setAberta(estaAberta ? null : i)}
                      aria-expanded={estaAberta}
                      aria-controls={`objecao-${i}`}
                      className="flex w-full items-center justify-between gap-4 p-6 text-left font-display text-h3 text-text-strong transition-colors duration-200 ease-std hover:bg-surface-raised sm:p-8"
                    >
                      {objecao.titulo}
                      <ChevronDown
                        className={`h-5 w-5 shrink-0 text-primary transition-transform duration-200 ease-std ${
                          estaAberta ? 'rotate-180' : ''
                        }`}
                        strokeWidth={1.5}
                        aria-hidden="true"
                      />
                    </button>
                  </h3>

                  <div
                    id={`objecao-${i}`}
                    className={`grid transition-[grid-template-rows,opacity] duration-200 ease-std ${
                      estaAberta ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'
                    }`}
                  >
                    <div className="overflow-hidden">
                      <p className="max-w-prose px-6 pb-6 text-text-muted sm:px-8 sm:pb-8">
                        {objecao.resposta}
                      </p>
                    </div>
                  </div>
                </div>
              </Reveal>
            )
          })}
        </div>
      </div>
    </section>
  )
}
