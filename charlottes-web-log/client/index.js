import App from './components/App'

const React = require('react')
const ReactDOM = require('react-dom')



const message = {text: "Future home of Charlotte's web"}

ReactDOM.render(
  <App message={message} />,
  document.getElementById('root')
)
