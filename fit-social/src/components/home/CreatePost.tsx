import React from 'react'
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Image, Smile } from 'lucide-react'

export default function CreatePost() {
  return (
    <Card>
      <CardContent className="pt-4">
        <Textarea placeholder="What's on your mind?" />
      </CardContent>
      <CardFooter className="flex justify-between">
        <div>
          <Button variant="ghost" size="sm">
            <Image className="w-4 h-4 mr-2" />
            Photo
          </Button>
          <Button variant="ghost" size="sm">
            <Smile className="w-4 h-4 mr-2" />
            Feeling
          </Button>
        </div>
        <Button>Post</Button>
      </CardFooter>
    </Card>
  )
}