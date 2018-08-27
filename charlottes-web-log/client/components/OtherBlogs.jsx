const React = require('react')
import data from '../../data/other-blogs'
import OtherBlog from './OtherBlog';

function OtherBlogs(props){
    return (
        <div className="OtherBlogs">
            <ul>
                {data.map(blog => {
                    return (
                    <div id="list" key={blog.id}>
                        <OtherBlog blogBody={blog.blogTitle} link={blog.link}/>
                    </div>
                    )
                })}
            </ul>
        </div>
    )
}
export default OtherBlogs