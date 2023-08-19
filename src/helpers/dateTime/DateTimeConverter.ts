import { DateTime } from 'luxon'

const toLocalTime = (time: string) => {
  const date = DateTime.fromISO(time)
  return date.toLocaleString(DateTime.DATETIME_MED)
}

const toCountdown = (time: string | null) => {
  if (!time) return null
  const now = DateTime.now()
  const end = DateTime.fromISO(time)
  const duration = end.diff(now, ['hours', 'minutes', 'seconds'])
  if (duration.seconds < 0) return { hours: 0, minutes: 0, seconds: 0 }
  return duration.toObject()
}

const toLastUpdatedTime = (time: string) => {
  const Time = DateTime.fromISO(time).toLocaleString({
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
    hour12: true
  })
  const TimezoneName = DateTime.fromISO(time).toFormat('ZZZZ')
  return `${Time} ${TimezoneName}`
}

export { toLocalTime, toCountdown, toLastUpdatedTime }
