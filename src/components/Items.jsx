import React from 'react'

const Items = (props) => {
  const { className } = props
  return (
    <ul className={className}>
      <li>Technology</li>
      <li>Ideas</li>
      <li>Leadership</li>
      <li>Video</li>
      <li>News</li>
      <li>Finance</li>
      <li>Entertainment</li>
    </ul>
  )
}

export default Items
