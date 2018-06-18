import React from 'react'
import Header from './header.jsx'
import Footer from './footer.jsx'
import Posts from './posts.js'

const App = (props) => (
  <div>
    <Header title="Charlotte's Web Log" link='/'/>
    <Footer copyright="1980 " author='E. B. White'/>
    <Posts />
  </div>
)

export default App
