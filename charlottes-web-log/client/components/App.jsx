const React = require('react')
import Header from './Header'
import Footer from './Footer'
import Posts from './Posts'
import OtherBlogs from './OtherBlogs';
import RecentEntries from './RecentEntries';

function App (props) {
    return (
      <div class="container">
        <h1>{props.message.text}</h1>
        <Header />
        <div class="blogcontainer">
        <OtherBlogs />
        <Posts />
        <RecentEntries />
        </div>
        <Footer />
      </div>
    )
  }

export default App
