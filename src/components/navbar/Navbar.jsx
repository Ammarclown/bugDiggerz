import "./navbar.css"

const Navbar = () => {
    return (
        <div className="navbar" >
            <div className="navContainer">
                <span className="logo"><img src="https://digitalhub.fifa.com/transform/3a170b69-b0b5-4d0c-bca0-85880a60ea1a/World-Cup-logo-landscape-on-dark?io=transform:fill&quality=75" alt="logo" /></span>
                <div className="navItmes">
                    <button className="navButton">Register</button>
                    <button className="navButton">Login</button>
                </div>
            </div>
        </div>
    )
}
export default Navbar;