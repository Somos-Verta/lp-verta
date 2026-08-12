import { useEffect, useRef, useState, type ReactNode } from 'react'

/**
 * Entrada de seção: opacidade + 12px de deslocamento. Só isso — nada que cause reflow
 * depois do carregamento, porque desloca layout e cobra em CLS.
 *
 * Com `prefers-reduced-motion` o conteúdo renderiza direto no estado final.
 */
export function Reveal({
  children,
  delay = 0,
  className = '',
}: {
  children: ReactNode
  delay?: number
  className?: string
}) {
  const ref = useRef<HTMLDivElement>(null)
  const [visivel, setVisivel] = useState(false)

  useEffect(() => {
    const reduz = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (reduz) {
      setVisivel(true)
      return
    }

    const alvo = ref.current
    if (!alvo) return

    const observador = new IntersectionObserver(
      ([entrada]) => {
        if (entrada.isIntersecting) {
          setVisivel(true)
          observador.disconnect()
        }
      },
      { rootMargin: '0px 0px -10% 0px', threshold: 0.05 },
    )

    observador.observe(alvo)
    return () => observador.disconnect()
  }, [])

  return (
    <div
      ref={ref}
      className={`transition-[opacity,transform] duration-500 ease-out motion-reduce:transition-none ${
        visivel ? 'translate-y-0 opacity-100' : 'translate-y-3 opacity-0'
      } ${className}`}
      style={{ transitionDelay: visivel ? `${delay}ms` : '0ms' }}
    >
      {children}
    </div>
  )
}
