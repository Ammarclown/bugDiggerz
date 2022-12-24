import "./header.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSoccerBall } from "@fortawesome/free-regular-svg-icons"
import { faSearch } from "@fortawesome/free-solid-svg-icons"
const Header = () => {
    return (
        <div className="header">
            <div className="headerContainer">
                <div className="headerList">
                </div>
                <h1 className="headerTitle">Want to watch the most challenging cup on earth ? Hurry now</h1>
                <p className="headerdesc">
                    Enjoy discounted prices when you book the tickets through our official website
                </p>
                <button className="headerBtn">Reserve Your Ticket</button>
                <div className="headerSearch">
                    <div className="headerSearchItem">
                        <FontAwesomeIcon className="headerIcon" icon={faSearch} />
                        <input type="text"
                            placeholder="Search Matches" className="headerSearchInput" />
                        <div className="headerSearchItem">
                            <button className="headerSearchButton">Search</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Header