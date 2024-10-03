import React from 'react'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"

export default function YourProgress() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Your Progress</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-2">
          <div>
            <div className="flex justify-between text-sm font-medium">
              <span>Daily Step Goal</span>
              <span>7,500 / 10,000</span>
            </div>
            <Progress value={75} className="mt-1" />
          </div>
          <div>
            <div className="flex justify-between text-sm font-medium">
              <span>Weekly Workout Goal</span>
              <span>3 / 5 days</span>
            </div>
            <Progress value={60} className="mt-1" />
          </div>
        </div>
      </CardContent>
    </Card>
  )
}