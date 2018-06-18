import React from 'react'
import Header from './header.jsx'
import Footer from './footer.jsx'
import Posts from './posts.jsx'
import OtherBlogs from './other-blogs.jsx'

const App = (props) => (
  <div>
    <Header title="Charlotte's Web Log" link='/'/>
    <div><OtherBlogs /><br/></div>
    <div><Posts /><br/></div>
    <Footer copyright="1980 " author='E. B. White'/>
  </div>
)

export default App
