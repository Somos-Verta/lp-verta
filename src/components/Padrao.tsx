import { useId } from 'react'

/**
 * Padronagem isométrica da marca (página "PADRONAGEM" do manual): o símbolo repetido em
 * tesselação. Em opacidade muito baixa, é o elemento gráfico que preenche o fundo sem
 * inventar ilustração.
 *
 * SVG inline em vez de arquivo: são ~400 bytes e evita uma requisição no caminho crítico.
 */
export function Padrao({ className = '' }: { className?: string }) {
  // id único por instância: a página usa o padrão em dois lugares e id repetido em SVG
  // é armadilha silenciosa. Os dois-pontos que o useId gera saem fora — dentro de url()
  // eles são fonte de dor de cabeça.
  const id = `padrao${useId().replace(/:/g, '')}`

  return (
    <div className={`pointer-events-none absolute inset-0 overflow-hidden ${className}`} aria-hidden="true">
      <svg className="h-full w-full" role="presentation">
        <defs>
          <pattern id={id} width="120" height="104" patternUnits="userSpaceOnUse">
            <g fill="currentColor">
              <path d="M60 0 90 17.3 90 51.9 60 34.6 30 51.9 30 17.3z" />
              <path d="M0 52 30 69.3 30 103.9 0 86.6z" />
              <path d="M90 52 120 69.3 120 103.9 90 86.6z" />
            </g>
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill={`url(#${id})`} />
      </svg>
    </div>
  )
}
