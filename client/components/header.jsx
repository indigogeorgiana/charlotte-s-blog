import React from 'react'

const Header = props => {
  return (
    <div>
      <a href={'' + props.link}><span>{props.title}</span></a>
    </div>
  )
}
export default Header
