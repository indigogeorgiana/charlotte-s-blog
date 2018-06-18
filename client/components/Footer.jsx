const React = require('react')

function Footer (props) {
  return (
    <div className='footer'>
      <p>{props.copyright} &#169; {props.author}</p>
    </div>
  )
}

export default Footer
