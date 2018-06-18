const React = require('react')

function Entry (props) {
  return (
    <div className="recentEntries">
      <li className="spiderBullet"><a href="{props.link}">{props.name}</a></li>
    </div>
  )
}

export default Entry
