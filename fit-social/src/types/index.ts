export interface Post {
  id: number;
  user: string;
  avatar: string;
  content: string;
  image?: string;
  likes: number;
  comments: number;
  isLiked: boolean;
  isSaved: boolean;
}

export interface Notification {
  id: number;
  type: 'like' | 'comment' | 'follow';
  user: string;
  content: string;
  time: string;
}

export interface Challenge {
  id: number;
  title: string;
  description: string;
  participants: number;
  duration: string;
}

export interface Message {
  id: number;
  user: string;
  avatar: string;
  lastMessage: string;
  time: string;
  unread: boolean;
}

export interface WorkoutData {
  name: string;
  calories: number;
  duration: number;
}

export interface Achievement {
  title: string;
  icon: React.ElementType;
  color: string;
}

export interface User {
  id: number;
  name: string;
  email: string;
  avatar: string;
}