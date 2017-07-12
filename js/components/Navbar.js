import React from "react";
import { Link } from "react-router";

export default class Navbar extends React.Component {
    render() {
        return (
            <nav id="main-nav">

                <div id="nav-title">
                    <img src="./assets/img/logos/tsd_nav.svg" height="50px"/>
                    <a> The Swamp Donkeys </a>
                </div>

                <ul>
                    <li> <Link to="/"> Home </Link> </li>
                    <li> <Link to="/rosters"> Rosters </Link> </li>
                    <li> <a href="./../#"> Matches </a></li>
                    <li> <a href="./../#"> Merch </a></li>
                </ul>

            </nav>
        );
    }
}
