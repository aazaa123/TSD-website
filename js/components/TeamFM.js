import React from "react";
import { Link } from "react-router";

import PlayerCardTemplate from "./../components/players/PlayerCardTemplate";
import TeamSelect from "./../components/TeamSelect";

export default class TeamDota extends React.Component {

    render() {
        return (

            <div>

                <div id="player-container">
                    <PlayerCardTemplate name="fm" position="Carry" nation="England" image="timmy.png"/>
                    <PlayerCardTemplate name="chris" position="Mid" nation="England" image="timmy.png"/>
                    <PlayerCardTemplate name="dows-" position="Offlane" nation="England" image="timmy.png"/>
                    <PlayerCardTemplate name="gaz" position="Support" nation="Wales" image="timmy.png"/>
                    <PlayerCardTemplate name="luki" position="Support" nation="Germany" image="timmy.png"/>
                </div>

            </div>

        );
    }
}
