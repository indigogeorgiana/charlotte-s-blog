import React from 'react'
import Header from './Header'
import Footer from './Footer'
import Posts from './Posts'
import OtherBlogs from './OtherBlogs'
import RecEntsTemplate from './RecentEntries'

const App = (props) => (
  <div className="bodyDiv">
    <Header title="Charlotte's Web Log" link='/'/>
    <div><OtherBlogs /><br/></div>
    <div><Posts /><br/></div>
    <div><RecEntsTemplate /><br/></div>
    <Footer copyright="1980 " author='E. B. White'/>
  </div>
)

export default App
