import React from 'react'
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Card, CardContent } from "@/components/ui/card"
import { messages } from '../../data/mockData'

export default function MessageList() {
  return (
    <Card>
      <CardContent className="p-0">
        <ul className="divide-y divide-gray-200">
          {messages.map((message) => (
            <li key={message.id} className="flex items-center p-4 hover:bg-gray-50 cursor-pointer">
              <Avatar className="h-10 w-10 flex-shrink-0">
                <AvatarImage src={message.avatar} alt={message.user} />
                <AvatarFallback>{message.user[0]}</AvatarFallback>
              </Avatar>
              <div className="ml-3 flex-1 overflow-hidden">
                <div className="flex items-center justify-between">
                  <h3 className="text-sm font-medium">{message.user}</h3>
                  <p className="text-xs text-gray-500">{message.time}</p>
                </div>
                <p className="text-sm text-gray-500 truncate">{message.lastMessage}</p>
              </div>
              {message.unread && (
                <div className="ml-2 flex-shrink-0">
                  <span className="inline-block h-2 w-2 rounded-full bg-blue-500"></span>
                </div>
              )}
            </li>
          ))}
        </ul>
      </CardContent>
    </Card>
  )
}