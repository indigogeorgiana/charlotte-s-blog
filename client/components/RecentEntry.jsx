import React from 'react'

const RecentEntry = props => {
  return (
    <div className ='recentEntry'>
      <a href={props.link}><h4>{props.name}</h4></a>
    </div>
  )
}
export default RecentEntry
