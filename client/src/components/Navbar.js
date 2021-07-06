import './css/Navbar.scss'

const Navbar = () => {
    return (
        <div className="navbar">
                <nav>
                    <a href="#"><span>Navbar</span></a>

                    <ul>
                        <li><a href="#"><span>Link 1</span></a></li>
                        <li><a href="#"><span>Link 2</span></a></li>
                        <li><a href="#"><span>Link 3</span></a></li>
                        <li><a href="#"><span>Link 4</span></a></li>
                    </ul>
                </nav>
        </div>
    )
}

export default Navbar;