import React from 'react'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { challenges } from '../../data/mockData'

export default function TrendingChallenges() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Trending Challenges</CardTitle>
      </CardHeader>
      <CardContent>
        <ul className="space-y-2">
          {challenges.map((challenge) => (
            <li key={challenge.id} className="flex justify-between items-center">
              <span>{challenge.title}</span>
              <Badge variant="secondary">{challenge.participants} joined</Badge>
            </li>
          ))}
        </ul>
      </CardContent>
    </Card>
  )
}