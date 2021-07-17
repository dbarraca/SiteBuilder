import './css/Navbar.scss'

const NavbarForm = () => {
    return (
        <div className="navbar">
                <nav>
                {/* value="" onChange="" */}
                    <input className="brand-link nav-link text-input" type="text" placeholder="Brand"/>

                    <ul>
                        <li><input className="nav-link text-input" type="text" placeholder="Link 1"/></li>
                        <li><input className="nav-link text-input" type="text" placeholder="Link 2"/></li>
                        <li><input className="nav-link text-input" type="text" placeholder="Link 3"/></li>
                        <li><input className="nav-link text-input" type="text" placeholder="Link 4"/></li>
                    </ul>
                </nav>
        </div>
    )
}

export default NavbarForm;