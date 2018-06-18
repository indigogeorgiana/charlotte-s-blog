import React from 'react'

const Header = props => {
  return (
    <div>
      <a href={props.head.link}>{props.head.title}</a>
    </div>
  )
}
export default Header
