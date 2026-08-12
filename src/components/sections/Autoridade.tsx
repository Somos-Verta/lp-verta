import { Reveal } from '../Reveal'

const RESULTADOS = [
  {
    numero: '23 reuniões qualificadas/mês',
    contexto: 'Empresa de serviços B2B que dependia 100% de indicação',
  },
  {
    numero: 'R$180k → R$420k em 6 meses',
    contexto: 'Dono saiu da operação comercial e manteve crescimento',
  },
  {
    numero: 'Time comercial de 2 → 7 pessoas',
    contexto: 'Contratação segura baseada em demanda previsível',
  },
]

export function Autoridade() {
  return (
    <section className="secao border-y border-line bg-bg-alt">
      <div className="container-lp">
        <div className="grid items-start gap-10 lg:grid-cols-[1.15fr_minmax(0,420px)] lg:gap-14">
          <Reveal>
            <span className="eyebrow-chip">Autoridade &amp; prova</span>
            <h2 className="titulo-secao mt-4 max-w-[20ch]">
              Por que empresários que faturam{' '}
              <span className="text-primary">+100k/mês confiam</span> neste sistema
            </h2>
            <p className="mt-6 max-w-prose text-body-lg text-text-muted">
              Nos últimos anos, ajudamos mais de 50 empresários a saírem da dependência de indicação
              e construírem máquinas de demanda previsível. Não somos mais uma agência genérica
              prometendo leads baratos. Somos especialistas em transformar empresas que dependem do
              dono em sistemas comerciais escaláveis. Se você está cansado de acordar sem saber de
              onde virá a próxima venda, esta reunião vai mostrar o caminho exato.
            </p>
          </Reveal>

          <Reveal delay={100}>
            <figure className="m-0">
              <div className="relative overflow-hidden rounded-xl border border-line">
                <picture>
                  <source
                    type="image/webp"
                    srcSet="/img/sessao-estrategica-560.webp 560w, /img/sessao-estrategica-960.webp 960w"
                    sizes="(min-width: 1024px) 420px, 100vw"
                  />
                  <img
                    src="/img/sessao-estrategica-960.jpg"
                    alt="Dois profissionais em reunião de trabalho diante de um notebook, em sala de reunião envidraçada"
                    width={960}
                    height={1200}
                    loading="lazy"
                    decoding="async"
                    className="block h-auto w-full saturate-[0.9]"
                  />
                </picture>
                <div
                  className="absolute inset-0 bg-gradient-to-b from-transparent from-40% to-[rgba(8,8,11,0.55)]"
                  aria-hidden="true"
                />
              </div>
              <figcaption className="mt-3 text-sm text-text-muted">
                Registro de sessão estratégica com empresário do segmento industrial
              </figcaption>
            </figure>
          </Reveal>
        </div>

        <Reveal className="mt-14">
          <h3 className="font-display text-h2-m text-text-strong sm:text-h2">
            Resultados reais de quem implementou o sistema
          </h3>
        </Reveal>

        <div className="mt-8 grid gap-5 sm:grid-cols-3">
          {RESULTADOS.map((resultado, i) => (
            <Reveal key={resultado.numero} delay={i * 80}>
              <div className="card card-hover h-full">
                <p className="font-display text-h3 text-primary">{resultado.numero}</p>
                <p className="mt-3 text-sm text-text-muted">{resultado.contexto}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
