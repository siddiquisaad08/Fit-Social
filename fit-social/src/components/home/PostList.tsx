import React from 'react'
import Post from './Post'
import { Post as PostType } from '../../types'

interface PostListProps {
  posts: PostType[];
  onLike: (id: number) => void;
  onComment: (id: number) => void;
  onShare: (id: number) => void;
  onSave: (id: number) => void;
}

export default function PostList({ posts, onLike, onComment, onShare, onSave }: PostListProps) {
  return (
    <div className="space-y-4">
      {posts.map((post) => (
        <Post
          key={post.id}
          post={post}
          onLike={onLike}
          onComment={onComment}
          onShare={onShare}
          onSave={onSave}
        />
      ))}
    </div>
  )
}