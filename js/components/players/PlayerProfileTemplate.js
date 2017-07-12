import React from "react";
import { Link } from "react-router";
import loadjs from "loadjs";


export default class PlayerProfileTemplate extends React.Component {


    componentWillMount() {

        var wlRequest = new XMLHttpRequest();
        wlRequest.open('GET', 'https://api.opendota.com/api/players/' + this.props.steamId + '/wl?limit=10');

        wlRequest.onload = function(){

            var winLoss = JSON.parse(wlRequest.responseText);

            document.getElementById('won-text').innerHTML = winLoss.win;
            document.getElementById('lost-text').innerHTML = winLoss.lose;

            var wins = winLoss.win;
            var losses = winLoss.lose;

            function removeLoader(){

                var loader = document.getElementById("stats-loading-gif");
                loader.parentNode.removeChild(loader);

            }

            if(wins > losses){

                document.getElementById('win-graph').style.height = "100%";

                var lossesHeight = losses/wins * 100;

                document.getElementById('lose-graph').style.height = lossesHeight + "%";




            } else if(losses > wins){

                document.getElementById('lose-graph').style.height = "100%";

                var winHeight = wins/losses * 100;

                document.getElementById('win-graph').style.height = winHeight + "%";

            } else{

                document.getElementById('win-graph').style.height = "100%";
                document.getElementById('lose-graph').style.height = "100%";

            }

            document.getElementById('win-graph').style.height = winHeight + "%";
            document.getElementById('lose-graph').style.height = lossesHeight + "%";

            var loader = document.getElementById("stats-loading-gif");
            loader.parentNode.removeChild(loader);

        };


        wlRequest.send();

    };

    render() {

        return (

            <div>

            <div id="player-names">

                <h1 id="profile-header-ign"> {this.props.inGameName} </h1>

                <h2 id="profile-header-ign"> |  </h2>

                <h2 id="profile-header-name"> {this.props.name} </h2>

            </div>

            <div id="player-profile-container">

                <div id="player-profile-info-container">

                    <div id="player-profile-card" className="profile-section">

                        <img src={"./../../../assets/img/" + this.props.imageLink} />

                        <div id="player-profile-info">

                            <div id="player-profile-nation">
                                <img src={"./../../../assets/img/flags/" + this.props.nationLink} />
                            </div>

                            <div id="player-profile-role">
                                <a> {this.props.role} </a>
                            </div>

                            <div id="player-profile-age">
                                <a> {this.props.age} </a>
                            </div>

                        </div>

                    </div>


                    <div id="player-profile-stats" className="profile-section">

                        <div id="games-container">

                            <div id="games-won">

                                <h2> Games won: </h2>

                                <p id="won-text">  </p>

                            </div>

                            <div id="games-lost">

                                <h2> Games lost: </h2>

                                <p id="lost-text">  </p>

                            </div>

                        </div>


                        <div id="win-loss-graphs">

                            <img id="stats-loading-gif" src="./../../../assets/img/loading.svg" height="100px"/>

                            <div id="win-graph"> </div>

                            <div id="lose-graph"> </div>

                        </div>


                    </div>

                    <div id="player-profile-bio" className="profile-section">
                        {this.props.bio}
                    </div>

                    <div id="player-profile-video" className="profile-section">
                        <video autoPlay>

                            <source src={"./../../../assets/vid/" + this.props.videoLink} type="video/webm" />

                        </video>
                    </div>

                </div>

            </div>

        </div>

        );
    }
}
