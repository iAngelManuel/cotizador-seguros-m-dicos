import Respuesta from "./Respuesta"
import Error from "./Error"
import useCotizador from "../hooks/useCotizador"
import { Fragment } from "react"
import { EPS, YEARS, NUMEROPERSONA, PLANES } from "../constants/index"

export default function Formulario() {
  const { handleChangeDatos, datos, error, setError, cotizarSeguro, respuesta } = useCotizador()
  const handleSubmit = e => {
    e.preventDefault()
    if (Object.values(datos).includes('')) {
      return setError('Todos los campos son obligatorios')
    }
    setError('')
    cotizarSeguro()
  }
  return ( 
    <>
      {error && <Error/>}
      {respuesta && <Respuesta />}
      <form
        onSubmit={handleSubmit}
      >
        <div className="my-5">
          <label htmlFor="marca" className="block mb-3 font-bold text-gray-600 uppercase">Seguro EPS</label>
          <div className="flex items-center">
            <div className="mr-1">
              <svg xmlns="http://www.w3.org/2000/svg" fill="cyan" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8">
                <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 21v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21m0 0h4.5V3.545M12.75 21h7.5V10.75M2.25 21h1.5m18 0h-18M2.25 9l4.5-1.636M18.75 3l-1.5.545m0 6.205l3 1m1.5.5l-1.5-.5M6.75 7.364V3h-3v18m3-13.636l10.5-3.819" />
              </svg>
            </div>
            <select
              name="eps"
              id="eps"
              value={datos.eps}
              onChange={e => handleChangeDatos(e)}
              className="w-full p-3 bg-white border border-gray-200 cursor-pointer rounded-lg shadow"
            >
              <option value="">Selecciona la EPS</option>
              {EPS.map(eps => (
                <option
                  key={eps.id}
                  value={eps.id}
                >{eps.nombre}</option>
              ))}
            </select>
          </div>
        </div>
        <div className="my-5">
          <label htmlFor="year" className="block mb-3 font-bold text-gray-600 uppercase">¿Que año desea cotizar?</label>
          <div className="flex items-center">
            <div className="mr-1">
              <svg xmlns="http://www.w3.org/2000/svg" fill="cyan" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5m-9-6h.008v.008H12v-.008zM12 15h.008v.008H12V15zm0 2.25h.008v.008H12v-.008zM9.75 15h.008v.008H9.75V15zm0 2.25h.008v.008H9.75v-.008zM7.5 15h.008v.008H7.5V15zm0 2.25h.008v.008H7.5v-.008zm6.75-4.5h.008v.008h-.008v-.008zm0 2.25h.008v.008h-.008V15zm0 2.25h.008v.008h-.008v-.008zm2.25-4.5h.008v.008H16.5v-.008zm0 2.25h.008v.008H16.5V15z" />
              </svg>
            </div>
            <select
              name="year"
              id="year"
              value={datos.year}
              onChange={e => handleChangeDatos(e)}
              className="w-full p-3 bg-white border border-gray-200 cursor-pointer rounded-lg shadow"
            >
              <option value="">Selecciona</option>
              {YEARS.map(year => (
                <option
                  key={year}
                  value={year}
                >{year}</option>
              ))}
            </select>
          </div>
        </div>
        <div className="my-5">
          <label htmlFor="personas" className="block mb-3 font-bold text-gray-600 uppercase">¿Cuántos Integrantes desean ingresar?</label>
          <div className="flex items-center">
            <div className="mr-1">
              <svg xmlns="http://www.w3.org/2000/svg" fill="cyan" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8">
                <path strokeLinecap="round" strokeLinejoin="round" d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
            </div>
            <select
              name="personas"
              id="personas"
              value={datos.personas}
              onChange={e => handleChangeDatos(e)}
              className="w-full p-3 bg-white border border-gray-200 cursor-pointer rounded-lg shadow"
            >
              <option value="">Selecciona</option>
              {NUMEROPERSONA.map(persona => (
                <option
                  key={persona}
                  value={persona}
                >{persona}</option>
              ))}
            </select>
          </div>
        </div>
        <div className="my-1">
          <label htmlFor="plan" className="block mb-3 font-bold text-gray-600 uppercase">Elige un Plan</label>
          <div className="flex gap-3">
            {PLANES.map(plan => (
              <Fragment key={plan.id}>
                <label
                  htmlFor={plan.id}
                  className="text-gray-700 font-bold"
                >{plan.nombre}</label>
                <input
                  type="radio"
                  name="plan"
                  id={plan.id}
                  value={plan.id}
                  onChange={e => handleChangeDatos(e)}
                  className="items-center cursor-pointer"
                />
              </Fragment>
            ))}
          </div>
        </div>
        <div className="flex justify-end">
          <input
            type="submit"
            value="Cotizar Seguro"
            className="w-full md:w-auto mt-3 md:mt-0 bg-sky-400 hover:bg-sky-500 text-white uppercase p-2 rounded-lg font-bold cursor-pointer"
          />
        </div>
      </form>
    </>
  )
}
