import React from "react";
import { Link } from "react-router";

import PlayerTemplate from "./../components/players/PlayerTemplate";
import TeamSelect from "./../components/TeamSelect";

export default class TeamCSGO extends React.Component {

    render() {
        return (

            <div>

                <TeamSelect />

                <div id="player-container">
                    <PlayerTemplate name="CSGO" position="Carry" nation="England" image="pepe.png"/>
                    <PlayerTemplate name="CSGO" position="Mid" nation="England" image="pepe.png"/>
                    <PlayerTemplate name="CSGO" position="Offlane" nation="England" image="pepe.png"/>
                    <PlayerTemplate name="CSGO" position="Support" nation="Wales" image="pepe.png"/>
                    <PlayerTemplate name="CSGO" position="Support" nation="Germany" image="pepe.png"/>
                </div>

            </div>
        );
    }
}
