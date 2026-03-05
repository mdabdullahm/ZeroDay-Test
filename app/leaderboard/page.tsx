import Ecosystem from '@/components/leaderboard/Ecosystem'
import Leaderboard from '@/components/leaderboard/Leaderboard'
import Stats from '@/components/leaderboard/Stats'
import React from 'react'

export default function page() {
  return (
    <div>
      <Leaderboard/>
      <Stats/>
      <Ecosystem/>
    </div>
  )
}
