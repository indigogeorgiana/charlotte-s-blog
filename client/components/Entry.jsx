const React = require('react')

function Entry (props) {
  return (
    <div className="recentEntries">
      <a href="{props.link}"><h4>{props.name}</h4></a>
    </div>
  )
}

export default Entry
