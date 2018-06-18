const React = require('react')

function Header (props) {
  return (

    <div className="blogHeader">
      <img src="/images/charlottes-web.png"/>
      <h1>{props.title}</h1>
    </div>
  )
}

export default Header
