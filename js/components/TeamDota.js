import React from "react";

import PlayerCardTemplate from "./players/PlayerCardTemplate";
import TeamSelect from "./TeamSelect";

export default class TeamDota extends React.Component {

    render() {
        return (

                <div id="player-container">
                    <PlayerCardTemplate name="mavis" position="Carry" nation="England" image="nopic.png"/>
                    <PlayerCardTemplate name="L3" position="Mid" nation="England" image="chris.png"/>
                    <PlayerCardTemplate name="dows-" position="Offlane" nation="England" image="dows.png"/>
                    <PlayerCardTemplate name="GaZ-" position="Support" nation="Wales" image="gareth.png"/>
                    <PlayerCardTemplate name="luci" position="Support" nation="Germany" image="nopic.png"/>
                </div>

        );
    }
}
