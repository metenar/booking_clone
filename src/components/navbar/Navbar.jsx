import "./navbar.css"

const Navbar = () => {
  return (
    <div className="navbar">
        <div className="navbarContainer">
            <span className="navbar-logo">NarTech.</span>
            <div className="navbar-items">
                <button className="navbar-button">Register</button>
                <button className="navbar-button">Login</button>
            </div>
        </div>
    </div>
  )
}

export default Navbar