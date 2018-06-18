import React from 'react'

const Footer = props => {
  return (
    <div className="clear">
      <div className="footer">
        <span>{props.copyright}</span>
        <span>{props.author}</span>
      </div>
    </div>
  )
}
export default Footer
