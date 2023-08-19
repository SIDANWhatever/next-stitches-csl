import { Text } from '@src/components'
import { toCountdown } from '@src/helpers'
import { Duration, DurationObjectUnits } from 'luxon'
import { useEffect, useState } from 'react'

const RenderCountdown = (time: string | null) => {
  const [countdownTime, setCountdownTime] = useState('00:00:00')

  useEffect(() => {
    const interval = setInterval(() => {
      const countdown = toCountdown(time) as DurationObjectUnits
      setCountdownTime(Duration.fromObject(countdown).toFormat('hh:mm:ss')) // 00:00:00 was handled in DateTimeConverter helper
    }, 1000)
    return () => clearInterval(interval)
  })
  return <Text profile="domain-name">{countdownTime}</Text>
}

export { RenderCountdown }
