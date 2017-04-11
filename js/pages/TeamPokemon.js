import React from "react";
import { Link } from "react-router";

import PlayerTemplate from "./../components/players/PlayerTemplate";
import TeamSelect from "./../components/TeamSelect";

export default class TeamDota extends React.Component {

    render() {
        return (

            <div>

                <TeamSelect />

                <div id="player-container">
                    <PlayerTemplate name="pokemon" position="Carry" nation="England" image="pikachu.png"/>
                    <PlayerTemplate name="chris" position="Mid" nation="England" image="pikachu.png"/>
                    <PlayerTemplate name="dows-" position="Offlane" nation="England" image="pikachu.png"/>
                    <PlayerTemplate name="gaz" position="Support" nation="Wales" image="pikachu.png"/>
                    <PlayerTemplate name="luki" position="Support" nation="Germany" image="pikachu.png"/>
                </div>

            </div>

        );
    }
}
