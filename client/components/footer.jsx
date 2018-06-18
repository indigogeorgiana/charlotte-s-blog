import React from 'react'

const Footer = props => {
  return (
    <div>
      <span>{props.copyright}</span>
      <span>{props.author}</span>
    </div>
  )
}
export default Footer
