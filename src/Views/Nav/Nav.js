import React from "react";
import { NavLink } from "react-router-dom";
import './Nav.scss';
class Nav extends React.Component {
    render() {
        return (
            <div class="topnav">
                <NavLink to="/" exact>Home</NavLink>
                <NavLink to="/About" >About</NavLink>
                <NavLink to="/Todos" >Todo list</NavLink>
            </div>
        )
    }
}
export default Nav;