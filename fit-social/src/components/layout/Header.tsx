import React from 'react'
import { Bell, MessageSquare, User, LogOut } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { useAuth } from '../../contexts/AuthContext'
import { useRouter } from 'next/router'

interface HeaderProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
  clearNotifications: () => void;
}

export default function Header({ activeTab, setActiveTab, clearNotifications }: HeaderProps) {
  const { user, logout } = useAuth()
  const router = useRouter()

  const handleLogout = () => {
    logout()
    router.push('/login')
  }

  return (
    <header className="bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex">
            <div className="flex-shrink-0 flex items-center">
              <h1 className="text-2xl font-bold text-gray-900">FitnessSocial</h1>
            </div>
            <nav className="hidden sm:ml-6 sm:flex sm:space-x-8">
              <Button
                variant={activeTab === 'home' ? 'default' : 'ghost'}
                onClick={() => setActiveTab('home')}
              >
                Home
              </Button>
              <Button
                variant={activeTab === 'challenges' ? 'default' : 'ghost'}
                onClick={() => setActiveTab('challenges')}
              >
                Challenges
              </Button>
              <Button
                variant={activeTab === 'messages' ? 'default' : 'ghost'}
                onClick={() => setActiveTab('messages')}
              >
                Messages
              </Button>
              <Button
                variant={activeTab === 'profile' ? 'default' : 'ghost'}
                onClick={() => setActiveTab('profile')}
              >
                Profile
              </Button>
            </nav>
          </div>
          <div className="hidden sm:ml-6 sm:flex sm:items-center">
            <Button variant="ghost" size="icon" onClick={clearNotifications}>
              <Bell className="h-5 w-5" />
            </Button>
            <Button variant="ghost" size="icon" onClick={() => setActiveTab('messages')}>
              <MessageSquare className="h-5 w-5" />
            </Button>
            <Button variant="ghost" size="icon" onClick={() => setActiveTab('profile')}>
              <User className="h-5 w-5" />
            </Button>
            {user && (
              <Button variant="ghost" size="icon" onClick={handleLogout}>
                <LogOut className="h-5 w-5" />
              </Button>
            )}
          </div>
        </div>
      </div>
    </header>
  )
}