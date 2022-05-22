import React from 'react'
import { Nav, NavLink, NavMenu, NavBtn, NavBtnLink } from './NavbarElements'

const Navbar = () => {
    return (
        <>
            <Nav>
                <NavMenu>
                    <NavLink to='/' activeStyle>
                        Home
                    </NavLink>
                    <NavLink to='/myreports' activeStyle>
                        My Reports
                    </NavLink>
                </NavMenu>
                <NavBtn>
                    <NavBtnLink to='/'>Logout</NavBtnLink>
                </NavBtn>
            </Nav>
        </>
    )
}

export default Navbar