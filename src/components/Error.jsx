import useCotizador from "../hooks/useCotizador"

export default function Error() {
  const { error } = useCotizador()
  return (
    <div className="border-l-4 border-red-600 bg-red-300 py-2 rounded shadow-lg">
      <p className="font-bold text-center text-red-600">{error}</p>
    </div>
  )
}
