import React from 'react'
import Header from './Header.jsx'
import Footer from './Footer.jsx'

import OtherBlogs from './OtherBlogs.jsx'
import Posts from './Posts.jsx'
import RecentEntries from './RecentEntries.jsx'

// data
import head from '../../data/header'
import footerData from '../../data/footer'

const App = () => (
  <div className='container'>
    <Header head = {head} />
    <OtherBlogs />
    <Posts />
    <RecentEntries />
    <Footer footerData = {footerData} />
  </div>
)

export default App
