import React from 'react'
import ReactDOM from 'react-dom/client'
import BookmarkWindow from './components/bookmark-window'
import './index.css'

const root = document.createElement('div')
root.id = 'bookmark-extension-root'
document.body.appendChild(root)

ReactDOM.createRoot(root).render(
  <React.StrictMode>
    <BookmarkWindow />
  </React.StrictMode>
)
