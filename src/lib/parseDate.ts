export const parseDate = (difference: number) => {
  const data = {
    days: Math.floor(difference / (1000 * 60 * 60 * 24)),
    hours: Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
    minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
    seconds: Math.floor((difference % (1000 * 60)) / 1000)
  }

  return `${data.days} Días, ${data.hours}hs, ${data.minutes}m, ${data.seconds}s`
}
