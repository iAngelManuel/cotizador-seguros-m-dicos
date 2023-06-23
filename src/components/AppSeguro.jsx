import Header from "./Header"
import Formulario from "./Formulario"
import Resultado from "./Resultado"
import Spinner from "./Spinner"
import useCotizador from "../hooks/useCotizador"

export default function AppSeguro() {
  const { cargando } = useCotizador()
  return (
    <>
      <header className="mb-10">
        <Header />
      </header>
      <h1 className="text-cyan-800 text-center text-4xl font-black mb-5">Cotiza tu Seguro Médico</h1>
      <main className="bg-white md:w-2/3 lg:w-2/4 lg:mx-auto m-3 shadow-lg rounded-lg p-7">
        <Formulario />
        {cargando ? <Spinner /> : <Resultado />}
      </main>
    </>
  )
}
