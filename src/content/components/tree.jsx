import { getFavicon } from '@/utils/getFavicon'
import { useState } from 'react'
import FolderIcon from './folder-icon'
import FolderOpenIcon from './folder-open-icon'

const LinkRow = ({ item }) => {
  return (
    <a href={item.url} className='link-row'>
      <img src={getFavicon(item.url)} alt='' style={{ width: 16 }} />
      <span>{item.title}</span>
    </a>
  )
}

const FolderRow = ({ item }) => {
  const [open, setOpen] = useState(false)
  const toggle = () => {
    setOpen((old) => !old)
  }

  return (
    <>
      <div className='folder-row' onClick={toggle} onKeyUp={toggle}>
        {open ? <FolderOpenIcon /> : <FolderIcon />}
        <span>{item.title}</span>
      </div>
      {open &&
        item.children.map((child) => <Tree key={child.id} item={child} />)}
    </>
  )
}

export default function Tree({ item }) {
  if (!item?.children) {
    return <LinkRow item={item} />
  }
  return <FolderRow item={item} />
}
