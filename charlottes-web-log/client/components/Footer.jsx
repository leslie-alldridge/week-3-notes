const React = require('react')
import data from '../../data/footer'

function Footer(props){
    return (
        <div className="Footer">
        <p>{data.copyright}{data.author}</p>
        </div>
    )
}
export default Footer