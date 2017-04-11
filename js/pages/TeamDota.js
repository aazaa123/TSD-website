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
                    <PlayerTemplate name="nathan" position="Carry" nation="England" image="dows.png"/>
                    <PlayerTemplate name="chris" position="Mid" nation="England" image="chris.png"/>
                    <PlayerTemplate name="dows-" position="Offlane" nation="England" image="dows.png"/>
                    <PlayerTemplate name="gaz" position="Support" nation="Wales" image="gareth.png"/>
                    <PlayerTemplate name="luki" position="Support" nation="Germany" image="dows.png"/>
                </div>

            </div>

        );
    }
}
