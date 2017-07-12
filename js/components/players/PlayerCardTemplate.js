import React from "react";

import { Link } from "react-router";

export default class PlayerCardTemplate extends React.Component {
    render() {

        return (
            <div className="player">

                <img src={"./assets/img/" + this.props.image}/>


                    <div className="player-card-info">
                        <div className="player-card-flag">
                            <img src={"./assets/img/flags/" + this.props.nation + ".svg"}/>
                        </div>

                        <Link to={"rosters/dota2/" + this.props.name}>
                            <div className="player-card-text">
                                <div className="player-card-name"> {this.props.name} </div>
                                <div className="player-card-role"> {this.props.position} </div>
                            </div>
                        </Link>
                    </div>

            </div>

        );
    }
}
