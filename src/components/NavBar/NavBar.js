import React from 'react';
import{Nav,Navlogo,NavMenu,Navitem,NavLink,NavSearch} from './NavbarElements'
import {Link} from 'react-scroll';
const NavBar = () => {
    return (
        <div>
              <Nav>
        <Navlogo>Delicious </Navlogo>
        <NavMenu>
        <Navitem>
           <Link to="Slider" smooth={true}  >Home</Link> 
        </Navitem>
        <Navitem>
            <Link to="contact" smooth={true} >About</Link>
        </Navitem>
        <Navitem>
            <Link to="MenuHeadElements" smooth={true}  >Menu</Link>
        </Navitem>
        <Navitem>
            <Link to="Special" smooth={true} >Specials</Link>
        </Navitem>
        <Navitem>
            <Link to="images" smooth={true}  >Events</Link>
        </Navitem>
        <Navitem>
            <Link to="Chef" smooth={true} >chefs</Link>
        </Navitem>
        <Navitem>
            <Link to="contact" smooth={true}  >Contact</Link>
        </Navitem>
        <Navitem>
            <Link to="Rewiwes" smooth={true}  >Rewiwes</Link>
        </Navitem>
        </NavMenu>
        <NavSearch to="Table" smooth={true} >Book a Table
        </NavSearch>

     </Nav> 
        </div>
    )
}

export default NavBar
