import React from 'react'

import Header from './Header.jsx'
import Footer from './Footer.jsx'
import OtherBlogs from './OtherBlogs.jsx'
// import OtherBlog from './OtherBlog.jsx'
// import Posts from './Posts.jsx'
// import Post from './Post.jsx'
// import RecentEntries from './RecentEntries.jsx'
// import RecentEntry from './RecentEntry.jsx'

import {head} from '../data/header.js'
import {foot} from '../data/footer.js'
import {blogs} from '../data/otherblogs.js'
// import {posts} from '../data/posts.js'
// import {recententries} from '../data/recententries.js'

const App = (props) => {
  return (
    <div className='app'>
      <Header content={head} />
      <OtherBlogs content={blogs} />
      {/* <OtherBlog />
      <Posts />
      <Post />
      <RecentEntries />
      <RecentEntry /> */}
      <Footer content={foot} />
    </div>
  )
}

export default App
