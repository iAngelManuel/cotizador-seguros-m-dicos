export function obteneraDiferenciaYear(year) {
  return year - new Date().getFullYear()
}

export function calcularEPS(eps) {
  let incremento

  switch (eps) {
    case "1":
      incremento = 1.30
      break;
    case "2":
      incremento = 1.15
      break
    case "3":
      incremento = 1.05
      break
    default:
    break
  }
  return incremento
}

export function calcularPlan(plan) {
  return (plan === "1") ? 1.20 : 1.5
}

export function formatearDinero(cantidad) {
  return cantidad.toLocaleString('en-US', {
    style: 'currency',
    currency: "USD"
  })
}