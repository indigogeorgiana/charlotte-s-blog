import React from 'react'

const Footer = props => {
  return (
    <div className='footer-wrapper'>
      <span className='copyright'>{props.copyright}</span>
      <span className='author'>{props.author}</span>
    </div>
  )
}

export default Footer
