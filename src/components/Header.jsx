export default function Header() {
  return (
    <nav className="flex items-center w-full bg-white p-3 rounded-b-lg shadow-lg">
      <div>
        <img src="../../public/img/logo.png" alt="" className="w-14 cursor-pointer" />
      </div>
      <div>
        <p className="text-cyan-700 font-bold cursor-pointer">{'>'} Cotizar seguro médico</p>
      </div>
    </nav>
  )
}
