// Telefone brasileiro: precisa funcionar igual ao digitar, ao colar e no autofill.
// Os três caminhos entregam formatos diferentes.

const DDDS_VALIDOS = new Set([
  11, 12, 13, 14, 15, 16, 17, 18, 19,
  21, 22, 24, 27, 28,
  31, 32, 33, 34, 35, 37, 38,
  41, 42, 43, 44, 45, 46, 47, 48, 49,
  51, 53, 54, 55,
  61, 62, 63, 64, 65, 66, 67, 68, 69,
  71, 73, 74, 75, 77, 79,
  81, 82, 83, 84, 85, 86, 87, 88, 89,
  91, 92, 93, 94, 95, 96, 97, 98, 99,
])

/**
 * Extrai só os dígitos e remove o DDI 55 quando ele realmente está presente.
 *
 * O caso de borda que importa: `55999998888` tem 11 dígitos e começa com 55, mas é o
 * DDD 55 (Santa Maria/RS), não o DDI. Só descartamos o 55 em números de 12 ou 13 dígitos.
 */
export function normalizarTelefoneBR(valor: string): string {
  let digitos = valor.replace(/\D/g, '')

  if ((digitos.length === 12 || digitos.length === 13) && digitos.startsWith('55')) {
    digitos = digitos.slice(2)
  }

  return digitos.slice(0, 11)
}

/** `(00) 0000-0000` para fixo, `(00) 00000-0000` para celular. */
export function aplicarMascaraBR(digitos: string): string {
  if (digitos.length <= 10) {
    return digitos.replace(/^(\d{2})(\d)/, '($1) $2').replace(/(\d{4})(\d)/, '$1-$2')
  }
  return digitos.replace(/^(\d{2})(\d)/, '($1) $2').replace(/(\d{5})(\d)/, '$1-$2')
}

export function validarTelefoneBR(digitos: string): string | null {
  if (digitos.length !== 10 && digitos.length !== 11) {
    return 'Informe um WhatsApp válido com DDD'
  }

  if (!DDDS_VALIDOS.has(Number(digitos.slice(0, 2)))) {
    return 'DDD inválido. Confira os dois primeiros dígitos'
  }

  // Celular no Brasil tem nono dígito e ele é sempre 9.
  if (digitos.length === 11 && digitos[2] !== '9') {
    return 'Celular com 11 dígitos precisa começar com 9 depois do DDD'
  }

  return null
}
