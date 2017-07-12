import React from "react";
import { Link } from "react-router";

import PlayerCardTemplate from "./../components/players/PlayerCardTemplate";
import TeamSelect from "./../components/TeamSelect";

export default class TeamCSGO extends React.Component {

    render() {
        return (

            <div>

                <div id="player-container">
                    <PlayerCardTemplate name="CSGO" position="Carry" nation="England" image="pepe.png"/>
                    <PlayerCardTemplate name="CSGO" position="Mid" nation="England" image="pepe.png"/>
                    <PlayerCardTemplate name="CSGO" position="Offlane" nation="England" image="pepe.png"/>
                    <PlayerCardTemplate name="CSGO" position="Support" nation="Wales" image="pepe.png"/>
                    <PlayerCardTemplate name="CSGO" position="Support" nation="Germany" image="pepe.png"/>
                </div>

            </div>
        );
    }
}
