import React from 'react'
import {NavLink} from 'react-router-dom';

export default function Header() {
    const active = {color : "green"};

    /*
    <Link> component. It is just an abstraction to anchor tag which enables us to avoid post back to server

    Note :- <NavLink> and <Link> are same except NavLink provides extra styling attribute to indicate  which link has been clicked.
    
    In Link component the href attribute is replaced by the attribute to
    
    Original piece of code without client side routing
    <a  href=”/” >Home</a>
    
    With client side routing
    <NavLink to="/" exact  activeStyle={active}>Home</NavLink>
    */
    return (
        <nav>
            <NavLink to="/" exact  activeStyle={active}>Home</NavLink>   | <NavLink to="/courses" activeStyle={active}>Courses</NavLink> | <NavLink activeStyle={active} to="/about">About</NavLink>
        </nav>
    )
}
