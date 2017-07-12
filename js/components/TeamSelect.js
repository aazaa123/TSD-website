import React from "react";
import { Link } from "react-router";

export default class TeamSelect extends React.Component {

    render() {
        return (

            <ul id="team-select">
                <Link to="/rosters/dota2/">
                    <li> <img src="../../../assets/img/logos/dota2.svg" /> DOTA 2 </li>
                </Link>

                <Link to="/rosters/csgo/">
                    <li> <img src="../../../assets/img/logos/csgo.svg" /> CS:GO </li>
                </Link>

                <Link to="/rosters/pokemon/">
                    <li> <img src="../../../assets/img/logos/pokemon.svg" /> Pokémon </li>
                </Link>

                <Link to="/rosters/supermario/">
                    <li> <img src="../../../assets/img/logos/mario.svg" /> Super Mario </li>
                </Link>

                <Link to="/rosters/fm/">
                    <li> <img src="../../../assets/img/logos/fm.svg" /> FM </li>
                </Link>

            </ul>

        );
    }
}
