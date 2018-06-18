import React from 'react'

const Header = (props) => {
  return (
    <div className='header-wrapper'>
      <a href={props.content.link}><h1>{props.content.title}</h1></a>
    </div>
  )
}

export default Header
