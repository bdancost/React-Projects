import { useState } from 'react'
import type { ReactNode } from 'react'
import { createContext } from 'react'

type AuthContext = {
  session: null | UserAPIResponse
}

export const AuthContext = createContext({} as AuthContext)

export function AuthProvider({ children }: { children: ReactNode }) {
  const [session, setSession] = useState<UserAPIResponse | null>(null)

  return <AuthContext.Provider value={{ session }}>{children}</AuthContext.Provider>
}
