/* eslint-disable react-hooks/exhaustive-deps */
import { useMemo, useRef } from "react"
import useCotizador from "../hooks/useCotizador"
import { EPS, PLANES } from "../constants"

export default function Resultado() {
  const { resultado, datos, setRespuesta, resultadoYear } = useCotizador()
  const { year, personas, plan, eps } = datos
  const yearRef = useRef(year)
  const personaRef = useRef(personas)
  const [ nombreEps ] = useMemo(() => EPS.filter(e => e.id === Number(eps)), [resultado])
  const [ nombrePlanes ] = useMemo(() => PLANES.filter(p => p.id === Number(plan)), [resultado])
  if (resultado === 0) return null
  const handleClick = () => {
    setRespuesta(true)
    setTimeout(() => {
      window.location.reload()
    }, 3000)
  }
  return (
    <div className="bg-gray-100 mt-5 p-5 shadow-lg rounded-lg">
      <h2 className="text-gray-700 font-black text-center text-3xl">Resumen de tu Cotización</h2>
      <p className="text-gray-700 my-2 text-xl"><span className="font-bold">EPS: </span>{nombreEps.nombre}</p>
      <p className="text-gray-700 my-2 text-xl"><span className="font-bold">Año a cotizar: </span>{yearRef.current}</p>
      <p className="text-gray-700 my-2 text-xl"><span className="font-bold">Numero Integrantes: </span>{personaRef.current}</p>
      <p className="text-gray-700 my-2 text-xl"><span className="font-bold">Plan: </span>{nombrePlanes.nombre}</p>
      <p className="text-gray-700 my-2 text-xl"><span className="font-bold">Mensualidad: </span>{resultado}</p>
      <p className="text-gray-700 my-2 text-2xl mt-5"><span className="font-bold">Totalidad Anual: </span>{resultadoYear}</p>
      <div className="flex w-full justify-end align-middle">
        <button
          onClick={() => handleClick()}
          className="mt-3 bg-green-500 hover:bg-green-600 p-2 text-white text-center font-bold uppercase rounded-lg "
        >Inscribirse al seguro Médico</button>
      </div>
    </div>
  )
}
