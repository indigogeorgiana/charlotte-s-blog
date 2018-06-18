import React from 'react'
import Header from './Header.jsx'
import Footer from './Footer.jsx'

import headerData from '../data/header'

const App = (props) => {
  return (
    <div className='app'>
      <Header content={headerData}/>
      <Footer />
    </div>
  )
}

export default App
