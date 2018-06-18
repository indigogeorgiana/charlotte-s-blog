import React from 'react'
import RecentEntry from './RecentEntry'

import recentEntriesData from '../../data/recent-entries.js'

const RecentEntries = props => {
  return (
    <div className ='recentEntries'>
      {
        recentEntriesData.map(entry => {
          return <RecentEntry
            key={entry.id}
            name={entry.name}
            link={entry.link} />
        })
      }
    </div>
  )
}
export default RecentEntries
