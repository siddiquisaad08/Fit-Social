import React, { useState, useEffect } from 'react'
import { useRouter } from 'next/router'
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import Layout from '../components/layout/Layout'
import Stories from '../components/home/Stories'
import CreatePost from '../components/home/CreatePost'
import PostList from '../components/home/PostList'
import TrendingChallenges from '../components/home/TrendingChallenges'
import YourProgress from '../components/home/YourProgress'
import SuggestedUsers from '../components/home/SuggestedUsers'
import ChallengeList from '../components/challenges/ChallengeList'
import MessageList from '../components/messages/MessageList'
import ProfileHeader from '../components/profile/ProfileHeader'
import ProfileContent from '../components/profile/ProfileContent'
import WorkoutStats from '../components/profile/WorkoutStats'
import Achievements from '../components/profile/Achievements'
import { posts } from '../data/mockData'
import { useAuth } from '../contexts/AuthContext'

export default function Home() {
  const [activeTab, setActiveTab] = useState('home')
  const [localPosts, setLocalPosts] = useState(posts)
  const { user } = useAuth()
  const router = useRouter()

  useEffect(() => {
    if (!user) {
      router.push('/login')
    }
  }, [user, router])

  const handleLike = (id: number) => {
    setLocalPosts(localPosts.map(post =>
      post.id === id ? { ...post, isLiked: !post.isLiked, likes: post.isLiked ? post.likes - 1 : post.likes + 1 } : post
    ))
  }

  const handleComment = (id: number) => {
    // Implement comment functionality
  }

  const handleShare = (id: number) => {
    // Implement share functionality
  }

  const handleSave = (id: number) => {
    setLocalPosts(localPosts.map(post =>
      post.id === id ? { ...post, isSaved: !post.isSaved } : post
    ))
  }

  const clearNotifications = () => {
    // Implement clear notifications functionality
  }

  if (!user) {
    return null // or a loading spinner
  }

  return (
    <Layout activeTab={activeTab} setActiveTab={setActiveTab} clearNotifications={clearNotifications}>
      <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-4">
        <TabsList className="hidden">
          <TabsTrigger value="home">Home</TabsTrigger>
          <TabsTrigger value="challenges">Challenges</TabsTrigger>
          <TabsTrigger value="messages">Messages</TabsTrigger>
          <TabsTrigger value="profile">Profile</TabsTrigger>
        </TabsList>
        <TabsContent value="home" className="space-y-4">
          <Stories />
          <div className="grid gap-4 md:grid-cols-3">
            <div className="md:col-span-2 space-y-4">
              <CreatePost />
              <PostList
                posts={localPosts}
                onLike={handleLike}
                onComment={handleComment}
                onShare={handleShare}
                onSave={handleSave}
              />
            </div>
            <div className="space-y-4">
              <TrendingChallenges />
              <YourProgress />
              <SuggestedUsers />
            </div>
          </div>
        </TabsContent>
        <TabsContent value="challenges">
          <ChallengeList />
        </TabsContent>
        <TabsContent value="messages">
          <MessageList />
        </TabsContent>
        <TabsContent value="profile" className="space-y-4">
          <ProfileHeader />
          <div className="grid gap-4 md:grid-cols-2">
            <div className="space-y-4">
              <ProfileContent />
              <Achievements />
            </div>
            <WorkoutStats />
          </div>
        </TabsContent>
      </Tabs>
    </Layout>
  )
}