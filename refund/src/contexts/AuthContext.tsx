import { useState } from 'react'
import type { ReactNode } from 'react'
import { createContext } from 'react'

type AuthContext = {
  session: null | UserAPIResponse
  save: (user: UserAPIResponse) => void
}

const LOCAL_STORAGE_KEY = '@refund'

export const AuthContext = createContext({} as AuthContext)

export function AuthProvider({ children }: { children: ReactNode }) {
  const [session, setSession] = useState<null | UserAPIResponse>(null)

  function save(data: UserAPIResponse) {
    localStorage.setItem(`${LOCAL_STORAGE_KEY}`, JSON.stringify(data.user))
    localStorage.setItem(`${LOCAL_STORAGE_KEY}:token`, data.token)

    setSession(data)
  }

  return <AuthContext.Provider value={{ session, save }}>{children}</AuthContext.Provider>
}
