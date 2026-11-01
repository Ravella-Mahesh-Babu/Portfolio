import { useEffect, useState } from 'react'

export default function useTypewriter(words, speed = 80, hold = 1200) {
  const [wordIndex, setWordIndex] = useState(0)
  const [charIndex, setCharIndex] = useState(0)
  const [isDeleting, setIsDeleting] = useState(false)

  useEffect(() => {
    const currentWord = words[wordIndex]

    if (!isDeleting && charIndex === currentWord.length) {
      const holdTimer = window.setTimeout(() => setIsDeleting(true), hold)
      return () => window.clearTimeout(holdTimer)
    }

    if (isDeleting && charIndex === 0) {
      setIsDeleting(false)
      setWordIndex((prev) => (prev + 1) % words.length)
      return undefined
    }

    const timer = window.setTimeout(
      () => setCharIndex((prev) => prev + (isDeleting ? -1 : 1)),
      isDeleting ? Math.max(speed / 2, 35) : speed,
    )

    return () => window.clearTimeout(timer)
  }, [charIndex, hold, isDeleting, speed, wordIndex, words])

  return words[wordIndex].slice(0, charIndex)
}
