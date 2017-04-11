import React from "react";
import { Link } from "react-router";

export default class PlayerTemplate extends React.Component {
    render() {

        return (
            <div className="player">
                <img src={"./assets/img/" + this.props.image}/>
                <Link to={this.props.name}>
                    <div> {this.props.name} </div>
                    <div> {this.props.position} </div>
                    <div> {this.props.nation} </div>
                </Link>
            </div>

        );
    }
}
