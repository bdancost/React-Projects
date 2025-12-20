import { useState } from 'react'
import type { ReactNode } from 'react'
import { createContext } from 'react'

type AuthContext = {
  session: null | UserAPIResponse
  save: (user: UserAPIResponse) => void
}

export const AuthContext = createContext({} as AuthContext)

export function AuthProvider({ children }: { children: ReactNode }) {
  const [session, setSession] = useState<null | UserAPIResponse>(null)

  function save(data: UserAPIResponse) {
    setSession(data)
  }

  return <AuthContext.Provider value={{ session, save }}>{children}</AuthContext.Provider>
}
