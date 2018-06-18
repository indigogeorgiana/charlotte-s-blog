const React = require('react')

function Header (props) {
  return (

    <div>
      <img src="/images/charlottes-web.png"/>
      <h1>{props.title}</h1>
    </div>
  )
}

export default Header
