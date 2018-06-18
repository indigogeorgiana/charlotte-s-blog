import App from './components/App'
import Header from './components/Header'
import Footer from './components/Footer'

const React = require('react')
const ReactDOM = require('react-dom')
const header = require('../data/header.js')
const footer = require('../data/footer.js')

const message = {text: "Future home of Charlotte's web"}

ReactDOM.render(
  <div className="blog-container">
    <App message={message} />
    <Header title={header.title} />
    <Footer copyright={footer.copyright} author={footer.author}/>

  </div>,
  document.getElementById('root')
)
