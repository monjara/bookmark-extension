import { useState } from 'react'

const LinkRow = ({ item }) => {
  return (
    <div className='link-row'>
      <a href={item.url}>
        <span>{item.title}</span>
      </a>
    </div>
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
