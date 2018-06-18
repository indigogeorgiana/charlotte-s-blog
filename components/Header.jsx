import React from 'react'

const Header = (props) => {
  return (
    <div className='header-wrapper'>
      <a href={props.head.link}>{props.head.title}</a>
    </div>
  )
}

export default Header
