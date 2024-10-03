import React, { createContext, useState, useContext, useEffect } from 'react'
import { User } from '../types'

interface AuthContextType {
  user: User | null;
  login: (email: string, password: string) => Promise<void>;
  signup: (name: string, email: string, password: string) => Promise<void>;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined)

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null)

  useEffect(() => {
    const storedUser = localStorage.getItem('user')
    if (storedUser) {
      setUser(JSON.parse(storedUser))
    }
  }, [])

  const login = async (email: string, password: string) => {
    // In a real application, you would make an API call here
    const mockUser: User = {
      id: 1,
      name: 'John Doe',
      email: email,
      avatar: 'https://ik1yvfwzqbmjbmvs.public.blob.vercel-storage.com/avatar-1-4Kn5Tz.jpg'
    }
    setUser(mockUser)
    localStorage.setItem('user', JSON.stringify(mockUser))
  }

  const signup = async (name: string, email: string, password: string) => {
    // In a real application, you would make an API call here
    const mockUser: User = {
      id: Date.now(),
      name: name,
      email: email,
      avatar: 'https://ik1yvfwzqbmjbmvs.public.blob.vercel-storage.com/avatar-1-4Kn5Tz.jpg'
    }
    setUser(mockUser)
    localStorage.setItem('user', JSON.stringify(mockUser))
  }

  const logout = () => {
    setUser(null)
    localStorage.removeItem('user')
  }

  return (
    <AuthContext.Provider value={{ user, login, signup, logout }}>
      {children}
    </AuthContext.Provider>
  )
}

export const useAuth = () => {
  const context = useContext(AuthContext)
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider')
  }
  return context
}