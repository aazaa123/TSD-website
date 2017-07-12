import React from "react";
import { Link } from "react-router";

import PlayerProfileTemplate from "./../components/players/PlayerProfileTemplate";

export default class GaZ extends React.Component {

    render() {
        return (


                <PlayerProfileTemplate steamId="89874378" imageLink="gareth.png" inGameName="GaZ-" name="Gareth Pike" role="support" age="20" nationLink="Wales.svg" bio="Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
" videoLink="dota2.webm"/>


        );
    }
}
