import React from 'react'
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

const suggestedUsers = [
  { id: 1, name: 'Alice Johnson', avatar: 'https://ik1yvfwzqbmjbmvs.public.blob.vercel-storage.com/avatar-5-4Kn5Tz.jpg' },
  { id: 2, name: 'Bob Smith', avatar: 'https://ik1yvfwzqbmjbmvs.public.blob.vercel-storage.com/avatar-6-4Kn5Tz.jpg' },
  { id: 3, name: 'Carol White', avatar: 'https://ik1yvfwzqbmjbmvs.public.blob.vercel-storage.com/avatar-7-4Kn5Tz.jpg' },
]

export default function SuggestedUsers() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Suggested Users</CardTitle>
      </CardHeader>
      <CardContent>
        <ul className="space-y-4">
          {suggestedUsers.map((user) => (
            <li key={user.id} className="flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <Avatar>
                  <AvatarImage src={user.avatar} alt={user.name} />
                  <AvatarFallback>{user.name[0]}</AvatarFallback>
                </Avatar>
                <span className="font-medium">{user.name}</span>
              </div>
              <Button variant="outline" size="sm">Follow</Button>
            </li>
          ))}
        </ul>
      </CardContent>
    </Card>
  )
}