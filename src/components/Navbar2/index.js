import React from 'react'
import { Nav, NavLink, NavMenu, NavBtn, NavBtnLink } from './Navbar2Elements'

const Navbar2 = () => {
    return (
        <>
            <Nav>
                <NavMenu>
                    <NavLink to='/reportslist' activeStyle>
                        Reports
                    </NavLink>
                    <NavLink to='/analyzation' activeStyle>
                        Analyzation
                    </NavLink>
                </NavMenu>
                <NavBtn>
                    <NavBtnLink to='/reportslist'>Logout</NavBtnLink>
                </NavBtn>
            </Nav>
        </>
    )
}

export default Navbar2