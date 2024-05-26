import React from 'react'
import ReactDOM from 'react-dom'
import BookmarkWindow from './components/bookmark-window'
import './index.css'

const root = document.createElement('div')
root.id = 'bookmark-extension-root'
document.body.append(root)

ReactDOM.render(
  <React.StrictMode>
    <BookmarkWindow />
  </React.StrictMode>,
  root
)
