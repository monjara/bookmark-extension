import { useEffect, useRef, useState } from 'react'

export default function BookmarkWindow() {
  const [display, setDisplay] = useState(false)
  const keyCount = useRef(0)

  useEffect(() => {
    let timerId
    const handler = (e) => {
      if (e.key === 'a') {
        keyCount.current += 1
        timerId = setTimeout(() => {
          keyCount.current = 0
        }, 1000)
      }
      if (e.key === 'Escape') {
        setDisplay(false)
        keyCount.current = 0
      }
      if (keyCount.current === 2) {
        setDisplay(true)
      }
    }

    window.addEventListener('keydown', handler)
    return () => {
      window.removeEventListener('keydown', handler)
      if (timerId) {
        clearTimeout(timerId)
      }
    }
  }, [])

  if (!display) {
    return null
  }

  return (
    <div className='window'>
      <h1>Bookmark Window</h1>
    </div>
  )
}
