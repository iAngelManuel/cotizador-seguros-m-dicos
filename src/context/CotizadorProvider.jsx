import { useState, createContext } from "react"
import { obteneraDiferenciaYear, calcularEPS, calcularPlan, formatearDinero } from "../helpers"

const CotizadorContext = createContext()
export const CotizadorProvider = ({ children }) => {
  const [ datos, setDatos ] = useState({
    eps: '',
    year: '',
    personas: '',
    plan: ''
  })
  const [ error, setError ] = useState('')
  const [ resultado, setResultado ] = useState(0)
  const [ resultadoYear, setResultadoYear ] = useState(0)
  const [ cargando, setCargando ] = useState(false)
  const [ respuesta, setRespuesta ] = useState(false)
  const handleChangeDatos = e => {
    setDatos({
      ...datos,
      [e.target.name]: e.target.value
    })
  }
  const cotizarSeguro = () => {
    // base
    let resultado = 100000

    // Obtener diferencia de años
    const diferencia = obteneraDiferenciaYear(datos.year)

    // Hay que sumar el 3% por cada año
    resultado += ((diferencia * 3) * resultado) / 100

    // Integrantes al seguro medico
    resultado *= Number(datos.personas)

    // Sanitas 30%
    // Sura 5%
    // NuevaEPS 15%
    resultado *= calcularEPS(datos.eps)

    // Básico 20%
    // Premium 50%
    resultado *= calcularPlan(datos.plan)

    // Cotizar el resultado anual
    let totalYear = resultado * 12
    totalYear = formatearDinero(totalYear)

    // Formatear a dinero
    resultado = formatearDinero(resultado)
  
    // Pasarlo al state
    setCargando(true)

    setTimeout(() => {
      setResultado(resultado)
      setResultadoYear(totalYear)
      setCargando(false)
    }, 3000)
  }
  return (
    <CotizadorContext.Provider
      value={{
        datos,
        handleChangeDatos,
        error,
        setError,
        cotizarSeguro,
        resultado,
        cargando,
        respuesta,
        setRespuesta,
        resultadoYear
      }}
    >{children}</CotizadorContext.Provider>
  )
}
export default CotizadorContext
