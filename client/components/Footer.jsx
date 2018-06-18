const React = require('react')

function Footer (props) {
  return (
    <div className='footer'>
      <p>{props.copyright}</p>
      <p>{props.author}</p>
    </div>
  )
}

export default Footer
