import { Outlet } from 'react-router'
import logoSvg from '../assets/logo.svg'

export function AuthLayout() {
  return (
    <div className="w-screen h-screen flex flex-col items-center justify-center bg-gray-400 text-gray-100 p-8">
      <main className="bg-gray-500 p-8 rounded-md flex items-center flex-col gap-6 w-full md:max-w-[462px]">
        <img src={logoSvg} alt="Logo" />
        <Outlet />
      </main>
    </div>
  )
}
