import React from 'react'

const RecentEntry = props => {
  return (
    <div className='recentEntry'>
      <a href={props.link}>{props.name}</a>
    </div>

  )
}
export default RecentEntry
