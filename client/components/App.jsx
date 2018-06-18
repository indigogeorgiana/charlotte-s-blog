import React from 'react'
import Header from './header.jsx'
import Footer from './footer.jsx'
import Posts from './posts.jsx'

const App = (props) => (
  <div>
    <Header title="Charlotte's Web Log" link='/'/>
    <Posts /><br/>
    <Footer copyright="1980 " author='E. B. White'/>
  </div>
)

export default App


