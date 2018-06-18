const React = require('react')

const Footer = props => {
  return (
    <div className='footer'>
      <h6>{props.footerData.copyright}{props.footerData.author}</h6>
    </div>
  )
}
export default Footer
