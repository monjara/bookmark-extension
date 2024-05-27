import { useEffect, useRef, useState } from 'react'
import Tree from './tree'

export default function BookmarkWindow() {
  const [bookmarks, setBookmarks] = useState([])
  const [display, setDisplay] = useState(false)
  const keyCount = useRef(0)

  useEffect(() => {
    const getBookmarks = async () => {
      const res = await chrome.runtime.sendMessage({ type: 'bookmarks' })
      setBookmarks(res.tree)
    }
    getBookmarks()
  }, [])

  console.log('bookmarks: ', bookmarks)

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
      <div className='container'>
        {bookmarks.map((item) => (
          <Tree key={item.id} item={item} />
        ))}
      </div>
    </div>
  )
}
