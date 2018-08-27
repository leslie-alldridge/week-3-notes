const React = require('react')
import data from '../../data/header'

function Header(){
    return (
    <div className="header">
        <p>{data.link}{data.title}</p>
    </div>
    )
}
export default Header