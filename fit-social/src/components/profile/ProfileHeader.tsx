import React from 'react'
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"

export default function ProfileHeader() {
  return (
    <div className="flex items-center space-x-4 mb-4">
      <Avatar className="w-24 h-24">
        <AvatarImage src="https://ik1yvfwzqbmjbmvs.public.blob.vercel-storage.com/profile-picture-4Kn5Tz.jpg" alt="@johndoe" />
        <AvatarFallback>JD</AvatarFallback>
      </Avatar>
      <div>
        <h2 className="text-2xl font-bold">John Doe</h2>
        <p className="text-gray-500">Fitness Enthusiast | Runner | Yoga Practitioner</p>
        <div className="flex space-x-4 mt-2">
          <span><strong>42</strong> posts</span>
          <span><strong>1.5k</strong> followers</span>
          <span><strong>500</strong> following</span>
        </div>
      </div>
      <Button>Edit Profile</Button>
    </div>
  )
}