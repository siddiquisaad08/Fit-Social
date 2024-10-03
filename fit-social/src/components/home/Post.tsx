import React from 'react'
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
import { ThumbsUp, MessageCircle, Share2, Bookmark } from 'lucide-react'
import { Post as PostType } from '../../types'

interface PostProps {
  post: PostType;
  onLike: (id: number) => void;
  onComment: (id: number) => void;
  onShare: (id: number) => void;
  onSave: (id: number) => void;
}

export default function Post({ post, onLike, onComment, onShare, onSave }: PostProps) {
  return (
    <Card>
      <CardHeader className="flex flex-row items-center space-x-4 pb-4">
        <Avatar>
          <AvatarImage src={post.avatar} alt={post.user} />
          <AvatarFallback>{post.user[0]}</AvatarFallback>
        </Avatar>
        <div>
          <h3 className="font-semibold">{post.user}</h3>
          <p className="text-sm text-gray-500">2 hours ago</p>
        </div>
      </CardHeader>
      <CardContent>
        <p>{post.content}</p>
        {post.image && (
          <img src={post.image} alt="Post content" className="mt-4 rounded-lg" />
        )}
      </CardContent>
      <CardFooter className="flex justify-between">
        <Button variant="ghost" size="sm" onClick={() => onLike(post.id)}>
          <ThumbsUp className={`w-4 h-4 mr-2 ${post.isLiked ? 'fill-current text-blue-500' : ''}`} />
          {post.likes}
        </Button>
        <Button variant="ghost" size="sm" onClick={() => onComment(post.id)}>
          <MessageCircle className="w-4 h-4 mr-2" />
          {post.comments}
        </Button>
        <Button variant="ghost" size="sm" onClick={() => onShare(post.id)}>
          <Share2 className="w-4 h-4 mr-2" />
          Share
        </Button>
        <Button variant="ghost" size="sm" onClick={() => onSave(post.id)}>
          <Bookmark className={`w-4 h-4 mr-2 ${post.isSaved ? 'fill-current text-yellow-500' : ''}`} />
          Save
        </Button>
      </CardFooter>
    </Card>
  )
}