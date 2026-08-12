/**
 * O wireframe traz só a logo no topo — sem menu e sem CTA de cabeçalho. Fica assim.
 * Botão a mais aqui seria copy que ninguém aprovou.
 */
export function Header() {
  return (
    <header className="border-b border-line bg-bg">
      <div className="container-lp py-5">
        <img
          src="/logos/verta-horizontal-branca.svg"
          alt="VERTA"
          width={121}
          height={34}
          // Candidata a LCP em mobile: nada de lazy aqui.
          fetchPriority="high"
          className="h-7 w-auto sm:h-[34px]"
        />
      </div>
    </header>
  )
}
