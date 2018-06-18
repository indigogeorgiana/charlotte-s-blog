import React from 'react'
import Header from './Header.jsx'
import Footer from './Footer.jsx'

import {head} from '../data/header.js'

const App = (props) => {
  return (
    <div className='app'>
      <Header content={head} />
      <Footer />
    </div>
  )
}

export default App
