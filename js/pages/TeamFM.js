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
                    <PlayerTemplate name="fm" position="Carry" nation="England" image="timmy.png"/>
                    <PlayerTemplate name="chris" position="Mid" nation="England" image="timmy.png"/>
                    <PlayerTemplate name="dows-" position="Offlane" nation="England" image="timmy.png"/>
                    <PlayerTemplate name="gaz" position="Support" nation="Wales" image="timmy.png"/>
                    <PlayerTemplate name="luki" position="Support" nation="Germany" image="timmy.png"/>
                </div>

            </div>

        );
    }
}
