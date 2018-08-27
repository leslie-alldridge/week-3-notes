const React = require('react')

function RecentEntry(props){
    return (
        <a href={props.entryLink}>{props.entryName}</a>
    )
}
export default RecentEntry