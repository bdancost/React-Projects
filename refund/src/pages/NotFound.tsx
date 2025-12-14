export function NotFound() {
  return (
    <div className="w-screen h-screen flex flex-col justify-center items-center">
      <div className="flex flex-col">
        <h1 className="text-gray-100 font-semibold text-2xl mb-10">404 - Page Not Found. 😢 </h1>
        <p className="text-gray-100 text-lg">The page you are looking for does not exist.</p>
        <a
          href="/"
          className="text-sm font-semibold text-green-100 mt-5 mb-4 text-center hover:text-green-800 transition ease-linear border-2 border-transparent hover:border-green-800 py-2 rounded-lg"
        >
          Voltar para o início
        </a>
      </div>
    </div>
  )
}
