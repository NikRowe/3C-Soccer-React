import React, { useState } from 'react'
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    NavbarText
} from 'reactstrap';


const NavBar = (props) => {

    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => setIsOpen(!isOpen);

    return (
        <div>
            <Navbar sticky="top" light expand="lg" className="navbar pt-1">
                {/* Mobile Display Logo */}
                <NavbarBrand href="/" className="d-lg-none "><img src="/Img/Logo.png" width="175" height="175" alt="3C Soccer Logo"/></NavbarBrand>
                <NavbarToggler onClick={toggle} />
                <Collapse isOpen={isOpen} navbar className="collapse">
                    <Nav navbar >
                        <NavItem className="navButton">
                            <NavLink className="text-white" href="/about">About</NavLink>
                        </NavItem>
                        <NavItem className="navButton">
                            <NavLink className="text-white" href="/summerCamps">Summer Camps</NavLink>
                        </NavItem>
                        <NavItem className="navButton">
                            <NavLink className="text-white" href="/smallGroupTraining">Small Group/Individual Trainings</NavLink>
                        </NavItem>
                    </Nav>
                    {/* Desktop display logo */}
                    <NavbarBrand href="/" className="desktopNavImg d-none d-lg-block mt-4 mb-4 pt-5 pb-1"><img src="/Img/Logo.png" width="175" height="175" alt="3C Soccer Logo"/></NavbarBrand>
                    <NavbarText className="ml-auto">by Shep</NavbarText>
                </Collapse>
            </Navbar>
        </div>
    )
}

export default NavBar