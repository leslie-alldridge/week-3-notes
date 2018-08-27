const React = require('react')
import data from '../../data/recent-entries'
import RecentEntry from './RecentEntry';

function OtherBlogs(props){
    return (
        <div className="RecentEntries">
            <ul>
                {data.map(entry => {
                    return (
                    <div key={entry.id}>
                        <RecentEntry entryName={entry.name} entryLink={entry.link}/>
                    </div>
                    )
                })}
            </ul>
        </div>
    )
}
export default OtherBlogs