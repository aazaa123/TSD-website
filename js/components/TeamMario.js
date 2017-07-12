import React from "react";
import { Link } from "react-router";

import PlayerCardTemplate from "./../components/players/PlayerCardTemplate";
import TeamSelect from "./../components/TeamSelect";

export default class TeamDota extends React.Component {

    render() {
        return (

            <div>

                <div id="player-container">
                    <PlayerCardTemplate name="Mario" position="Carry" nation="England" image="luigi.jpg"/>
                    <PlayerCardTemplate name="chris" position="Mid" nation="England" image="luigi.jpg"/>
                    <PlayerCardTemplate name="dows-" position="Offlane" nation="England" image="luigi.jpg"/>
                    <PlayerCardTemplate name="gaz" position="Support" nation="Wales" image="luigi.jpg"/>
                    <PlayerCardTemplate name="luki" position="Support" nation="Germany" image="luigi.jpg"/>
                </div>

            </div>

        );
    }
}
