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
                    <PlayerTemplate name="Mario" position="Carry" nation="England" image="luigi.jpg"/>
                    <PlayerTemplate name="chris" position="Mid" nation="England" image="luigi.jpg"/>
                    <PlayerTemplate name="dows-" position="Offlane" nation="England" image="luigi.jpg"/>
                    <PlayerTemplate name="gaz" position="Support" nation="Wales" image="luigi.jpg"/>
                    <PlayerTemplate name="luki" position="Support" nation="Germany" image="luigi.jpg"/>
                </div>

            </div>

        );
    }
}
