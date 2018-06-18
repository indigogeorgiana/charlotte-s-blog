import App from './components/App'
import Header from './components/Header'
import Footer from './components/Footer'
import Post from './components/Post'
import Blog from './components/Blog'
import Entry from './components/Entry'

const React = require('react')
const ReactDOM = require('react-dom')
const header = require('../data/header.js')
const footer = require('../data/footer.js')
const posts = require('../data/posts.js')
const blogs = require('../data/other-blogs.js')
const entries = require('../data/recent-entries.js')

const message = {text: "Future home of Charlotte's web"}

ReactDOM.render(
  <div className="blog-container">
    <App message={message} />
    <Header title={header.title} />

    {blogs.map(blog => {
      return (
        <Blog key={blog.id} blogTitle={blog.blogTitle} link={blog.link} />
      )
    })}

    {posts.map(function (post) {
      return <Post key={post.id} id={post.id} title={post.title} date={post.date} commentCount={post.commentCount} paragraphs={post.paragraphs}/>
    }
    )
    }

    {entries.map(entry => {
      return (
        <Entry key={entry.id} name={entry.name} link={entry.link} />
      )
    })}

    <Footer copyright={footer.copyright} author={footer.author}/>
  </div>,
  document.getElementById('root')
)
