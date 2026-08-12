import { Padrao } from '../Padrao'
import { Reveal } from '../Reveal'

/**
 * O wireframe traz um segundo formulário aqui. O briefing pediu um formulário só, então a
 * seção mantém toda a copy dela e o botão leva ao formulário do hero — nenhuma linha perdida.
 * Registrado em DECISOES.md.
 */
export function CtaFinal() {
  return (
    <section className="relative overflow-hidden bg-bg py-16 sm:py-28">
      <Padrao className="text-primary opacity-[0.06]" />

      <div className="container-lp relative">
        <Reveal className="mx-auto max-w-[46rem] text-center">
          <h2 className="titulo-secao">Agende sua reunião estratégica gratuita agora</h2>

          <p className="mx-auto mt-4 max-w-prose text-body-lg text-text-muted">
            Esta reunião é exclusiva para empresários que faturam acima de R$100k/mês e querem sair
            da dependência de indicação
          </p>

          <a href="#form" className="btn-primario mt-9">
            Quero agendar minha reunião gratuita
          </a>

          <img
            src="/logos/verta-principal-branca.svg"
            alt="VERTA — Aceleradora de Receitas"
            width={220}
            height={45}
            loading="lazy"
            decoding="async"
            className="mx-auto mt-14 h-9 w-auto opacity-90 sm:h-11"
          />

          <p className="mx-auto mt-5 max-w-prose text-sm text-text-muted">
            Reunião 100% gratuita e sem compromisso. Você decide se faz sentido depois de entender o
            diagnóstico completo.
          </p>
        </Reveal>
      </div>
    </section>
  )
}
