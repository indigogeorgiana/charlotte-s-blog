import React from 'react'

const Footer = props => {
  return (
    <div className='footer'>
      <p>{props.footer.copyright}, {props.footer.author}</p>
    </div>
  )
}
export default Footer
