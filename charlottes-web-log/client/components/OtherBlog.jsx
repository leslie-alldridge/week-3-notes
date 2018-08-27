const React = require('react')

function OtherBlog(props){
    return (
        <a className="OtherBlog" href={props.link}>{props.blogBody}</a>
    )
}
export default OtherBlog