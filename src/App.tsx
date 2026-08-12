import { lazy, Suspense } from 'react'
import { Header } from './components/Header'
import { Hero } from './components/sections/Hero'

// Tudo abaixo da dobra entra em chunk separado — o hero e o formulário são o que precisa
// estar de pé no primeiro paint.
const Dores = lazy(() => import('./components/sections/Dores').then((m) => ({ default: m.Dores })))
const SemCom = lazy(() => import('./components/sections/SemCom').then((m) => ({ default: m.SemCom })))
const Autoridade = lazy(() =>
  import('./components/sections/Autoridade').then((m) => ({ default: m.Autoridade })),
)
const Reuniao = lazy(() =>
  import('./components/sections/Reuniao').then((m) => ({ default: m.Reuniao })),
)
const Objecoes = lazy(() =>
  import('./components/sections/Objecoes').then((m) => ({ default: m.Objecoes })),
)
const CtaFinal = lazy(() =>
  import('./components/sections/CtaFinal').then((m) => ({ default: m.CtaFinal })),
)

export default function App() {
  return (
    <div id="topo">
      <Header />

      <main>
        <Hero />

        <Suspense fallback={null}>
          <Dores />
          <SemCom />
          <Autoridade />
          <Reuniao />
          <Objecoes />
          <CtaFinal />
        </Suspense>
      </main>
    </div>
  )
}
