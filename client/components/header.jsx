const React = require('react')

const Header = props => {
  return (
    <div className='header'>
      <a href={props.head.title}><h1>{props.head.title}</h1></a>
    </div>
  )
}

export default Header
