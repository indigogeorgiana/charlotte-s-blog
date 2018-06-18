import React from 'react'
import head from '../data/header.js'
import Header from './Header.jsx'
import OtherBlogs from './OtherBlogs.jsx'
import blogs from '../data/otherblogs.js'
import Posts from './Posts.jsx'
import post from '../data/posts'
import RecentEntries from './RecentEntries.jsx'
import entries from '../data/recententries'
import Footer from './Footer.jsx'
import footer from '../data/footer'

const App = () => (
  <div className='container'>
    <Header head = {head} />
    <OtherBlogs blogs = {blogs}/>
    <Posts post = {post} />
    <RecentEntries entries = {entries} />
    <Footer footer = {footer} />
  </div>
)

export default App
