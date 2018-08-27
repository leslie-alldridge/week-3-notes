const React = require('react')
import Post from './Post'
import data from '../../data/posts'

function Posts(props){
    return (
        <div className="Posts">
            <ul>
                {data.map(post => {
                    return (
                    <div key={post.id}>{post.title} || {post.date}
                    <Post postBody={post.paragraphs}/>
                    </div>
                    )
                })}
            </ul>
        </div>
    )
}
export default Posts