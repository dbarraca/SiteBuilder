import './css/Navbar.scss'

const Navbar = () => {
    return (
        <div className="navbar">
                <nav>
                    <a className="nav-link brand-link" href="https://www.google.com/"><span>Navbar</span></a>

                    <ul>
                        <li><a className="nav-link" href="https://www.google.com/"><span>Link 1</span></a></li>
                        <li><a className="nav-link" href="https://www.google.com/"><span>Link 2</span></a></li>
                        <li><a className="nav-link" href="https://www.google.com/"><span>Link 3</span></a></li>
                        <li><a className="nav-link" href="https://www.google.com/"><span>Link 4</span></a></li>
                    </ul>
                </nav>
        </div>
    )
}

export default Navbar;