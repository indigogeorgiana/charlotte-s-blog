import React from 'react'

const Footer = (props) => {
  return (
    <div className='footer-wrapper'>
      <span className='copyright'>{props.content.copyright}</span>
      <span className='author'>{props.content.author}</span>
    </div>
  )
}

export default Footer
