import { Navigate, useLocation } from 'react-router'
import okSvg from '../assets/ok.svg'

export function Confirm() {
  const location = useLocation()

  if (!location.state?.fromSubmit) {
    return <Navigate to="/" />
  }

  return (
    <div className="bg-gray-500 lg:w-lg rounded-xl flex flex-col p-10 gap-6 items-center text-center">
      <h1 className="text-2xl font-bold text-center text-green-100">Solicitação enviada!</h1>

      <img src={okSvg} alt="Ícone de ok" className="w-28" />

      <p className="text-sm text-gray-200 text-center">
        Agora é apenas aguardar! Sua solicitação será analizada e, em breve, o setor financeiro irá entrar em contato.
      </p>

      <a
        href="/"
        className="text-sm font-semibold bg-green-100 text-white mt-5 mb-4 text-center hover:bg-green-200 transition ease-linear border-2 border-transparent py-2 rounded-lg p-5"
      >
        Nova solicitação
      </a>
    </div>
  )
}
