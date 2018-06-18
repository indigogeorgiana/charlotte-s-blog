import React from 'react'
import recents from '../data/recentEntries'

const RecentEnts = props => {
  return (
    <div>
      <span>{props.id}</span><br/>
      <span>{props.name}</span><br/>
      <span>{props.link}</span><br/>
    </div>
  )
}

const RecEntsTemplate = (props) => {
  return (
    <div className='recnts-temp'>
      {
        recents.map(ents => {
          return <RecentEnts
            key={ents.id}
            name={ents.name}
            link={ents.link}/>
        })
      }
    </div>
  )
}
export default RecEntsTemplate
