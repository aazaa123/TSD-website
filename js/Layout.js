import React from "react";
import ReactDOM from "react-dom";
import { Router, Route, IndexRoute, hashHistory, browserHistory } from "react-router";

import RosterLayout from "./pages/RosterLayout";
import DefaultLayout from "./pages/DefaultLayout";
import Home from "./pages/Home"
//
import TeamDota from "./components/TeamDota"
import TeamCSGO from "./components/TeamCSGO"
import TeamPokemon from "./components/TeamPokemon"
import TeamMario from "./components/TeamMario"
import TeamFM from "./components/TeamFM"
//
import Nathan from "./pages/Mavis"
import Chris from "./pages/L3"
import Dows from "./pages/Dows"
import GaZ from "./pages/GaZ-"
import Luci from "./pages/Luci"



const app = document.getElementById('app');

ReactDOM.render(



    <Router history={browserHistory}>

        <Route path="/" component={DefaultLayout}>

            <IndexRoute component={Home}> </IndexRoute>

            <Route path="rosters" component={RosterLayout}>

                //Dota team
                <Route path="dota2" component={TeamDota}></Route>

                //Dota players
                <Route path="dota2/mavis" component={Nathan} > </Route>
                <Route path="dota2/L3" component={Chris} > </Route>
                <Route path="dota2/dows-" component={Dows} > </Route>
                <Route path="dota2/GaZ-" component={GaZ} > </Route>
                <Route path="dota2/luci" component={Luci} > </Route>


                <Route path="csgo" component={TeamCSGO}> </Route>
                <Route path="pokemon" component={TeamPokemon}> </Route>
                <Route path="supermario" component={TeamMario}> </Route>
                <Route path="fm" component={TeamFM}> </Route>


            </Route>

        </Route>

    </Router>,
app);
