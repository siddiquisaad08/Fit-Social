import React from 'react'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { challenges } from '../../data/mockData'

export default function ChallengeList() {
  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
      {challenges.map((challenge) => (
        <Card key={challenge.id}>
          <CardHeader>
            <CardTitle>{challenge.title}</CardTitle>
          </CardHeader>
          <CardContent>
            <p>{challenge.description}</p>
            <p className="mt-2 text-sm text-gray-500">
              {challenge.participants} participants • {challenge.duration}
            </p>
          </CardContent>
          <CardFooter>
            <Button className="w-full">Join Challenge</Button>
          </CardFooter>
        </Card>
      ))}
    </div>
  )
}