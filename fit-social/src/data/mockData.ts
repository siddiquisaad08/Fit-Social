import { Post, Notification, Challenge, Message, WorkoutData, Achievement } from '../types'
import { Award, Zap, Target } from 'lucide-react'

export const posts: Post[] = [
  {
    id: 1,
    user: 'John Doe',
    avatar: 'https://ik1yvfwzqbmjbmvs.public.blob.vercel-storage.com/avatar-1-4Kn5Tz.jpg',
    content: 'Just finished a 5K run! Personal best time!',
    image: 'https://ik1yvfwzqbmjbmvs.public.blob.vercel-storage.com/run-4Kn5Tz.jpg',
    likes: 24,
    comments: 5,
    isLiked: false,
    isSaved: false,
  },
  {
    id: 2,
    user: 'Jane Smith',
    avatar: 'https://ik1yvfwzqbmjbmvs.public.blob.vercel-storage.com/avatar-2-4Kn5Tz.jpg',
    content: 'New personal record on bench press! 💪',
    likes: 18,
    comments: 3,
    isLiked: true,
    isSaved: false,
  },
]

export const notifications: Notification[] = [
  {
    id: 1,
    type: 'like',
    user: 'Sarah Johnson',
    content: 'liked your post',
    time: '2 hours ago',
  },
  {
    id: 2,
    type: 'comment',
    user: 'Mike Williams',
    content: 'commented on your post',
    time: '4 hours ago',
  },
]

export const challenges: Challenge[] = [
  {
    id: 1,
    title: '30-Day Plank Challenge',
    description: 'Improve your core strength with daily planks',
    participants: 1500,
    duration: '30 days',
  },
  {
    id: 2,
    title: '10K Steps Daily',
    description: 'Walk 10,000 steps every day for a month',
    participants: 2800,
    duration: '30 days',
  },
]

export const messages: Message[] = [
  {
    id: 1,
    user: 'Emily Davis',
    avatar: 'https://ik1yvfwzqbmjbmvs.public.blob.vercel-storage.com/avatar-3-4Kn5Tz.jpg',
    lastMessage: 'Great job on your workout!',
    time: '10:30 AM',
    unread: true,
  },
  {
    id: 2,
    user: 'Alex Thompson',
    avatar: 'https://ik1yvfwzqbmjbmvs.public.blob.vercel-storage.com/avatar-4-4Kn5Tz.jpg',
    lastMessage: 'Want to join me for a run tomorrow?',
    time: 'Yesterday',
    unread: false,
  },
]

export const workoutData: WorkoutData[] = [
  { name: 'Mon', calories: 420, duration: 50 },
  { name: 'Tue', calories: 380, duration: 45 },
  { name: 'Wed', calories: 450, duration: 55 },
  { name: 'Thu', calories: 400, duration: 48 },
  { name: 'Fri', calories: 500, duration: 60 },
  { name: 'Sat', calories: 350, duration: 40 },
  { name: 'Sun', calories: 300, duration: 35 },
]

export const achievements: Achievement[] = [
  { title: '5K Runner', icon: Award, color: 'text-yellow-500' },
  { title: 'Workout Streak', icon: Zap, color: 'text-blue-500' },
  { title: 'Weight Loss Goal', icon: Target, color: 'text-green-500' },
]