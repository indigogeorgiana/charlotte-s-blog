import React from 'react'
import RecentEntry from './RecentEntry'
import entries from '../../data/recent-entries'

const RecentEntries = props => {
  return (
    <div className='recentEntries'>
      <h2>Recent Entries</h2>
      {
        entries.map(entry => {
          return <RecentEntry
            key={entry.id}
            name={entry.name}
            link={entry.link} />
        })
      })
    </div>

  )
}
export default RecentEntries
