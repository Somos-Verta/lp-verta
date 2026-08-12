import { Reveal } from '../Reveal'

const ETAPAS = [
  {
    numero: '01',
    titulo: 'Diagnóstico completo',
    subtitulo: 'Mapeamento da sua situação comercial atual',
    texto:
      'Vamos identificar exatamente onde está o gargalo: falta de demanda, lead ruim, vendedor fraco ou processo inexistente. Sem diagnóstico certo, qualquer solução é chute.',
  },
  {
    numero: '02',
    titulo: 'Plano personalizado',
    subtitulo: 'O caminho exato para você sair da dependência de indicação',
    texto:
      'Você vai sair da reunião com o mapa completo: quanto investir, qual estrutura montar, quanto tempo até ter previsibilidade. Tudo específico pro seu negócio, não receita de bolo.',
  },
  {
    numero: '03',
    titulo: 'Validação de viabilidade',
    subtitulo: 'Prova de que seu nicho funciona com sistema de demanda',
    texto:
      'Vamos mostrar cases de empresas do seu segmento (ou similares) que saíram da mesma situação. Se funciona pra eles, a questão não é SE funciona pra você, mas QUANDO você vai começar.',
  },
  {
    numero: '04',
    titulo: 'Decisão informada',
    subtitulo: 'Você decide se faz sentido trabalharmos juntos',
    texto:
      'Não fazemos pressão de vendas. Se fizermos uma proposta e você enxergar que faz sentido, ótimo. Se não, você sai com um diagnóstico valioso de graça. Sem compromisso, sem pegadinha.',
  },
]

export function Reuniao() {
  return (
    <section className="secao bg-bg">
      <div className="container-lp">
        <Reveal>
          <span className="eyebrow-chip">O que recebe na reunião</span>
          <h2 className="titulo-secao mt-4 max-w-[24ch]">
            O que você vai receber <span className="text-primary">nesta reunião estratégica</span>{' '}
            (e por que ela não é mais uma call de vendas genérica)
          </h2>
          <p className="mt-4 max-w-prose text-body-lg text-text-muted">
            Esta é uma sessão de diagnóstico real do seu negócio, não um papo de agência tentando te
            empurrar pacote
          </p>
        </Reveal>

        <div className="mt-10 grid gap-5 sm:mt-12 lg:grid-cols-2">
          {ETAPAS.map((etapa, i) => (
            <Reveal key={etapa.numero} delay={(i % 2) * 80}>
              <div className="card card-hover h-full">
                <span className="font-display text-[2.5rem] font-extrabold leading-none tracking-[-0.02em] text-primary">
                  {etapa.numero}
                </span>
                <h3 className="mt-5 font-display text-h3 text-text-strong">{etapa.titulo}</h3>
                {/* Texto pequeno não vai de azul: 3,3:1 reprova em AA. Ver DESIGN.md. */}
                <p className="mt-1.5 text-sm font-medium text-text-strong">{etapa.subtitulo}</p>
                <p className="mt-4 text-text-muted">{etapa.texto}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
