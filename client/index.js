import App from './components/App'
import Header from './components/Header'

const React = require('react')
const ReactDOM = require('react-dom')
const header = require('../data/header.js')

const message = {text: "Future home of Charlotte's web"}

ReactDOM.render(
  <div className="blog-container">
    <App message={message} />
    <Header title={header.title} />
  </div>,
  document.getElementById('root')
)
