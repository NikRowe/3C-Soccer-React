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
            <Navbar light expand="md" className="navbar pt-4">
                {/* Mobile Display Logo */}
                <NavbarBrand href="/" className="d-md-none"><img src="/Img/Logo.png" width="175" height="175" alt="3C Soccer Logo"/></NavbarBrand>
                <NavbarToggler onClick={toggle} />
                <Collapse isOpen={isOpen} navbar>
                    <Nav navbar>
                        <NavItem>
                            <NavLink href="/about">About</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href="/summerCamps">Summer Camps</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href="/smallGroupTraining">Small Group Trainings</NavLink>
                        </NavItem>
                    </Nav>
                    {/* Desktop display logo */}
                    <NavbarBrand href="/" className="mx-auto d-none d-md-block mt-4 mb-4 pt-5 pb-1"><img src="/Img/Logo.png" width="175" height="175" alt="3C Soccer Logo"/></NavbarBrand>
                    <NavbarText className="ml-auto">by Shep</NavbarText>
                </Collapse>
            </Navbar>
        </div>
    )
}

export default NavBar