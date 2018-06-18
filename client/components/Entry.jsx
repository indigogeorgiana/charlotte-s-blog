const React = require('react')

function Entry (props) {
  return (
    <div className="recentEntries">
      <a href="{props.link}"><p>{props.name}</p></a>
    </div>
  )
}

export default Entry
