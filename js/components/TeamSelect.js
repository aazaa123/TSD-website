import React from "react";
import { Link } from "react-router";

export default class TeamSelect extends React.Component {

    render() {
        return (

            <ul id="team-select">
                <Link to="dota">
                    <li> Dota 2 </li>
                </Link>

                <Link to="csgo">
                    <li> CS:GO </li>
                </Link>

                <Link to="pokemon">
                    <li> Pokémon </li>
                </Link>

                <Link to="supermario">
                    <li> Super Mario </li>
                </Link>

                <Link to="fm">
                    <li> FM </li>
                </Link>

            </ul>

        );
    }
}
