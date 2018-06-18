import App from './components/App'

import Header from './components/Header'
import Footer from './components/Footer'
import Posts from './components/Posts'
const React = require('react')

const ReactDOM = require('react-dom')
const header = require('../data/header.js')
const footer = require('../data/footer.js')
const posts = require('../data/posts.js')

const message = {text: "Future home of Charlotte's web"}

ReactDOM.render(
  <div className="blog-container">
    <App message={message} />
    <Header title={header.title} />
    <Footer copyright={footer.copyright} author={footer.author}/>
    {posts.map(function (post) {
      return <Posts key={post.id} id={post.id} title={post.title} date={post.date} commentCount={post.commentCount} paragraphs={post.paragraphs}/>
    }
    )
    }
  </div>,
  document.getElementById('root')
)
