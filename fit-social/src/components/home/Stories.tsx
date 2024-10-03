import React from 'react'
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

const stories = [
  { id: 1, user: 'John', avatar: 'https://ik1yvfwzqbmjbmvs.public.blob.vercel-storage.com/avatar-1-4Kn5Tz.jpg' },
  { id: 2, user: 'Sarah', avatar: 'https://ik1yvfwzqbmjbmvs.public.blob.vercel-storage.com/avatar-2-4Kn5Tz.jpg' },
  { id: 3, user: 'Mike', avatar: 'https://ik1yvfwzqbmjbmvs.public.blob.vercel-storage.com/avatar-3-4Kn5Tz.jpg' },
  { id: 4, user: 'Emily', avatar: 'https://ik1yvfwzqbmjbmvs.public.blob.vercel-storage.com/avatar-4-4Kn5Tz.jpg' },
]

export default function Stories() {
  return (
    <div className="flex space-x-4 overflow-x-auto pb-2">
      {stories.map((story) => (
        <div key={story.id} className="flex flex-col items-center">
          <Avatar className="w-16 h-16 ring-2 ring-blue-500 ring-offset-2">
            <AvatarImage src={story.avatar} alt={story.user} />
            <AvatarFallback>{story.user[0]}</AvatarFallback>
          </Avatar>
          <span className="text-sm mt-1">{story.user}</span>
        </div>
      ))}
    </div>
  )
}