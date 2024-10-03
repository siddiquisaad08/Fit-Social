import React from 'react'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { achievements } from '../../data/mockData'

export default function Achievements() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Achievements</CardTitle>
      </CardHeader>
      <CardContent>
        <ul className="space-y-2">
          {achievements.map((achievement, index) => (
            <li key={index} className="flex items-center space-x-2">
              {React.createElement(achievement.icon, { className: `w-5 h-5 ${achievement.color}` })}
              <span>{achievement.title}</span>
            </li>
          ))}
        </ul>
      </CardContent>
    </Card>
  )
}