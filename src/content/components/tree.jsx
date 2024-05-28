import { getFavicon } from '@/utils/getFavicon'
import { useState } from 'react'
import FolderIcon from './folder-icon'
import FolderOpenIcon from './folder-open-icon'

const LinkRow = ({ item, depth }) => {
  return (
    <a
      href={item.url}
      className='link-row'
      style={{
        paddingLeft: depth,
      }}
    >
      <img src={getFavicon(item.url)} alt='' style={{ width: 16 }} />
      <span>{item.title}</span>
    </a>
  )
}

const FolderRow = ({ item, depth }) => {
  const [open, setOpen] = useState(false)
  const toggle = () => {
    setOpen((old) => !old)
  }

  return (
    <>
      <div
        className='folder-row'
        onClick={toggle}
        onKeyUp={toggle}
        style={{
          paddingLeft: depth,
        }}
      >
        {open ? <FolderOpenIcon /> : <FolderIcon />}
        <span>{item.title}</span>
      </div>
      {open &&
        item.children.map((child) => (
          <Tree key={child.id} item={child} depth={depth} />
        ))}
    </>
  )
}

export default function Tree({ item, depth = 0 }) {
  const childDepth = depth + 10
  if (!item?.children) {
    return <LinkRow item={item} depth={childDepth} />
  }
  return <FolderRow item={item} depth={childDepth} />
}
