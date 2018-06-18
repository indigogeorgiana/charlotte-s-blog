import React from 'react'

const Footer = props => {
  return (
    <div className='footer-wrapper'>
      <span className='footer'>{props.footer.copyright}, {props.footer.author}</span>
    </div>
  )
}

export default Footer
