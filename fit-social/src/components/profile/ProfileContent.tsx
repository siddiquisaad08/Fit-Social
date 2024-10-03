import React from 'react'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function ProfileContent() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>About Me</CardTitle>
      </CardHeader>
      <CardContent>
        <p className="mb-4">
          Passionate about fitness and living a healthy lifestyle. Always up for a new challenge and love
          connecting with like-minded individuals. Let's motivate each other to reach our fitness goals!
        </p>
        <h3 className="font-semibold mb-2">Recent Activity</h3>
        <ul className="list-disc list-inside space-y-1">
          <li>Completed 30-Day Plank Challenge</li>
          <li>Ran personal best in 10K race</li>
          <li>Started new Yoga for Flexibility program</li>
        </ul>
      </CardContent>
    </Card>
  )
}